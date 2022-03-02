<template>
	<view>
		<!--  -->
		<!-- <view class="f_cc_ls rmdbg">
			<view class="core_f rmdTop" @click="goYmList()">
				<text class="tit1">预定推荐：</text>
				近期有 <text class="tit2">{{total}}</text> 个域名即将被删除
			</view>
			<view class="core_f rmdBto">
				<view v-for="(item,index) in datalist" :key="index" class="cardS" :class="item.hot == '1'?'cardBg1':'cardBg2'">
					{{item.domain}}
				</view>
			</view>
		</view> -->
		<!--  -->
		<!-- <view class="f_cc_ls rmdbg2">
			<title-home style="margin: 50px 0 30px 0;" @change="change" :title="title" :subhead="subhead"></title-home>
			<view class="core_f rmdCardBox">
				<view class="rmdCard" v-for="(item,index) in 8" :key="index">
					<view class="top">nahan.com.cn</view>
					<view class="cen">呐喊</view>
					<view class="btn">剩余时间 <text>5小时16分</text> </view>
				</view>
			</view>
		</view> -->
		<view class="f_cc_ls rmdbg3">
			<view class='core advBox'>
				<view class="title">
					此处应是大标题，内容甲方自己需提供
				</view>
				<view class="subTitle">
					共享亿金融级安全体系，从核心到外围多层防护&监控体系，全
					基于巨石自主研发的飞天云，确保电子邮件服务全天候可用
					误删邮件轻松找回，邮件管理更安全、更放心
				</view>
				 <el-button class="titBtn" round>点击查看</el-button>
			</view>
			<view class="imgBox">
				<image class="topPic" src="../../static/image/common/rgb3.png" mode="widthFix"></image>
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
				subhead:'一个小标题的注释一个小标题的注释一个小标题的注释',
				datalist:[],
				total:''
			}
		},
		onLoad(admin) {
		},
		onShow() {
			
		},
		mounted() {
			this.getList()
		},
		methods: {
			change(e){
				console.log(e);
			},
			getList() {
				let that = this;
				that.$http('ym.ydhot', {pagesize:15}, '').then(res => {
					if (res.code === 1) {
						that.total = res.data.total
						that.datalist = res.data.data.data
					}
				});
			},
			goYmList(){
				uni.navigateTo({
				    url: `/pages/nav1/n1_expire/index`
				});
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
	
	.rmdbg3{
		width: 100%;
		height: 430px;
		background-image: url(../../static/image/common/rbg3b.png);
		background-size: 100% 100%;
		position: relative;
		overflow: hidden;
		.imgBox{
			position: absolute;
			right: 144px;
			top: -105px;
			width: 1230px;
			height: 630px;
			.topPic{
				width: 100%;
				height: 100%;
				animation: zoomIn 8s  infinite alternate;
			}
		}
		.advBox{
			color: #FFFFFF;
			.title{
				font-size: 32px;
				font-weight: normal;
				margin: 90px 0 10px 0;
			}
			.subTitle{
				width: 444px;
				font-size: 16px;
				font-weight: 400;
			}
			.titBtn{
				border: 1px #FFFFFF solid;
				color: #FFFFFF;
				background: none;
				margin-top: 20px;
			}
		}
	}
	
	@-webkit-keyframes zoomIn {
	    0% {
	        opacity: .3;
	        -webkit-transform: scale3d(.9,.9,.9);
	        transform: scale3d(.9,.9,.9)
	    }
	
	    50% {
	        opacity: 1
	    }
	}
	
	@keyframes zoomIn {
	    0% {
	        opacity: .3;
	        -webkit-transform: scale3d(.9,.9,.9);
	        transform: scale3d(.9,.9,.9)
	    }
	
	    50% {
	        opacity: 1
	    }
	}
</style>