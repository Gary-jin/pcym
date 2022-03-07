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
		  <el-menu-item index="1">域名转出</el-menu-item>
			<el-menu-item index="2">转出记录</el-menu-item>
		</el-menu>
		<view v-if="tabNum=='2'">
			<view class="fenziBox">
				<text>状态：</text>
				<el-select v-model="record.region"  size="small" placeholder="请选择">
					<el-option label="处理中" value="shanghai"></el-option>
					<el-option label="转出中" value="beijing"></el-option>
				</el-select>
				<text style="margin-left: 10px;">域名：</text>
				<el-input
				  type="textarea"
				  :rows="1"
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
						label="操作">
						<template slot-scope="scope">
							<el-button
								@click.native.prevent="goDetail(scope.$index, tableData[scope.$index])"
								type="text"
								size="small">
								取消
							</el-button>
							<el-button
								@click.native.prevent="goDetail(scope.$index, tableData[scope.$index])"
								type="text"
								size="small">
								重新发送转移码
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
		<view style="padding: 20px;" v-if="tabNum=='1'">			
			<el-alert
					title="转出的域名如果正在出售中，系统会自动下架域名。"
					type="warning"
					show-icon>
			</el-alert>
			<view class="d_f" >
				<view class="formBox">
					<el-form ref="form" :model="form" label-width="70px">
						<el-form-item label="域名" >
							<el-input
								type="textarea"
								:rows="4"
								@input="changeRow(form.name)"
								placeholder="每行一个域名,一次最多1000个"
								v-model="form.name">
							</el-input>
							<text>您已经填写 <text class="numSize">{{numLength}}</text> 个域名，还可添加 <text class="numSize">{{1000-numLength}}</text> 个</text>
						</el-form-item>
					<!-- 	<view class="d_f_c">
							<el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
								<i class="iconfontAl icon-wenhao1"></i>
							</el-tooltip>
							<el-form-item label="手机号码" >
								13045676541
								<el-button style="margin-left: 30px;" :type="typeBtn" plain size="small">获取验证码</el-button>
							</el-form-item>						
						</view> -->
						<!-- <el-form-item label="验证码" >
							<el-input v-model="input" style="width: 280px;" placeholder="请输入内容" size="small"></el-input>
							<view>
								 <el-checkbox v-model="checked"></el-checkbox>
								勾选后，在60分钟内相同业务类型，不需要再次验证。
							</view>
						</el-form-item>	 -->
						<el-form-item>
							<el-button type="primary" @click="onSubmit('0')">确认转出</el-button>
						</el-form-item>
					</el-form>				
				</view>
			</view>
		</view>
	</view>
</template>

<script>

	export default {
		components: {
			
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
					region:''
				},
				record:{//记录
					region:'',
					textarea:''
				},
				numLength: 0,
				typeBtn:'warning',
				checked:false,
				totalNum: 0,
				pagin: {
					page: 1, //页码
					pagesize: 50 //条数
				},
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
			onSubmit(val) {
				console.log(this.checked);
				console.log('submit!');
			},
			changeRow(val){
				this.numLength = this.$util.textareaLength(val);
				this.form.domain = this.$util.textareaList(val);
			},
			// 0：转出申请，2：取消申请，9：重新发送转移码
			operateItem(){
				let that = this;
				that.$http('member.updateContactLog', 
					{
						domain:'',
						type: ''
					}).then(res => {
					if (res.code === 1) {
						that.tableData = res.data.data
						that.totalNum = res.data.total
					}
				});
			},
			handleSizeChange(val) {
				this.pagin.pagesize = val
				this.getList()
			},
			handleCurrentChange(val) {
				this.pagin.page = val
				this.getList()
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
			width: 550px;
		}
		.numSize{
			color: $text-color-main;
		}
		.d_f_c{
			position: relative;
			left: -16px;
		}
	}
</style>