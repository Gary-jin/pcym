<template>
	<view class="fzBox">
		<el-menu
		  :default-active="tabNum"
		  class="el-menu-demo"
		  mode="horizontal"
		  @select="handleSelect"
		  background-color="#F1F6FF"
		  text-color="#969696"
		  active-text-color="#4088FF">
		  <el-menu-item index="1">我的模板</el-menu-item>
			<el-menu-item index="2">创建模板</el-menu-item>
		</el-menu>
		<view v-if="tabNum=='1'">
			<view class="fenziBox">
				<el-form ref="formSea" :model="search" :rules="searchRules" label-width="80px">
				  <el-form-item label="关键字" prop="key">
				    <el-input v-model="search.key" size="small"
						 placeholder="请输入内容"
						></el-input>
				  </el-form-item>
				</el-form>
				<el-button type="primary" @click="onSubmitSea" size="small">搜索</el-button>
				<el-button type="primary" @click="resetFormSea" size="small" plain>重置</el-button>
			</view>
			<template>
				<el-table
					ref="multipleTable"
					:data="tableData"
					style="width: 100%;padding: 0 20px;">
					<el-table-column prop="mould_name" label="模板名称"></el-table-column>
					<!-- <el-table-column prop="" label="域名数量"></el-table-column> -->
					<el-table-column prop="username" label="持有人"></el-table-column>
					<el-table-column prop="email" label="邮箱"></el-table-column>
					<el-table-column
						prop="status"
						label="模板状态"
						:filters="groupLi"
						:filter-method="filterTag"
						filter-placement="bottom-end">
						<template slot-scope="scope">
								{{groupLi[scope.row.status]['text']}}
						</template>
					</el-table-column>
					
					<!-- <el-table-column
						label="操作"
						width="120">
						<template slot-scope="scope">
							<el-button
								@click.native.prevent="goDetail(scope.$index, tableData[scope.$index])"
								type="text"
								size="small">
								修改
							</el-button>
							<el-button
								@click.native.prevent="goDetail(scope.$index, tableData[scope.$index])"
								type="text"
								size="small">
								删除
							</el-button>
						</template>
					</el-table-column> -->
					
				</el-table>
			</template>
			<view class="pagBox">
				<view class="pagL">
				</view>
				<view class="pagR">
					<el-pagination
						@size-change="handleSizeChange"
						@current-change="handleCurrentChange"
						:current-page="pagin.page"
						:page-sizes="[50, 100, 200]"
						:page-size="pagin.pagesize"
						layout="total, sizes, prev, pager, next, jumper"
						:total="totalNum">
					</el-pagination>
				</view>
			</view>	
		</view>
		<!-- 批量分组 -->
		<view style="padding: 20px;" v-if="tabNum=='2'">			
			<el-steps :space="200" :active="0" finish-status="finish">
			  <el-step title="填写信息"></el-step>
			  <el-step title="审核(1-2个工作日)"></el-step>
			  <el-step title="查看审核结果"></el-step>
			</el-steps>
			<view style="height: 20px;"></view>
			<view class="d_f" >
				<view class="formBox">
					<el-form ref="form" :rules="rules" :model="form" label-width="230px">
						<el-form-item label="模板名称"  prop="mould_name">
							<el-input size="small" class="itemW" v-model="form.mould_name"></el-input>
						</el-form-item>
						<el-form-item label="域名持有者类型" >
							<el-radio-group @change="getidentityList" v-model="form.type">
								<el-radio label="0">个人</el-radio>
								<el-radio label="1">企业</el-radio>
							</el-radio-group>
						</el-form-item>
						<el-form-item prop="username" :label="form.type=='0'?'域名持有者姓名':'域名所有者企业名称'">
							<view class="d_f">
								<el-input size="small" class="itemW" v-model="form.username"></el-input>
								<view class="formLx">
									<!-- 我的模板 -->
								</view>								
							</view>
						</el-form-item>	
						<block>
							<el-form-item label="证件类型" prop="identity">
								<el-select v-model="form.identity" size="small" class="itemW">
									<el-option :label="item.name" :value="item.name_en" v-for="(item,index) in identityList" :key="index"></el-option>
								</el-select>								
							</el-form-item>
							<el-form-item label="证件号码" prop="identity_num">
								<el-input size="small" class="itemW" v-model="form.identity_num"></el-input>
							</el-form-item>
							<el-form-item label="证件图片" prop="identity_img">
								<view style="width: 300px;height: 220px;" @click="cheImg(1)">
									<el-image style="width: 100%; height: 100%;" v-if="!identity_img"
											src="../../../../static/image/admin/idz.png"></el-image>
									<el-image style="width: 100%; height: 100%;" v-else
											:src="identity_img"></el-image>
								</view>
							</el-form-item>
						</block>
						
						<el-form-item label="所属区域">
							<view class="itemW">
								<region @getAddress="getAddress"></region>
							</view>
						</el-form-item>	
						<el-form-item label="通讯地址（中文）" prop="address">
							<el-input size="small" class="itemW" v-model="form.address"></el-input>
						</el-form-item>
						<el-form-item label="邮编"  prop="mail_code">
							<el-input size="small" class="itemW" v-model="form.mail_code"></el-input>
						</el-form-item>
						<el-form-item label="邮箱"  prop="email">
							<el-input size="small" class="itemW" v-model="form.email"></el-input>
						</el-form-item>
						<el-form-item label="电话" prop="mobile">
							<view class="f_bc" style="width: 300px;">
								<el-input @change="changeMobile" type="number" min="0" size="small" style="width:68%" v-model="mobile1" placeholder="座机号码/手机号"></el-input>
								<el-input @change="changeMobile" type="number" min="0" size="small" style="width:30%" v-model="mobile2" placeholder="分机号"></el-input>
							</view>
						</el-form-item>
						
						<el-form-item prop="username_en" :label="form.type=='0'?'域名持有者名称（英文）':'域名所有者企业名称（英文）'" >
							<el-input size="small" class="itemW" v-model="form.username_en"></el-input>
						</el-form-item>
						<el-form-item label="所在省份（英文）" prop="province_en">
							<el-input size="small" class="itemW" v-model="form.province_en"></el-input>
						</el-form-item>
						<el-form-item label="所在城市（英文）" prop="city_en">
							<el-input size="small" class="itemW" v-model="form.city_en"></el-input>
						</el-form-item>
						<el-form-item label="通讯地址（英文）" prop="address_en">
							<el-input size="small" class="itemW" v-model="form.address_en"></el-input>
						</el-form-item>
						
						
						
						<el-form-item>
							<el-button type="primary" @click="onSubmit">提交</el-button>
							<el-button type="primary" @click="resetForm" plain>重置</el-button>
						</el-form-item>
					</el-form>				
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import region from '@/components/common/region.vue'; 
	export default {
		components: {
			region
		},
		data() {
			return {
				tabNum:'1',
				tableData:[],
				mobile1:'',
				mobile2:'',
				identity_img:'',
				form: {
					mould_name:'', //模板名称
					type: '0', // 类型0个人1企业
					username:'', //用户/企业名称
					country:'中国', //国家
					province:'北京', //省份
					city:'北京市', //城市
					address:'', //详细地址
					mail_code:'',//邮政编码
					mobile: '',//手机
					email:'',//	邮箱
					identity:'', //证件类别
					identity_num:'',//证件编号
					identity_img:'',//证件图片
					username_en:'', //姓名 英文
					province_en:'',//	省份 英文
					city_en:'',//城市 英文
					address_en:'',//详细地址 英文
				},
				rules: {
					mould_name: [
						{ required: true, message: '请填写模板名称', trigger: 'blur' }
					],
					username: [
						{ required: true, message: '请填写', trigger: 'blur' }
					],
					identity: [
						{ required: true, message: '请选择证件类型', trigger: 'change' }
					],
					identity_num: [
						{ required: true, message: '请填写证件号码', trigger: 'blur' }
					],
					identity_img: [
						{ required: true, message: '请选择证件图片', trigger: 'blur' }
					],
					address: [
						{ required: true, message: '请选择通讯地址（中文）', trigger: 'blur' }
					],
					mail_code: [
						{ required: true, message: '请填写邮编', trigger: 'blur' }
					],
					email: [
						{ required: true, message: '请填写邮箱', trigger: 'blur' }
					],
					mobile: [
						{ required: true, message: '请填写电话', trigger: 'blur' }
					],
					username_en: [
						{ required: true, message: '请填写域名持有者（英文）', trigger: 'blur' }
					],
					province_en: [
						{ required: true, message: '请填写所在省份（英文）', trigger: 'blur' }
					],
					city_en: [
						{ required: true, message: '请填写所在城市（英文）', trigger: 'blur' }
					],
					address_en: [
						{ required: true, message: '请填写通讯地址（英文）', trigger: 'blur' }
					],
					
				},
				identityList: [ ], //证件列表
				search:{
					key:''
				},
				searchRules:{
					key: [
						{ required: true, message: '请填写关键字', trigger: 'blur' }
					],
				},
				numLength: 0,
				typeBtn:'warning',
				checked:false,
				totalNum: 0,
				pagin: {
					page: 1, //页码
					pagesize: 50 //条数
				},
				groupLi:[
					{ text: '待审核', value: '0' },
					{ text: '白名单', value: 1 },
					{ text: '注册局审核中', value: 2 },
					{ text: '等待邮箱认证', value: 3 },
					{ text: '等待认证上传', value: 4 },
					{ text: '审核失败', value: 5 },
				]
			}
		},
		mounted() {
			this.getIdentityList()
			this.getMouldList()
		},
		methods: {
			getMouldList(){
				let that = this;
				that.$http('member.mouldList',
					{...that.pagin,...that.search}).then(res => {
					if (res.code === 1) {
						that.tableData = res.data.data
						that.totalNum = res.data.total
					}
				});
			},
			//证件类型
			getIdentityList(){
				let that = this;
				that.$http('member.identityList',
					{
						type: this.form.type
					}).then(res => {
					if (res.code === 1) {
						this.identityList = res.data
					}
				});
			},
			// 筛选状态
			filterTag(value, row, column) {
				console.log(value, row, column);
				return row.type === value;
			},
			handleSelect(e){
				this.tabNum = e
			},
			onSubmit() {
				this.$refs['form'].validate((valid) => {
					if (valid) {
						this.$http('member.addMould',
							{
								...this.form
							}).then(res => {
							this.$util.showErrorMsg(res.msg);
						});
					} 
				});
			},
			resetForm() {
				this.$refs['form'].resetFields();
				this.identity_img = ''
			},
			getAddress(e){
				this.form.country = e.country;
				this.form.province = e.city;
				this.form.city = e.site;
			},
			changeMobile(){
				this.form.mobile = this.mobile2 ? this.mobile2+'-'+this.mobile1:this.mobile1
			},
			changeRow(val){
				this.numLength = this.$util.textareaLength(val);
			},
			cheImg(val){
				let that = this;
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'], 
					sourceType: ['album'],
					success: res => {
						res.tempFilePaths.forEach(img => {
							that.$util.uploadImage('common/upload', img).then(res => {
								that.identity_img = res.fullurl;
								that.form.identity_img = res.url;
							});
						});
					}
				});
			},
			handleSizeChange(val) {
				this.pagin.pagesize = val
				this.getMouldList()
			},
			handleCurrentChange(val) {
				this.pagin.page = val
				this.getMouldList()
			},
			onSubmitSea() {
				this.$refs['formSea'].validate((valid) => {
					if (valid) {
						this.getMouldList()
					} 
				});
			},
			resetFormSea() {
				this.$refs['formSea'].resetFields();
			},
		}
	}
</script>
<style lang="scss" scoped>
	.fzBox{
		background-color: #FFFFFF;
	}
	.fenziBox{
		display: flex;
		align-items: center;
		padding: 20px;
		.el-input{
			width: 160px;
			margin-right: 10px;
		}
	}
	
	.pagBox{
		padding: 20px 14px;
		background-color: #FFFFFF;
		margin-bottom: 40px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.pagL{
			.el-select{
				width: 150px;
				margin-left: 5px;
			}
			.btn{
				margin-left: 20px;
			}
		}
	}
	
	.formBox{
		width: 90%;
		margin-left: 50px;
		.el-form{
			// width: 550px;
		}
		.numSize{
			color: $text-color-main;
		}
		.d_f_c{
			position: relative;
			left: -16px;
		}
		.itemW{
			width: 300px;
		}
		.formLx{
			color: $text-color-main;
			margin-left: 10px;	
		}
	}
</style>