<template>
	<view>
		<view class="f_cc_l footer_bg">
			<view class="core_f" style="margin-top: 63px;">
				<!-- link -->
				<view class="links_box">
					<view class="link_l" v-for="(item,index) in links" :key="index">
						<view class="l_title">{{item.title}}</view>
						<view class="l_list" v-for="(it,idx) in item.list" :key="idx">
							<a :href="it.linkUrl" target="_blank">{{it.name}}</a>
						</view>
					</view>
				</view>
				<!--  -->
				<view class="consult_box ">
					<view>
						<view class="btn">
							<image src="../../static/image/common/ficon1.png" mode="widthFix"></image>
							<text>App Store</text>
						</view>
						<view class="btn btn2">
							<image src="../../static/image/common/ficon2.png" mode="widthFix"></image>
							<text>安卓机</text>
						</view>
					</view>
					<!-- wx -->
					<view class="wx_box">
						<view class="wx_img_box">
							<!-- <image src="../../static/image/common/logo.png" mode="widthFix"></image> -->
						</view>
						<view class="wx_tit">微信公众号</view>
					</view>
					<!-- qq -->
					<view class="qq_box">
						<view class="qq_top">
							<view class="qq_us">
								<!-- <image src="" mode=""></image> -->
							</view>
							<view class="qq_p_box">
								<view class="qq_p">
									<image src="../../static/image/common/ficon3.png" mode=""></image>
									<text>在线咨询</text>
								</view>
								<view class="qq_t">时间：09:00-24:00</view>
							</view>
						</view>
						<view class="qq_bot">
							<view>电话：4000-0000000</view>
							<view>电话：4000-0000000</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 友情链接 -->
			<view class="core_f friend_lisks">
				<view class="llss">
					<text class="tit">友情链接：</text>
					<a :href="item.linkUrl" target="_blank" v-for="(item,index) in friendLisks" :key="index">{{item.name}}</a>					
				</view>
			</view>
			<!--  -->
			<view class="core_f bm">
				<view style="text-align: center;">
					厦门巨虎网络科技有限公司旗下网站：20.com 法律顾问：福建瀛坤律师事务所 
				</view>
				<view style="text-align: center;margin-top: 15px;">
					闽ICP备16020253号－6 闽公网安备 35020302032683号 增值电信业务经营许可证：闽B2-20170219
				</view>
				<view class="fimg_box">
					<image class="fimg" src="../../static/image/common/ficon4.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import footerConfig from '@/common/config/common/footer.config.js';
	export default {
		data() {
			return {
				...footerConfig
			}
		},
		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	.footer_bg {
		background-color: $bg-footer;
		a{
			color: #878C9E;
		}
		a:hover {
			color: #4088FF;
		}
		a:active {
			color: #4088FF;
		}
		.links_box{
			width: 530px;
			display: flex;
			.link_l{
				width: 33%;
				.l_title{
					color: #FFFFFF;
					font-size: 14px;
					font-weight: 600;
				}
				.l_list{
					font-size: 14px;
					font-weight: 400;
					margin-top: 9px;
				}
			}
		}
		
		.consult_box{
			width: 670px;
			display: flex;
			justify-content: space-between;
			.btn{
				width: 189px;
				height: 54px;
				background: #FFFFFF;
				border-radius: 9px;
				display: flex;
				align-items: center;
				image{
					width: 24px;
					height: 26px;
					margin-left: 32px;
					margin-right: 16px;
				}
			}
			.btn2{
				margin-top: 11px;
			}
			
			.wx_box{
				.wx_img_box{
					width: 113px;
					height: 113px;
					background: #FFFFFF;
					image{
						width: 100%;
					}
				}
				.wx_tit{
					width: 100%;
					margin-top: 17px;
					text-align: center;
					font-size: 14px;
					font-weight: 400;
					color: #FFFFFF;
				}
			}
			
			.qq_box{
				width: 276px;
				.qq_top{
					width: 100%;
					height: 84px;
					background: #FFFFFF;
					display: flex;
					.qq_us{
						width: 84px;
						height: 84px;
						background: red;
					}
					.qq_p_box{
						.qq_p{
							padding: 16px 0 7px 20px;
							display: flex;	
							image{
								width: 19px;
								height: 23px;
								margin-right: 5px;
							}
							font-size: 20px;
							font-weight: 400;
							color: #4D4D4D;
						}
						.qq_t{
							padding-left: 20px;
						}
					}
				}
				.qq_bot{
					margin-top: 20px;
					font-size: 14px;
					font-weight: 400;
					color: #FFFFFF;
				}
			}
		}
		
		// 友情链接
		.friend_lisks{
			margin-top: 40px;
			background: $bg-footer-f1;
			height: 66px;
			display: flex;
			font-size: 14px;
			font-weight: 400;
			color: #A6ADC3;
			.llss{
				margin: 23px 0 0 23px;
			}
			a{
				padding: 0 15px;
				position: relative;
			}
			a::after{
				content: "";
				width: 1px;
				height: 66%;
				background-color: #373F5E;
				position: absolute;
				top: 17%;
				right: 0;
			}
		}
		
		.bm{
			flex-direction: column;
			margin: 16px 0 74px 0;
			font-size: 14px;
			font-weight: 400;
			color: #A6ADC3;
			.fimg_box{
				margin: 0 auto;
				.fimg{
					width: 304px;
					height: 50px;
					margin-top: 44px;
				}
			}
		}
	}
		
</style>
