<template>
	<view>
		<el-menu
		  :default-active="tabNum"
		  class="el-menu-demo"
		  mode="horizontal"
		  @select="handleSelect"
		  background-color="#F1F6FF"
		  text-color="#969696"
		  active-text-color="#4088FF">
		  <el-menu-item index="1">我要提现</el-menu-item>
			<el-menu-item index="2">提现记录</el-menu-item>
			<el-menu-item index="3">设置提现账户</el-menu-item>
		</el-menu>
		
		<view class="IdCardBoxDetail">
			<block v-if="tabNum=='1'">
				<view class="explain">
					<view class="titleEx">提现说明</view>
					<view class="expItem ">
						<i class="iconfontAl icon-dian"></i>
						<view class="item">
							1. 提现处理时间：财务会在您申请提现的隔天统一处理[节假日延迟到下个工作日]。
						</view>
					</view>
					<view class="expItem ">
						<i class="iconfontAl icon-dian"></i>
						<view class="item">
							2. 提现到账时间：银行会在财务处理后48小时内到账，请耐心等待
						</view>
					</view>
				</view>
				
				<!--  -->
				<view class="formBox">
					<view class="rowbox">
						<view class="title f_cc">提现类型：</view>
						<view class="subBox">
							<el-select  size="small" v-model="form.type" placeholder="请选择">
								<el-option
									v-for="item in options"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
						</view>
					</view>
					<view class="rowbox">
						<view class="title f_cc">可提现金额：</view>
						<view class="subBox ">
							<view class="subBox1">
								<el-input v-model="form.money" size="small" placeholder=""请输入金额></el-input>
								<el-button type="primary" @click="apply(form.money)" size="small">提现</el-button>
								<!-- <text class="tex1">0.00元（免手续费）</text>
								<text class="tex2">0.00元（手续费1%）</text> -->
							</view>
							<view class="subBox2">
								[提现手续费1%，最低2元] 
								<!-- [单笔提现限额：最低10元，最高20万元，单日限额最高100万元] -->
							</view>
						</view>
					</view>
					<view class="rowbox" v-if="!senReal">
						<view class="title f_cc"></view>
						<view class="subBox ">
							请先设置提现账户
						</view>
					</view>
					<!-- <view class="rowbox">
						<view class="title f_cc">手续费：</view>
						<view class="subBox ">
							0元
						</view>
					</view>
					<view class="rowbox">
						<view class="title f_cc">到账金额：</view>
						<view class="subBox ">
							0元 <text style="padding-left: 80px;color: color: #777777;">已给您计算出扣除手续费后的到账金额。</text>
						</view>
					</view> -->
				</view>
			</block>
			
			<!--  -->
			<view class="tabBox" v-if="tabNum=='2'">
				<template>
				  <el-table ref="multipleTable" :data="tableData" stripe >
						<el-table-column prop="real_name" label="申请人" ></el-table-column>
						<el-table-column prop="date4" label="时间" >
							<template slot-scope="scope">
								
								{{$util.dateFormat('YYYY-mm-dd HH:MM', scope.row.updatetime)}}
							</template>
						</el-table-column>
						<el-table-column label="状态" >
							<template slot-scope="scope">
								<text v-if="scope.row.status == 0">申请中</text>	
								<text v-if="scope.row.status == 1">已打款,</text>	
								<text v-if="scope.row.status == -1">已拒绝</text>	
							</template>
						</el-table-column>
						<el-table-column prop="money" label="提现金额" ></el-table-column>
				  </el-table>
				</template>
				<view>
					<view class="pagBox">
						<view class="pagL"></view>
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
			</view>
			
			<!--  -->
			<view class="account" v-if="tabNum=='3'">
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				  <el-form-item label="真实姓名" prop="real_name">
				    <el-input v-model="ruleForm.real_name" size="small"></el-input>
				  </el-form-item>
					<el-form-item label="银行全称" prop="bank_name">
					  <el-input v-model="ruleForm.bank_name" size="small"></el-input>
					</el-form-item>
					<el-form-item label="卡号" prop="card_no">
					  <el-input v-model="ruleForm.card_no" size="small"></el-input>
					</el-form-item>
					<el-form-item label="开户行地址" prop="address">
					  <el-input v-model="ruleForm.address" size="small"></el-input>
					</el-form-item>
					 <el-form-item >
					    <el-button type="primary" @click="estAccount">{{senReal?'修改':'确定'}}</el-button>
					  </el-form-item>
				</el-form>
				
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
				tableData: [],
				checked: false,
				options: [
					// {
					// value: '1',
					// label: '微信'
				// },  {
				// 	value: '2',
				// 	label: '支付宝'
				// },
					{
						value: '3',
						label: '银行卡'
					}
				],
				form:{
					type:'3',
					money:''
				},
				ruleForm:{
					real_name:'',
					bank_name:'',
					card_no:'',
					address:''
				},
				rules:{
					real_name: [
						{ required: true, message: '请填写真实姓名', trigger: 'blur' }
					],
					bank_name: [
						{ required: true, message: '请填写银行全称', trigger: 'blur' }
					],
					card_no: [
						{ required: true, message: '请填写卡号', trigger: 'blur' }
					],
					address: [
						{ required: true, message: '请填写开户行地址', trigger: 'blur' }
					]
				},
				senReal:false,
				totalNum: 0,
				pagin: {
					page: 1, //页码
					pagesize: 50 //条数
				},
			}
		},
		mounted() {
			this.sense()
			this.applyList()
		},
		methods: {
			handleSelect(e){
				this.tabNum = e
			},
			estAccount(){
				 this.$refs['ruleForm'].validate((valid) => {
					  if (valid) {
								this.$http('apply.editBandCard',{
									...this.ruleForm
								}).then(res => {
									this.$util.showErrorMsg(res.msg);
								})
						}
				 })
			},
			sense(){
				this.$http('apply.bandCard').then(res => {
					if(res.code ==1){
						this.senReal = true;
						this.ruleForm.real_name = res.data.real_name
						this.ruleForm.bank_name = res.data.bank_name
						this.ruleForm.card_no = res.data.card_no
						this.ruleForm.address = res.data.address
					}
				})
			},
			//申请提现
			apply(money){
				if(!this.senReal){
					this.$util.showErrorMsg('请先设置提现账户');
					return
				}
				this.$http('apply.apply',{
					money
				}).then(res => {
					this.$util.showErrorMsg(res.msg);
					this.applyList()
				})
			},
			applyList(){
				let that = this;
				that.$http('apply.index',{...that.pagin}).then(res => {
					if(res.code ==1){
						that.tableData = res.data.data
						that.totalNum = res.data.total
					}
				})
			},
			handleSizeChange(val) {
				this.pagin.pagesize = val
				this.applyList()
			},
			handleCurrentChange(val) {
				this.pagin.page = val
				this.applyList()
			}
		}
	}
</script>
<style lang="scss" scoped>
	
	
	.IdCardBoxDetail{
		padding: 20px 40px 100px 40px;
		background-color: #FFFFFF;
		.explain{
			padding: 20px 30px;
			background: #FFFAF5;
			border-radius: 2px;
			border-left: 3px #FF6000 solid;
			.titleEx{
				font-size: 14px;
				font-weight: 600;
				color: #323232;
				margin-bottom: 15px;
			}
			.expItem{
				display: flex;
				.icon-dian{
					color: #FF6000;
					margin-top: 6px;
				}
				.item{
					padding: 5px 0;
				}
			}
		}
		
		.formBox{
			margin-top: 50px;
			border: 1px #f2f2f2 solid;
			font-size: 14px;
			font-weight: 400;
			color: #777777;
			.rowbox:last-child{
				border: none;
			}
			.rowbox{
				display: flex;
				border-bottom: 1px #CED2DA dashed;
				.title{
					width: 112px;
					background: #F5F7FA;
				}
				.subBox{
					padding: 20px 0;
					margin-left: 20px;
				}
				.subBoxXm{
					text{
						padding-right: 10px;
					}
					.tx{
						padding-left: 10px;
					}
					.el-input{
						width: 90px;
					}
				}
				.subZpBox{
					display: flex;
					.idBox{
						margin-right: 20px;
						width: 237px;
						height: 198px;
					}
				}
				.subZtex{
					margin-top: 40px;
					color: #FE2626;
				}
				
			}
		}
	}
	
	
	.anquanBox{
		padding: 30px;
		background-color: #FDFDFD;
		.anquanTit{
			padding: 15px;
			border-bottom: 1px #E6E6E6 dashed;
			.aqTx{
				font-size: 14px;
				font-weight: 400;
				color: #777777;
			}
		}
		.anquanTit1{
			padding: 15px;
			font-size: 14px;
			font-weight: 400;
			.aqTx1{
				color: #FE2626;
			}
			.aqTx11{
				color: #58C46E;
			}
			.aqTx2{
				color: $text-color-main;
			}
		}
	}
	.anquanTitM{
		.aqTx{
			width: 25%;
		}
		.aqTxc{
			text-align: center;
		}
		.aqTxr{
			text-align: right;
		}
	}
	
	.subBox1{
		display: flex;
		align-items: center;
		.el-input{
			width: 130px;
		}
		.el-button{
			margin: 0 10px;
		}
		text{
			padding: 0 20px;
		}
		.tex1{
			color: #58C46E;
		}
		.tex2{
			color: #FE2626;
		}
	}
	.subBox2{
		margin-top: 10px;
	}
	
	.tabBox{
		margin-top: 20px;
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
		
	.account{
		background: #FFFFFF;
		.el-input{
			width: 180px;
		}
	}
</style>