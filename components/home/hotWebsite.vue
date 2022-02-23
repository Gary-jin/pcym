<template>
	<view>
		<!--  -->
		<view class="f_cc_ls rmdbg2">
			<title-home style="margin: 50px 0 30px 0;" @change="change" :title="title" :subhead="subhead"></title-home>
			<view class="core_f rmdCardBox1">
				<view class="rmdCardBox">
					<view class="rmdCard" v-for="(item,index) in 4" :key="index">
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
	import titleHome from '@/components/home/title.vue'; 
	export default {
		components: {
			titleHome
		},
		data() {
			return {
				title:'热门网站展示',
				subhead:'一个小标题的注释一个小标题的注释一个小标题的注释'
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
			}
		}
	}
</script>
<style lang="scss" scoped>
	
	.rmdbg2{
		background-color: $bg-home-2;
		height: 1165px;
		background-image: url(../../static/image/home/bb1.png);
		background-size:100% 100%;
		background-repeat: no-repeat;
		.rmdCardBox1{
			justify-content: flex-end;
		}
		.rmdCardBox{
			width: 587px;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.rmdCard{
				width: 280px;
				height: 360px;
				background: #FFFFFF;
				border-radius: 26px;
				border: 1px solid #F0F0F0;
				overflow: hidden;
				margin-bottom: 27px;
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
	}
</style>