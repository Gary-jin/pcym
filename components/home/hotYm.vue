<template>
	<view>
		<!--  -->
		<view class="f_cc_ls rmdbg2">
			<title-home style="margin: 50px 0 30px 0;" @change="change" :title="title" :subhead="subhead"></title-home>
			<view class="core_f rmdCardBox">
				<view class="rmdCard" v-for="(item,index) in 8" :key="index">
					<view class="top">nahan.com.cn</view>
					<view class="cen">￥26854.00</view>
					<view class="btn">剩余时间 <text>5小时16分</text> </view>
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
				title:'热门域名展示',
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
			.rmdCard:hover{
				transition: all .5s;
				transform: scale(1.02);
			}
			.rmdCard{
				width: 280px;
				height: 160px;
				background: #FFFFFF;
				box-shadow: 0px 0px 21px 0px rgba(238, 239, 242, 0.85);
				border-radius: 26px;
				overflow: hidden;
				margin-bottom: 27px;
				text-align: center;
				.top{
					height: 61px;
					line-height: 61px;
					background: #F9FBFF;
					font-size: 24px;
					font-weight: 600;
					color: $text-color2;
				}
				.cen{
					color: #FE2626;
					height: 54px;
					line-height: 54px;
					font-size: 18px;
					font-weight: 400;
				}
				.btn{
					font-size: 16px;
					font-weight: 400;
					color: #888888;
					text{
						color: #FF992C;
						margin-left: 5px;
					}
				}
			}
		}
	}
</style>