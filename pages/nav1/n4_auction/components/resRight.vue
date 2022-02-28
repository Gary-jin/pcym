<template>
	<view class="rightBox">
		
		<view class="rightCore">
			<view class="jjBox1 f_bc">
				<view class="jLeft">
					<text class="tit1">{{goodsDetail.domain}}</text>
					<!-- <text class="tit2">数据通</text> -->
				</view>
				<view class="jRight">
					<text class="tit">关注</text>
					<text class="tit"> WHOIS</text>
					<text class="tit"> 百度</text>
					<text class="tit"> 分享</text>
				</view>
			</view>
			<!-- <view class="jjBox2">原信息: 江苏瑞曼信息技术有限公司 2011-09-30</view> -->
			<view class="jjBox2"></view>
			<view class="cBox">
				<view class="cText">
					<view class="txt1">当前价格</view>
					<view class="txt2 txt22">￥{{goodsDetail.price}}</view>
				</view>
				<view class="cText">
					<view class="txt1">剩余时间</view>
					<view class="txt2">
						<count-down :timestamp="goodsDetail.delete_time" :separator="'zh'"></count-down>
					</view>
				</view>
				<view class="cText">
					<view class="txt1">当前领先</view>
					<view class="txt2">-</view>
				</view>
				<view class="cText">
					<view class="txt1">出价次数</view>
					<view class="txt2">￥{{goodsDetail.next_bid}}</view>
				</view>
			</view>
			<!--  -->
			<view class="cBox2">
				<view class="rowBox">
					<view class="rLeft">类型：</view>
					<view class="rRight">{{goodsDetail.type}}</view>
				</view>
				<view class="rowBox">
					<view class="rLeft">交易类型：</view>
					<view class="rRight">竞价</view>
				</view>
				<view class="rowBox">
					<view class="rLeft">结束时间：</view>
					<view class="rRight">{{goodsDetail.delete_date}}</view>
				</view>
				<view class="rowBox">
					<view class="rLeft">加价幅度：</view>
					<view class="rRight rRightc">￥{{goodsDetail.next_bid - goodsDetail.price}}</view>
				</view>
				<!-- <view class="rowBox">
					<view class="rLeft">成交价：</view>
					<view class="rRight rRightc">￥246.00 <text class="rRt">（含续费价: ￥솤棾.赈赈）</text></view>
				</view> -->
				<view class="rowBox">
					<view class="rLeft">可用余额：</view>
					<view class="rRight" style="display: flex;">
						<text class="rRightc">￥{{userInfo.money}}</text>
						<text class="main">
							<navigator class="nav-item" :url="`/pages/managementCenter/index?tab=3-1`">充值</navigator>
						</text>
					</view>
				</view>
				<view class="rowBox">
					<view class="rLeft">本次出价（￥）：</view>
					<view class="rRight rRightc">
						<el-input v-model="goodsDetail.next_bid" style="width: 70px;"></el-input>
						<text class="rRtt">（将冻结￥100作为保证金）</text>
						<el-button type="primary">闯入竞价</el-button>
						<el-button type="primary" plain>刷   新</el-button>
					</view>
				</view>
			</view>
		</view>
		
		<view class="jList">
			<template>
			  <el-table
					ref="multipleTable"
			    :data="tableData"
			    style="width: 100%"
			    max-height="250">
					<el-table-column prop="date2" label="竞价者"></el-table-column>
					<el-table-column prop="date3" label="出价"></el-table-column>
					<el-table-column prop="date4" label="出价时间"></el-table-column>
					<el-table-column prop="date5" label="状态"></el-table-column>
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
		
	</view>
</template>

<script>
	import countDown from '@/components/countDown/countDown.vue'; 
	import {mapMutations,mapActions,mapState} from 'vuex';
	export default {
		components: {
			countDown
		},
		props: {
			goodsId: {
				type: String,
				default: ''
			},
		},
		computed: {
			...mapState({
				userInfo: ({ user })  => user.userInfo,
			})
		},
		data() {
			return {
				goodsDetail:{},
				tableData:[
					{
						date2: '张三',
						date3: '￥45',
						date4: '2020.1.1',
						date5: '',
					}
				],
			}
		},
		mounted() {
			this.getDetail()
		},
		methods: {
			getDetail(){
				let that = this;
				that.$http('ym.bidDetail', {
					id: that.goodsId
				}).then(res => {
					if (res.code === 1) {
						that.goodsDetail = res.data 
					}
				});
			},

		}
	}
</script>
<style lang="scss" scoped>
	.rightBox{
		width: 887px;
		.rightCore{
			padding: 40px;
			background-color: #FFFFFF;
		}
	}
	.jjBox1{
		.jLeft{
			.tit1{
				font-size: 30px;
				font-weight: 600;
				color: #323232;
			}
			.tit2{
				font-size: 20px;
				font-weight: 600;
				color: #FF7223;
				margin-left: 10px;
			}
		}
		.jRight{
			color: $text-color-main;
			.tit{
				padding: 0 10px;
				border-right: 1px $text-color-main solid;
			}
			.tit:last-child{
				border: none;
			}
		}
	}
	.jjBox2{
		padding-top: 10px;
		padding-bottom: 25px;
		font-size: 14px;
		font-weight: 400;
		color: #777777;
	}
	
	.cBox{
		display: flex;
		background: #F8F9FB;
		padding: 35px 0;
		.cText:last-child{
			border: none;
		}
		.cText{
			width: 25%;
			border-right: 1px #E6E6E6 solid;
			text-align: center;
			.txt1{
				font-size: 14px;
				font-weight: 400;
				color: #777777;
			}
			.txt2{
				font-size: 16px;
				font-weight: 600;
				margin-top: 15px;
			}
			.txt22{
				color: #FE2626;
			}
		}
	}
	
	.cBox2{
		margin-top: 30px;
		background: #F8F9FB;
		border: 1px #E6E6E6 solid;
		.rowBox:last-child{
			border: none;
		}
		.rowBox{
			height: 65px;
			display: flex;
			font-size: 14px;
			font-weight: 400;
			border-bottom: 1px #E6E6E6 solid;
			.rLeft{
				width: 190px;
				text-align: right;
				color: #777777;
				line-height: 65px;
			}
			.rRight{
				line-height: 65px;
			}
			.rRightc{
				color: #FE2626;
			}
			.main{
				color: $text-color-main;
				padding: 0 20px;
				width: 50px;
			}
			.rRt{
				text-align: right;
				color: #777777;
				margin-left: 30px;
			}
			.rRtt{
				color: #FE2626;
				padding: 0 15px;
			}
		}
	}
	
	.jList{
		margin-top: 20px;
		margin-bottom: 20px;
		padding: 40px 40px 20px 40px;
		background-color: #FFFFFF;
	}
	.pagBox{
		padding: 20px 14px;
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>