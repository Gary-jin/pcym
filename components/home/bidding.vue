<template>
	<view>
		<!--  -->
		<view class="f_cc_ls rmdbg2">
			<title-home style="margin: 50px 0 30px 0;" @change="change" :title="title" :subhead="subhead"></title-home>
			<view class="core_f rmdCardBox">
				<view class="rmdCard" v-for="(item,index) in 8" :key="index">
					<view class="top">.cn</view>
					<view class="wurl">fastgold.com</view>
					<view class="cenBox">
						<view class="cen1">
							<view class="tx1">26854.00</view>
							<view class="tx2">当前价格</view>
						</view>
						<view class="cen1">
							<view class="tx3">1天12时32分</view>
							<view class="tx2">剩余时间</view>
						</view>
					</view>
					<view class="jBtn">
						<text>竞价</text>
						<image class="gg1" src="../../static/image/home/icon3.png" mode="widthFix"></image>
						<image class="gg2" src="../../static/image/home/icon2.png" mode="widthFix"></image>
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
				title:'热门竞价域名展示',
				subhead:'一个小标题的注释一个小标题的注释一个小标题的注释',
				datalist:[]
			}
		},
		onLoad(admin) {
			
		},
		onShow() {
			
		},
		mounted() {
			// this.getList()
		},
		methods: {
			getList() {
				let that = this;
				that.$http('ym.bidhot', {}, '').then(res => {
					if (res.code === 1) {
						that.datalist = res.data
					}
				});
			},
			change(e){
				console.log('xx');
			}
		}
	}
</script>
<style lang="scss" scoped>
	
	.rmdbg2{
		background-color: $bg-home-1;
		.rmdCardBox{
			flex-wrap: wrap;
			justify-content: space-between;
			margin-bottom: 80px;
			.rmdCard{
				width: 226px;
				height: 291px;
				background: #FFFFFF;
				box-shadow: 0px 0px 21px 0px rgba(238, 239, 242, 0.85);
				border-radius: 26px;
				overflow: hidden;
				margin-bottom: 27px;
				padding: 37px 27px;
				.top{
					width: 77px;
					height: 37px;
					line-height: 37px;
					border-radius: 19px;
					text-align: center;
					font-size: 16px;
					font-weight: 600;
				}
				.wurl{
					color: $text-color1;
					font-size: 24px;
					font-weight: 600;
					padding: 30px 0;
				}
				.cenBox{
					display: flex;
					.cen1{
						width: 50%;
						height: 55px;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						.tx1{
							font-size: 22px;
							font-weight: bold;
							color: #FE2626;
						}
						.tx3{
							font-size: 16px;
							font-weight: 400;
							color: #39393A;
						}
						.tx2{
							font-size: 16px;
							font-weight: 400;
							color: #888888;
						}
					}
				}
				.jBtn{
					margin-top: 60px;
					height: 43px;
					border-radius: 28px;
					border: 1px solid #D2D2D2;
					display: flex;
					justify-content: space-around;
					align-items: center;
					image{
						width: 19px;
					}
					.gg1{
						display: block;
					}
					.gg2{
						display: none;
					}
				}
			}
			.rmdCard:hover {
				transition: all .5s;
				transform: scale(1.04);
				.jBtn{
					background-color: #2587FF;
					border: #2587FF;
					color: #FFFFFF;
					.gg1{
						display: none;
					}
					.gg2{
						display: block;
					}
				}
			}
			
				.rmdCard:nth-child(1){
					.top{
						background: #D4F4F8;
						color: #14C1D8;
					}
				}
				.rmdCard:nth-child(2){
					.top{
						background: #FEDDD8;
						color: #FC6950;
					}
				}
				.rmdCard:nth-child(3){
					.top{
						background: #F2E0FE;
						color: #BA57FC;
					}
				}
				.rmdCard:nth-child(4){
					.top{
						background: #FFEFE1;
						color: #FF9E5B;
					}
				}
				.rmdCard:nth-child(5){
					.top{
						background: #D4EFDF;
						color: #26AE60;
					}
				}
				.rmdCard:nth-child(6){
					.top{
						background: #FCF4DB;
						color: #DAAE22;
					}
				}
				.rmdCard:nth-child(7){
					.top{
						background: #DBD8F8;
						color: #605AE3;
					}
				}
				.rmdCard:nth-child(8){
					.top{
						background: #D4F4F8;
						color: #17C3D8;
					}
				}
		}
	}
</style>