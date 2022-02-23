<template>
	<view class="f_cc_ls">
		<view class="core">
			
			<view class="card card1">
				<el-image style="width: 380px; height: 380px"
						src="https://cloud0.a5.net/y/a5.zc/1924840/sellgoods/0/cc0ko620_400x300.jpg">
				</el-image>
				<view class="detBox">
					<view class="tit">
						百度移动权重3 三声母域名 整站打包亏本处理 着急卖
					</view>
					<view class="tit2">
						<el-image style="width: 20px; height: 16px"
								src="../../../../static/image/common/ic1.png">
						</el-image>
						<text>国家知识产权局商标局备案机构,请放心交易</text>
					</view>
					<view class="tit3">
						<view class="tit2">
							<el-image style="width: 14px; height: 14px"
									src="../../../../static/image/common/ic2.png">
							</el-image>
							<text>签署合同</text>
						</view>
						<view class="tit2">
							<el-image style="width: 14px; height: 14px"
									src="../../../../static/image/common/ic3.png">
							</el-image>
							<text>交易</text>
						</view>
						<view class="tit2">
							<el-image style="width: 16px; height: 15px"
									src="../../../../static/image/common/ic4.png">
							</el-image>
							<text>即买即用</text>
						</view>
						<view class="tit2">
							<el-image style="width: 17px; height: 14px"
									src="../../../../static/image/common/ic5.png">
							</el-image>
							<text>支持线下</text>
						</view>
						<view class="tit2">
							<el-image style="width: 16px; height: 16px"
									src="../../../../static/image/common/ic6.png">
							</el-image>
							<text>确认后放款</text>
						</view>
					</view>
					<view class="tit33">
						<view class="tit4">
							<text class="g1">商品编号:</text>
							<text class="g2">78945632132</text>
						</view>
						<view class="tit4">
							<text class="g1">商品编号:</text>
							<text class="g2">78945632132</text>
						</view>
						<view class="tit4">
							<text class="g1">商品编号:</text>
							<text class="g2">78945632132</text>
						</view>
					</view>
					<view class="tit33" style="margin-top: 20px;">
						<view class="tit4">
							<text class="g1">商品/服务:</text>
							<text class="g2">牛奶; 肉松; 鱼肉干; 水果罐头; 蛋; 烤海苔; 加工过的水果; 果冻; 以果蔬为主的零食小吃; </text>
						</view>
					</view>
					<view class="tit5">
						温馨提示:以上信息仅供参考,详情请咨询本站经纪人
					</view>
					<view class="btnB">
						<view class="pic">￥12314</view>
						<view class="bRig">
							<el-button @click="gocountact()" class="bbtn" type="primary" size="medium"><i class="el-icon-user-solid "></i>联系经纪人</el-button>
							<view class="collect" @click="collectCh(item)">
								<i class="iconfontAl icon-iclike" :class="collect?'alicY':'alicN'">关注</i>
								<!-- <text>关注</text> -->
							</view>
						</view>
					</view>
				</view>
			</view>
			
			<view style="height: 20px;"></view>
			<view class="card card2">
				<de-tit :tit1="'商标'" :tit2="'详情'"></de-tit>
				<view class="mt boxB">
					<view class="table" v-for="(item,index) in 8" :key="index">
						<view class="tableL">附带转让域名：</view>
						<view class="tableR">中国福建泉州</view>
					</view>
				</view>
			</view>
			
			<view style="height: 20px;"></view>
			<view class="card card2">
				<de-tit :tit1="'卖家'" :tit2="'描述'"></de-tit>
				<view class="mt boxB2">
					xxxxxxxxxxxxx
				</view>
			</view>
			
			<view style="height: 20px;"></view>
			<view class="card card2">
				<de-tit :tit1="'交易'" :tit2="'流程'"></de-tit>
				<view class="mt boxB3">
					<el-image style="width: 1000px; height: 130px"
							src="../../../../static/image/common/ic9.png">
					</el-image>
				</view>
			</view>
			
			<view style="height: 20px;"></view>
			<view class="card card2">
				<de-tit :tit1="'常见'" :tit2="'问题'"></de-tit>
				<view class="mt boxB4">
					<view class="cardwt" v-for="(item,index) in 4" :key="index">
						<view class="wtBox wtBox1">
							<view class="weL">
								<el-image style="width: 22px; height: 22px"
										src="../../../../static/image/common/ic10.png">
								</el-image>
							</view>
							<view class="weR1">商标转让申请所需哪些文件？</view>
						</view>
						<view class="wtBox">
							<view class="weL">
								<el-image style="width: 22px; height: 22px"
										src="../../../../static/image/common/ic10.png">
								</el-image>
							</view>
							<view class="weR2">
								1、商标转让人和受让人的分别签字或盖章的代理委托书；商标转让方和受让方签字或盖章的商标转让证明。
								1、商标转让人和受让人的分别签字或盖章的代理委托书；商标转让方和受让方签字或盖章的商标转让证明。
								1、商标转让人和受让人的分别签字或盖章的代理委托书；商标转让方和受让方签字或盖章的商标转让证明。
								1、商标转让人和受让人的分别签字或盖章的代理委托书；商标转让方和受让方签字或盖章的商标转让证明。
								1、商标转让人和受让人的分别签字或盖章的代理委托书；商标转让方和受让方签字或盖章的商标转让证明。
								1、商标转让人和受让人的分别签字或盖章的代理委托书；商标转让方和受让方签字或盖章的商标转让证明。
								1、商标转让人和受让人的分别签字或盖章的代理委托书；商标转让方和受让方签字或盖章的商标转让证明。
								1、商标转让人和受让人的分别签字或盖章的代理委托书；商标转让方和受让方签字或盖章的商标转让证明。
							</view>
						</view>
						<view class="wtBox" style="margin-top: 30px;">
							<view class="weL" style="width: 22px;"></view>
							<view class="weR">
								 <el-button type="primary">查看更多<i class="el-icon-arrow-right el-icon--right"></i></el-button>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view style="height: 20px;"></view>
		</view>
	</view>
</template>

<script>
	import deTit from './deTit.vue'
	export default {
		components: {
			deTit
		},
		data() {
			return {
				collect:false
			}
		},
		onLoad() {
		},
		onShow() {
			
		},
		onHide() {
			
		},
		methods: {
			//收藏
			collectCh(item){
				this.collect = !this.collect
			},
			gocountact(){
				uni.navigateTo({
				    url: `/pages/nav4/n1_brand/contact`
				});
			}
		}
	}
</script>
<style lang="scss" scoped>
	.card{
		background-color: #FFFFFF;
		padding: 40px;
	}
	.card1{
		display: flex;
		justify-content: space-between;
		.detBox{
			width: 710px;
			.tit{
				font-size: 30px;
				font-weight: 600;
			}
			.tit2{
				display: flex;
				align-items: center;
				margin: 14px 0 38px 0;
				text{
					font-size: 14px;
					font-weight: 400;
					color: #FF7223;
					margin-left: 7px;
				}
			}
			.tit3{
				display: flex;
				align-items: center;
				.tit2{
					display: flex;
					align-items: center;
					margin-right: 48px;
					text{
						font-size: 14px;
						font-weight: 400;
						color: #777777;
						margin-left: 7px;
					}
				}
			}
			.tit33{
				display: flex;
				justify-content: space-between;
				align-items: center;
				.tit4{
					font-size: 16px;
					font-weight: 400;
					.g1{
						color: #777777;
					}
				}
			}
			.tit5{
				font-size: 14px;
				font-weight: 400;
				color: #777777;
				margin-top: 7px;
				margin-left: 75px;
			}
			.btnB{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 55px;
				.pic{
					font-size: 40px;
					font-weight: 900;
					color: #FE2626;
				}
				.bRig{
					display: flex;
					align-items: center;
					.bbtn{
						width: 143px;
						background: linear-gradient(157deg, #FF7661 0%, #FC5461 100%);
						border: none;
					}
					.collect{
						padding: 0 30px;
						.elI{
							font-size: 20px;
							color: #FE2626;
						}
						text{
							font-size: 16px;
							font-weight: 600;
							color: #4088FF;
							margin-left: 5px;
						}
					}
				}
			}
		}
	}
	
	.card2{
		padding: 40px;
		.mt{
			margin-top: 20px;
		}
		.boxB{
			background-color: $color-f2;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			.table{
				width: 50%;
				height: 64px;
				display: flex;
				align-items: center;
				font-size: 14px;
				font-weight: 400;
				.tableL{
					color: #777777;
					width: 20%;
					text-align: right;
				}
				.tableR{
					width: 80%;
				}
			}
		}
		
		.boxB2{
			
		}
		.boxB3{
			display: flex;
			justify-content: center;
		}
		.boxB4{
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			.cardwt{
				width: 480px;
				height: 334px;
				border-radius: 3px;
				border: 1px solid rgba(230, 230, 230, 0.6);
				margin-bottom: 35px;
				padding: 30px;
				.wtBox1{
					align-items: center;
					margin-bottom: 30px;
				}
				.wtBox{
					display: flex;
					.weL{
						margin-right: 13px;
					}
					.weR1{
						font-size: 14px;
						font-weight: 600;
						color: #323232;
					}
					.weR2{
						font-size: 14px;
						font-weight: 400;
						color: #444449;
						height: 200px;
						overflow-y: auto;
					}
				}
			}
		}
	}

	
</style>