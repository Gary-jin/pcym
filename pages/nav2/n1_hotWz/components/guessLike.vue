<template>
	<view class="f_cc_ls">
		<view class="core">
			
			<view class="linkBox">
				<view class="linkTit">
					<text class="tit1">猜你喜欢</text>
					<text class="tit2">●</text>
					<text class="tit3">同类网站资源推荐</text>
				</view>
				
				<view class="rmdCardBox">
					<view class="rmdCard" v-for="(item,index) in 6" :key="index">
						<view class="top">垂直行业</view>
						<view class="cen">6年老站，连续建站历史，超值站点</view>
						<view class="price">￥26854.00</view>
							
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
				
			}
		},
		onLoad() {
		},
		onShow() {
			
		},
		onHide() {
			
		},
		methods: {
			
		}
	}
</script>
<style lang="scss" scoped>
	.linkTit{
		font-size: 40px;
		font-weight: 600;
		text-align: center;
		margin-bottom: 50px;
		.tit1{
			color: $text-color-main;
		}
		.tit2{
			color: $text-color-main;
			padding: 0 10px;
		}
		.tit3{
			color: $text-color1;
		}
	}
	
	
	.rmdCardBox{
		display: flex;
		flex-wrap: wrap;
		.rmdCard:nth-child(4n){
			margin-right: 0;
		}
		.rmdCard{
			width: 280px;
			height: 360px;
			background: #FFFFFF;
			border-radius: 26px;
			border: 1px solid #F0F0F0;
			overflow: hidden;
			margin-bottom: 23px;
			margin-right: 23px;
			text-align: center;
			.top{
				width: 92px;
				height: 36px;
				line-height: 36px;
				background: #F36161;
				border-radius: 0px 100px 100px 0px;
				color: #FFFFFF;
				font-size: 14px;
				font-weight: 600;
			}
			.cen{
				color: $text-color1;
				font-size: 18px;
				font-weight: 600;
				padding:  27px;
			}
			.price{
				font-size: 22px;
				font-weight: 600;
				color: #FE2626;
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
</style>