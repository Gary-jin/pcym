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
				<text style="margin-left: 10px;">关键字：</text>
				<el-input
					size="small"
					style="width: 200px;margin-right: 10px;"
				  placeholder="请输入内容"
				  v-model="record.textarea">
				</el-input>
				<el-button type="primary" size="small">搜索</el-button>
				<el-button type="primary" size="small" plain>重置</el-button>
			</view>
			<template>
				<el-table
					ref="multipleTable"
					:data="tableData"
					style="width: 100%;padding: 0 20px;"
					max-height="250">
					<el-table-column prop="date1" label="分组名称"></el-table-column>
					<el-table-column prop="date2" label="域名数量"></el-table-column>
					<el-table-column
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
					</el-table-column>
					
				</el-table>
			</template>
			<view class="pagBox">
				<view class="pagL">
				</view>
				<view class="pagR">
					<el-pagination
						@size-change="handleSizeChange"
						@current-change="handleCurrentChange"
						:current-page="4"
						:page-sizes="[100, 200, 300, 400]"
						:page-size="100"
						layout="total, sizes, prev, pager, next, jumper"
						:total="400">
					</el-pagination>
				</view>
			</view>	
		</view>
		<!-- 批量分组 -->
		<view style="padding: 20px;" v-if="tabNum=='2'">			
			<el-steps :space="200" :active="1" finish-status="finish">
			  <el-step title="填写信息"></el-step>
			  <el-step title="审核(1-2个工作日)"></el-step>
			  <el-step title="查看审核结果"></el-step>
			</el-steps>
			<view style="height: 20px;"></view>
			<view class="d_f" >
				<view class="formBox">
					<el-form ref="form" :model="form" label-width="180px">
						<el-form-item label="模板名称" >
							<el-input size="small" class="itemW" v-model="form.name"></el-input>
						</el-form-item>
						<el-form-item label="域名持有者类型" >
							<el-radio-group v-model="form.resource">
								<el-radio label="1">个人</el-radio>
								<el-radio label="2">企业</el-radio>
							</el-radio-group>
						</el-form-item>
						<el-form-item :label="form.resource=='1'?'域名持有者姓名':'域名所有者企业名称'">
							<view class="d_f">
								<el-select v-model="form.region" size="small" class="itemW" filterable placeholder="请选择">
									<el-option
										v-for="item in options"
										:key="item.value"
										:label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
								<view class="formLx">
									我的模板
								</view>								
							</view>
						</el-form-item>	
						
						<block>
							<el-form-item label="证件类型" >
								<el-select v-model="form.region" size="small" class="itemW">
									<el-option label="区域一" value="shanghai"></el-option>
									<el-option label="区域二" value="beijing"></el-option>
								</el-select>								
							</el-form-item>
							<el-form-item label="证件号码" >
								<el-input size="small" class="itemW" v-model="form.name"></el-input>
							</el-form-item>
							<el-form-item label="证件图片" >
								<view style="width: 300px;height: 220px;" @click="cheImg(1)">
									<el-image style="width: 100%; height: 100%;" v-if="!form.idz"
											src="../../../../static/image/admin/idz.png"></el-image>
									<el-image style="width: 100%; height: 100%;" v-else
											:src="form.idz"></el-image>
								</view>
							</el-form-item>
						</block>
						
						<el-form-item label="所属区域">
							<view class="itemW">
								<region></region>
							</view>
						</el-form-item>	
						<el-form-item label="通讯地址（中文）" >
							<el-input size="small" class="itemW" v-model="form.name"></el-input>
						</el-form-item>
						<el-form-item label="邮编" >
							<el-input size="small" class="itemW" v-model="form.name"></el-input>
						</el-form-item>
						<el-form-item label="电话" >
							<view class="f_bc" style="width: 300px;">
								<el-input size="small" style="width:68%" v-model="form.name" placeholder="座机号码/手机号"></el-input>
								<el-input size="small" style="width:30%" v-model="form.name" placeholder="分机号"></el-input>
							</view>
						</el-form-item>
						
						<el-form-item :label="form.resource=='1'?'域名持有者名称（英文）':'域名所有者企业名称（英文）'" >
							<el-input size="small" class="itemW" v-model="form.name"></el-input>
						</el-form-item>
						<el-form-item label="所在省份（英文）" >
							<el-input size="small" class="itemW" v-model="form.name"></el-input>
						</el-form-item>
						<el-form-item label="所在城市（英文）" >
							<el-input size="small" class="itemW" v-model="form.name"></el-input>
						</el-form-item>
						<el-form-item label="通讯地址（英文）" >
							<el-input size="small" class="itemW" v-model="form.name"></el-input>
						</el-form-item>
						
						
						
						<el-form-item>
							<el-button type="primary" @click="onSubmit">提交</el-button>
							<el-button type="primary" @click="onSubmit" plain>重置</el-button>
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
				input:'',
				tableData:[
					{
						date1:'分组1',
						date2:'23'
					},
					{
						date1:'分组2',
						date2:'23'
					}
				],
				form: {
					name: '',
					region:'',
					resource:'1',
					idz:''
				},
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '龙须面'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
				record:{//记录
					region:'',
					textarea:''
				},
				numLength: 0,
				typeBtn:'warning',
				checked:false,
				
			}
		},
		onLoad() {
		},
		onShow() {
			
		},
		onHide() {
			
		},
		methods: {
			handleSelect(e){
				this.tabNum = e
			},
			onSubmit() {
				console.log(this.checked);
				console.log('submit!');
			},
			changeRow(val){
				this.numLength = this.$util.textareaLength(val);
			},
			cheImg(val){
				let that = this;
				uni.chooseImage({
						count: 1, 
						success: function (res) {
							that.form.idz = res.tempFilePaths[0]
						}
				});
			}
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