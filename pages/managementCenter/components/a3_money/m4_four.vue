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
						<view class="title f_cc">认证类型：</view>
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
					<!-- 营业执照 -->
					<block v-if="form.type == '2'">
						<view class="rowbox">
							<view class="title f_cc">收款方式:</view>
							<view class="subBox ">
								<el-input v-model="form.input1" size="small" placeholder="请填写公司名称" ></el-input>
							</view>
						</view>
						<view class="rowbox">
							<view class="title f_cc">收款人:</view>
							<view class="subBox ">
								林宝军
							</view>
						</view>
						<!-- <view class="rowbox">
							<view class="title f_cc">银行名称:</view>
							<view class="subBox ">
								<el-input v-model="form.input1" size="small" placeholder="请填写银行名称" ></el-input>
							</view>
						</view> -->
					</block>
					<!--  -->
					<view class="rowbox">
						<view class="title f_cc">可提现金额：</view>
						<view class="subBox ">
							<view class="subBox1">
								<el-input v-model="form.input1" size="small" placeholder=""请输入金额></el-input>
								<el-button type="primary" size="small">主要按钮</el-button>
								<text class="tex1">0.00元（免手续费）</text>
								<text class="tex2">0.00元（手续费1%）</text>
							</view>
							<view class="subBox2">
								[手续费最低1元] [单笔提现限额：最低10元，最高20万元，单日限额最高100万元]
							</view>
						</view>
					</view>
					<view class="rowbox">
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
					</view>
				</view>
			</block>
			
			<!--  -->
			<view class="tabBox" v-if="tabNum=='2'">
				<template>
				  <el-table ref="multipleTable" :data="tableData" stripe >
						<el-table-column type="selection" width="55"></el-table-column>
						<el-table-column prop="date1" label="状态" width="100"></el-table-column>
						<el-table-column prop="date2" label="类型" width="100"></el-table-column>
				    <el-table-column label="标题" >
							<template slot-scope="scope">
								<el-button type="text" size="small"
									@click.native.prevent="goDetail(scope.$index, tableData[scope.$index])">
									{{ scope.row.date3 }}
								</el-button>
							</template>
						</el-table-column>
						<el-table-column prop="date4" label="时间" width="150" fixed="right"></el-table-column>
				  </el-table>
				</template>
				<view>
					<view class="pagBox">
						<view class="pagL"></view>
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
				tableData: [{
					date1: '未读',
					date2: '系统消息',
					date3: '您的账号存在登录异常情况，请确认',
					date4: '2016-05-02'
				},{
					date1: '未读',
					date2: '系统消息',
					date3: '您的账号存在登录异常情况，请确认',
					date4: '2016-05-02'
				},{
					date1: '未读',
					date2: '系统消息',
					date3: '您的账号存在登录异常情况，请确认',
					date4: '2016-05-02'
				}],
				checked: false,
				options: [{
					value: '1',
					label: '微信'
				},  {
					value: '2',
					label: '支付宝'
				}],
				form:{
					type:'1',
					input1:'',
					input2:'',
					idz:'',
					idf:''
				}
				
			}
		},
		methods: {
			handleSelect(e){
				console.log(e);
				this.tabNum = e
			},
			cheImg(val){
				let that = this;
				uni.chooseImage({
				    count: 1, 
				    success: function (res) {
				        console.log(JSON.stringify(res.tempFilePaths));
								if(val==1){
									that.form.idz = res.tempFilePaths[0]
								} else {
									that.form.idf = res.tempFilePaths[0]
								}
				    }
				});
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
</style>