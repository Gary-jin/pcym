<template>
	<view>
		<view class="f_cc_ls rmdbg2">
			<title-home style="margin: 50px 0 30px 0;" @change="change" :title="title" :subhead="subhead"></title-home>
			
			<mt-mt></mt-mt>	
		</view>
		
		
	</view>
</template>

<script>
	import titleHome from '@/components/home/title.vue'; 
	import mtMt from './mt.vue'
	export default {
		components: {
			titleHome,mtMt
		},
		data() {
			return {
				title:'热门新媒体展示',
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
		background-color: $bg-home-1;
		.rmdCardBox{
			flex-wrap: wrap;
			justify-content: space-between;
			margin-bottom: 80px;
			// .rmdCard{
			// 	width: 280px;
			// 	height: 435px;
			// 	background: #FFFFFF;
			// 	border-radius: 26px;
			// 	border: 1px solid #F0F0F0;
			// 	overflow: hidden;
			// 	margin-bottom: 27px;
			// 	text-align: center;
			// 	.top{
			// 		width: 100%;
			// 		display: flex;
			// 		justify-content: center;
			// 		margin-top: 49px;
			// 		image{
			// 			width: 57px;
			// 			height: 57px;
			// 		}
			// 	}
			// 	.cen{
			// 		color: $text-color1;
			// 		font-size: 18px;
			// 		font-weight: 600;
			// 		padding:  27px;
			// 	}
			// 	.price{
			// 		font-size: 22px;
			// 		font-weight: 600;
			// 		color: #FE2626;
			// 	}
				
			// 	.ccard{
			// 		display: flex;
			// 		justify-content: space-around;
			// 		flex-wrap: wrap;
			// 		.cc{
			// 			width: 50%;
			// 			align-items: center;
			// 			flex-direction: column;
			// 			padding: 26px 0;
			// 				.cc1{
			// 					font-size: 14px;
			// 					font-weight: 400;
			// 					color: #A0A8BC;
			// 				}
			// 				.cc2{
			// 					font-size: 16px;
			// 					font-weight: 400;
			// 					color: #323232;
			// 				}
			// 		}
			// 	}
			// }
		}
	}
</style>