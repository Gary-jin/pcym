<template>
	<view class="f_cc_ls">
		<view class="core">
			
			<view class="moreBox">
				<view class="titleBox f_bc">
					<view class="titleL">
						<view class="l1"></view>
						<view class="l2">批量购买</view>
					</view>
					<view class="titleR">汇率：6.41</view>
				</view>
				<template>
				  <el-table
						ref="multipleTable"
				    :data="tableData"
				    style="width: 100%"
				    max-height="250">
						<el-table-column
							type="selection"
							width="55">
						</el-table-column>
				    <el-table-column
				      prop="name"
				      label="姓名">
				    </el-table-column>
				    <el-table-column
				      prop="province"
				      label="省份">
				    </el-table-column>
				    <el-table-column
				      prop="city"
				      label="市区">
				    </el-table-column>
				    <el-table-column
				      prop="address"
				      label="地址"
				      width="300">
				    </el-table-column>
				    <el-table-column
				      prop="zip"
				      label="邮编">
				    </el-table-column>
				  </el-table>
				</template>
				<!--  -->
				<view class="pagBox">
					<view class="pagL">
						 <el-checkbox @change="toggleSelection(checked)" v-model="checked">全选</el-checkbox>
					</view>
					<view class="pagR">
						域名数量：<text class="tx">x</text>个  
						总计：￥<text class="tx tx2">0.00</text>   
						可用余额：￥<text>0.00 </text>  
						<text class="tx3">充值</text>
					</view>
				</view>	
				<el-divider></el-divider>
				<view class="detail">
					<view class="ymCen ">
						<view class="card">
							<view class="t1">
								<el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="top">
									<i class="el-icon-warning-outline"></i>
								</el-tooltip>
								手机号码：
							</view>
							<view class="t2">
								<text class="pho">123456789456</text>
								<el-button type="primary" :loading="true" plain size="mini">获取验证码</el-button>
							</view>
						</view>
						<view class="card">
							<view class="t1">验证码：</view>
							<view class="t2" style="width: 150px;">
								<el-input v-model="code" size="mini" placeholder="请输入验证码"></el-input>
							</view>
						</view> 
						<view class="card">
							<view class="t1"></view>
							<view class="t2">
								<el-checkbox @change="toggleSelection(checked)" v-model="checked"></el-checkbox>
								<text>勾选后，在60分钟内相同业务类型，不需要再次验证。</text>
							</view>
						</view>
						<view class="card">
							<view class="t1"></view>
							<view class="t2">
								<el-button type="warning" size="mini">一口价购买</el-button>
							</view>
						</view>
					</view>
				</view>
			</view>
			<!--  -->
			<view style="height: 20px;"></view>
			<view class="moreBox">
				<view class="titleBox f_bc">
					<view class="titleL">
						<view class="l1"></view>
						<view class="l2">一口价购买须知</view>
					</view>
					<view class="titleR"></view>
				</view>
				<view class="">
					<view class="">1、一口价交易买家购买后，将不能违约退款，请谨慎操作。</view>
					<view class="">2、域名交易信息为卖家自行设置，请买家自行评估域名价值，平台不对此信息有效性进行任何保证。</view>
					<view class="">3、禁止用户自拍自卖，平台有权对此种情况下的违规用户做出相应处理。</view>
				</view>
			</view>
			<view style="height: 20px;"></view>
		</view>
	</view>
</template>

<script>

	export default {
		components: {
			
		},
		data() {
			return {
				checked:false,
				code:'',
				tableData:[
					{
						date: '2016-05-03',
						name: '.com1',
						province: '上海',
						city: '普陀区',
						address: '上海市普陀区金沙江路 1518 弄',
						zip: 200333
					},
					{
						date: '2016-05-02',
						name: '.com2',
						province: '上海',
						city: '普陀区',
						address: '上海市普陀区金沙江路 1518 弄',
						zip: 200333
					},
					{
						date: '2016-05-02',
						name: '.com3',
						province: '上海',
						city: '普陀区',
						address: '上海市普陀区金沙江路 1518 弄',
						zip: 200333
					}
				],
			}
		},
		onLoad() {
		},
		onShow() {
			
		},
		onHide() {
			
		},
		methods: {
			toggleSelection(val) {
				if (val) {
					this.tableData.forEach(row => {
						this.$refs.multipleTable.toggleRowSelection(row);
					});
				} else {
					this.$refs.multipleTable.clearSelection();
				}
			},
		}
	}
</script>
<style lang="scss" scoped>
	.moreBox{
		padding: 20px;
		background-color: #FFFFFF;
		.titleBox{
			height: 50px;
			.titleL{
				display: flex;
				.l1{
					width: 4px;
					height: 25px;
					background: linear-gradient(317deg, #4088FF 0%, #FFFFFF 100%);
					margin-right: 20px;
				}
				.l2{
					font-size: 18px;
					font-weight: 600;
				}
			}
			.titleR{
				font-size: 14px;
				font-weight: 400;
				margin-right: 20px;
			}
		}
		
	}
	
	.pagBox{
		padding: 20px 14px 0 14px;
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.pagL{
			.btn{
				margin-left: 20px;
			}
		}
		.pagR{
			.tx{
				color: $color-f1;
			}
			.tx2{
				padding-right: 10px;
			}
			.tx3{
				color: $color-f1;
				margin-left: 20px;
			}
		}
	}
	
	
	.ymBox{
		font-size: 22px;
		font-weight: bold;
	}
	
	.ymCen{
		.card{
			display: flex;
			align-items: center;
			font-size: 14px;
			padding:10px 0;
			.t1{
				width: 25%;
				text-align: right;
				font-weight: bold;
			}
			.t2{
				width: 75%;
				.pho{
					margin-right: 30px;
				}
				.x1{
					margin-left: 10px;
				}
				.x3{
					margin-left: 20px;
					color: $text-color3;
				}
			}
			.t22{
				color: #FE2626;
			}
		}
	}
</style>