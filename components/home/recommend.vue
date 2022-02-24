<template>
	<view>
		<!--  -->
		<view class="f_cc_ls rmdbg">
			<view class="core_f rmdTop">
				<text class="tit1">预定推荐：</text>
				近期有 <text class="tit2">4598684</text> 个域名即将
			</view>
			<view class="core_f rmdBto">
				<view v-for="(item,index) in 15" :key="index" class="cardS" :class="index<5?'cardBg1':'cardBg2'">
					555.cn
				</view>
			</view>
		</view>
		<!--  -->
		<view class="f_cc_ls rmdbg2">
			<title-home style="margin: 50px 0 30px 0;" @change="change" :title="title" :subhead="subhead"></title-home>
			<view class="core_f rmdCardBox">
				<view class="rmdCard" v-for="(item,index) in 8" :key="index">
					<view class="top">nahan.com.cn</view>
					<view class="cen">呐喊</view>
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
				title:'预定推荐',
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
	.rmdbg{
		background-image: url(../../static/image/home/rmdbg.png);
		background-size: 100% 100%;
		width: 100%;
		height: 430px;
		.rmdTop{
			padding: 35px 0 30px 0;
			font-size: 18px;
			color: #d4ddff;
			.tit1{
				font-weight: bold;
				color: #FFFFFF;
			}
			.tit2{
				color: #FF9A27;
			}
		}
		
		.rmdBto{
			justify-content: space-between;
			flex-wrap: wrap;
			.cardS{
				margin-bottom: 3px;
				width: 238px;
				height: 100px;
				text-align: center;
				line-height: 100px;
				font-size: 20px;
				font-weight: 600;
				color: #FFFFFF;
				background-color: #1B4299;
			}
			.cardS:hover{
				transition: all .5s;
				transform: scale(1.08);
				color: #FFE50E;
			}
			.cardBg1{
				background-image: url(../../static/image/home/md1_1.png);
				background-size: 100% 100%;
			}
			.cardBg2{
				background-image: url(../../static/image/home/md1_2.png);
				background-size: 100% 100%;
			}
		}
	}
	
	.rmdbg2{
		background-color: $bg-home-2;
		.rmdCardBox{
			flex-wrap: wrap;
			justify-content: space-between;
			margin-bottom: 80px;
			.rmdCard:hover{
				transition: all .5s;
				transform: scale(1.04);
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
					color: $text-color3;
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