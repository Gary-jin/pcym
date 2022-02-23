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
		  <el-menu-item index="1">外部域名入库</el-menu-item>
			<el-menu-item index="2">入库域名</el-menu-item>
		</el-menu>
		<view v-if="tabNum=='2'">
			<view class="fenziBox">
				<text>注册商：</text>
				<el-select v-model="record.region"  size="small" placeholder="请选择">
					<el-option label="处理中" value="shanghai"></el-option>
					<el-option label="转出中" value="beijing"></el-option>
				</el-select>
				<text style="margin-left: 10px;">状态：</text>
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
		<view style="padding: 20px;" v-if="tabNum=='1'">			
			<el-alert
					title="入库流程：将域名0元PUSH到我司在注册商平台的账号->提交入库申请->等待审核->审核通过后完成入库。"
					type="warning"
					show-icon>
			</el-alert>
			<view class="d_f" >
				<view class="formBox">
					<el-form ref="form" :model="form" label-width="100px">
						<el-form-item label="入库域名" >
							<el-input
								type="textarea"
								:rows="4"
								@input="changeRow(form.name)"
								placeholder="每行一个域名,一次最多1000个"
								v-model="form.name">
							</el-input>
							<text>您已经填写 <text class="numSize">{{numLength}}</text> 个域名，还可添加 <text class="numSize">{{1000-numLength}}</text> 个</text>
						</el-form-item>
						
						<el-form-item label="注册商">
							<el-select v-model="form.region" size="small" filterable placeholder="请选择注册商">
								<el-option
									v-for="item in options"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>	
						</el-form-item>
						<el-form-item label="注册商账号">
							<view class="d_f">
								<el-select v-model="form.region" size="small" filterable placeholder="请选择注册商账号">
									<el-option
										v-for="item in options"
										:key="item.value"
										:label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
								<view class="formLx">
									添加注册商账号
								</view>								
							</view>
						</el-form-item>
						<el-form-item label="选择模板">
							<el-select v-model="form.region" size="small" filterable placeholder="请选择白名单模板">
								<el-option
									v-for="item in options"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>	
						</el-form-item>
						<view class="d_f_c">
							<el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
								<i class="iconfontAl icon-wenhao1"></i>
							</el-tooltip>
							<el-form-item label="手机号码" >
								13045676541
								<el-button style="margin-left: 30px;" :type="typeBtn" plain size="small">获取验证码</el-button>
							</el-form-item>						
						</view>
						<el-form-item label="验证码" >
							<el-input v-model="input" style="width: 280px;" placeholder="请输入内容" size="small"></el-input>
							<view>
								 <el-checkbox v-model="checked"></el-checkbox>
								勾选后，在60分钟内相同业务类型，不需要再次验证。
							</view>
						</el-form-item>	
						<el-form-item>
							<el-button type="primary" @click="onSubmit">申请入库</el-button>
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
		.el-select{
			width: 140px;
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
			.icon-wenhao1{
				position: relative;
				left: 28px;
			}
		}
	}
	
	.formLx{
		color: $text-color-main;
		margin-left: 10px;	
	}
</style>