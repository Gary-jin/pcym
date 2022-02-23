<template>
	<view class="core_f rmdCardBox">
			<view class="rmdCard" v-for="(item,index) in 8" :key="index">
				<view class="rmdCardC" @click="goDetail(item)">
					<view class="top">
						<image src="../../static/image/home/icon1.png" mode="widthFix"></image>
					</view>
					<view class="cen">6年老站，连续建站历史，超值站点</view>
					<view class="price f_bc">
						<view class="pr1">￥26854.00</view>
						<view class="pr2">电影影视</view>
					</view>
						
					<view class="ccard">
						<view class="cc">
							<view class="cc1">百度权重</view>
							<view class="cc2">BDR1</view>
						</view>
						<view class="cc">
							<view class="cc1">百度权重</view>
							<view class="cc2">BDR1</view>
						</view>
						<view class="cc">
							<view class="cc1">百度权重</view>
							<view class="cc2">BDR1</view>
						</view>
						<view class="cc">
							<view class="cc1">百度权重</view>
							<view class="cc2">BDR1</view>
						</view>
					</view>					
				</view>
				<!--  -->
				<view class="boverBox">
					<view>
						<el-button class="btn1" type="primary" round>联系经纪人</el-button>
					</view>
					<view>
						<el-button @click="collectCh(item)" class="btn2" :class="collect?'alicY':'alicN'" round>
							<i class="iconfontAl icon-iclike">关注</i>
						</el-button>
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
				collect:false
			}
		},
		onLoad(admin) {
			console.log(admin);
		},
		onShow() {
			
		},
		onHide() {
			
		},
		methods: {
			change(e){
				console.log(e);
			},
			collectCh(item){
				this.collect= !this.collect
			},
			goDetail(item){
				uni.navigateTo({
						url: `/pages/nav5/n1_mt/detail`
				});
			},
		}
	}
</script>
<style lang="scss" scoped>
		.rmdCardBox{
			flex-wrap: wrap;
			justify-content: space-between;
			margin-bottom: 40px;
			.rmdCard{
				width: 280px;
				height: 435px;
				background: #FFFFFF;
				border-radius: 26px;
				border: 1px solid #F0F0F0;
				overflow: hidden;
				margin-bottom: 27px;
				position: relative;
				.rmdCardC{
					width: 100%;
					height: 100%;
					text-align: center;
				}
				.top{
					width: 100%;
					display: flex;
					justify-content: center;
					margin-top: 49px;
					border-radius: 5px;
					overflow: hidden;
					image{
						width: 57px;
						height: 57px;
					}
				}
				.cen{
					color: $text-color1;
					font-size: 18px;
					font-weight: 600;
					padding:  20px;
				}
				.price{
					padding: 0 20px;
					.pr1{
						font-size: 22px;
						font-weight: 600;
						color: #FE2626;						
					}
					.pr2{
						font-size: 14px;
						font-weight: 400;
						color: #8E919F;
					}
				}
				
				.ccard{
					display: flex;
					justify-content: space-around;
					flex-wrap: wrap;
					.cc{
						width: 50%;
						align-items: center;
						flex-direction: column;
						padding: 26px 0;
							.cc1{
								font-size: 14px;
								font-weight: 400;
								color: #A0A8BC;
							}
							.cc2{
								font-size: 16px;
								font-weight: 400;
								color: #323232;
							}
					}
				}
			}
		}
		.rmdCard:hover{
			.boverBox{
				bottom: 0;
			}
		}
		.boverBox{
			width: 280px;
			height: 170px;
			background: #FFFFFF;
			position: absolute;
			transition-duration: .5s;
			bottom: -170px;
			.btn1{
				width: 226px;
				margin-top: 40px;
				margin-left: 20px;
			}
			.btn2{
				width: 226px;
				margin-top: 20px;
				margin-left: 20px;
			}
			.alicN{
				color: #5A5A5A;
				border: 1px solid #5A5A5A;
			}
			.alicY{
				color: #FF7223;
				border: 1px solid #FF7223;
				background-color: #FFFFFF;
			}
		}
		
</style>