<template>
	<view class="f_cc_ls">
		<view class="core f_b">
			<view class="leftBox">
					<!-- title -->
					<view class="titleBox f_bc">
						<view class="titleL">
							<view class="l1"></view>
							<view class="l2">咨询经纪人</view>
						</view>
						<view class="titleR"></view>
					</view>
					<!--  -->
					<view class="jjBox">
						<el-avatar class="ava" :size="50" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></el-avatar>
						<view class="name">夏红光</view>
						<el-rate
						  v-model="rateVal"
							class="rateBox"
						  disabled
						  text-color="#ff9900">
						</el-rate>
						<view class="btn">
							<el-button type="primary" size="small">
								<i class="iconfontAl icon-qq"></i>
								1149119844
							</el-button>
							<el-button type="success" size="small">
								<i class="iconfontAl icon-weixin"></i>
								1149119844
							</el-button>
						</view>
					</view>
			</view>
			
			<view class="rightBox">
				<view class="detBox">
					<view class="tit">
						<i class="iconfontAl icon-weixin"></i>
						百度移动权重3 三声母域名 整站打包亏本处理 着急卖
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
					<view class="sub">
						代售委托ID:73049  发布时间:2021.11.30 12:42:03
					</view>
					<view class="btnB">
						<view class="pic">￥12314</view>
						<view class="bRig">
							<el-button @click="gocountact()" class="bbtn" type="primary" size="medium"><i class="el-icon-user-solid "></i>联系经纪人</el-button>
							<view class="collect" @click="collectCh(item)">
								<i class="iconfontAl icon-iclike" :class="collect?'alicY':'alicN'">关注</i>
							</view>
						</view>
					</view>
					
					
					
				</view>
			</view>
		</view>
		
		<view class="core">
			<view class="messBox">
				<view class="tit f_cc">
					<el-image style="width: 335px; height: 37px"
					      src="../../../../static/image/nav5/t1.png">
					</el-image>
				</view>
				<view class="expBox">
					<view class="exp" v-for="(item,index) in 9" :key="index">
						<view class="expL">所属类目：</view>
						<view class="expR">搞笑段子</view>
					</view>
				</view>
			</view>
		</view>
		
		<view class="core">
			<view class="messBox">
				<view class="tit f_cc">
					<el-image style="width: 296px; height: 37px"
					      src="../../../../static/image/nav5/t2.png">
					</el-image>
				</view>
				<view class="expBox2">
					<el-carousel :interval="5000" arrow="always">
						<el-carousel-item v-for="item in 4" :key="item">
							<el-image
							      style="width: 100%; height: 100%"
							      src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
							      :fit="'contain'"></el-image>
						</el-carousel-item>
					</el-carousel>
				</view>
			</view>
		</view>
		
		<view class="core">
			<view class="messBox">
				<view class="tit f_cc">
					<el-image style="width: 253px; height: 37px"
					      src="../../../../static/image/nav5/t3.png">
					</el-image>
				</view>
				<view class="expBox3">
					<el-image style="width: 1066px; height: 258px"
					      src="../../../../static/image/nav5/t5.png">
					</el-image>
				</view>
			</view>
		</view>
		
		<view class="core">
			<view class="messBox">
				<view class="tit f_cc">
					<el-image style="width: 313px; height: 37px"
					      src="../../../../static/image/nav5/t4.png">
					</el-image>
				</view>
				<view class="mt boxB4">
					<view class="cardwt" v-for="(item,index) in 4" :key="index">
						<view class="wtBox wtBox1">
							<view class="weL">
								<el-image style="width: 22px; height: 22px"
										src="../../../../static/image/common/ic10.png">
								</el-image>
							</view>
							<view class="weR1">微信公众号账号迁移流程？</view>
						</view>
						<view class="wtBox">
							<view class="weL">
								<el-image style="width: 22px; height: 22px"
										src="../../../../static/image/common/ic10.png">
								</el-image>
							</view>
							<view class="weR2">
								1.原账号后台提交迁移申请函及公证处公证书/律师事务所见证书；2.腾讯审核公司电话联系买卖双方管理员，核实迁移信息；3.腾讯向原账号及目标账号管理员下发迁移通知；4.原账号及目标账号管理员确认迁移，迁移开始，迁移1天结束；
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
		</view>
		
		
	</view>
</template>

<script>

	export default {
		components: {
			
		},
		data() {
			return {
				rateVal:3.7,
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
	.leftBox{
		width: 283px;
		.titleBox{
			height: 50px;
			background-color: $bg-color-main;
			.titleL{
				display: flex;
				.l1{
					width: 4px;
					height: 25px;
					background: linear-gradient(317deg, #4088FF 0%, #FFFFFF 100%);
					margin: 0 12px 0 20px;
				}
				.l2{
					font-size: 18px;
					font-weight: 600;
					color: #FFFFFF;
				}
			}
			.titleR{
				font-size: 14px;
				font-weight: 400;
				color: #FFFFFF;
				margin-right: 20px;
			}
		}
		
		.jjBox{
			display: flex;
			flex-direction: column;
			align-items: center;
			background: #FFFFFF;
			.ava{
				margin: 16px 0;
			}
			.name{
				font-size: 22px;
				font-weight: 600;
				color: #323232;
			}
			.rateBox{
				margin: 10px 0 27px 0;
			}
			.btn{
				margin-bottom: 28px;
			}
		}
	}
	
	.rightBox{
		width: 887px;
		background: #FFFFFF;
	}
	.detBox{
		padding: 30px 60px;
		.tit{
			font-size: 30px;
			font-weight: 600;
			.icon-weixin{
				font-size: 30px;
				color: $text-color-main;
			}
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
		.sub{
			font-size: 14px;
			font-weight: 400;
			color: #777777;
		}
		.btnB{
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 44px;
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
	
	.messBox{
		margin-top: 20px;
		background: #FFFFFF;
		padding: 40px;
		.tit{
			margin-bottom: 45px;
		}
		.expBox{
			display: flex;
			flex-wrap: wrap;
			background: #FDFDFD;
			border: 1px solid rgba(230, 230, 230, 0.6);
			.exp{
				width: 33%;
				height: 45px;
				line-height: 45px;
				display: flex;
				.expL{
					width: 50%;
					text-align: right;
				}
				.expR{
					width: 50%;
				}
			}
		}
		.expBox2{
			height: 570px;
			.el-carousel {
				height: 100%;
			}
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