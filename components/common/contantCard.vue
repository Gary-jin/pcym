<template>
	<view class="f_w">
		<view class="cardBox" v-for="(item,index) in 10" :key="index">
			<view class="f_cc_ls">
				<el-avatar :size="50" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></el-avatar>
				<view class="tit">你是皮卡修吗</view>
				<view class="num">
					<image style="width: 18px; height: 18px;" src="../../static/image/common/ic12.png" mode="widthFix"></image>
					<text>18819299938</text>
				</view>
				<view class="num">
					<image style="width: 18px; height: 18px;" src="../../static/image/common/ic13.png" mode="widthFix"></image>
					<text>@wwwekfe</text>
				</view>
				<view class="num">
					<image style="width: 18px; height: 18px;" src="../../static/image/common/ic14.png" mode="widthFix"></image>
					<text>bdhdhgjd</text>
				</view>
				 <el-button type="primary" round class="elBtn">
					 <image class="img" src="../../static/image/common/ic15.png" mode="heightFix"></image>
					 QQ交谈
				 </el-button>
			</view>
		</view>
	</view>
</template>

<script>

	export default {
		props: {
			avatarUrl: {
				type: String,
				default: ''
			},
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
	.cardBox{
		width: 280px;
		height: 357px;
		background: #FFFFFF;
		box-shadow: 0px 0px 21px 0px rgba(238, 239, 242, 0.85);
		border-radius: 26px;
		margin-right: 26px;
		margin-bottom: 35px;
		margin-top: 30px;
		.f_cc_ls{
			padding: 0 20px;
			position: relative;
			top: -20px;
			.tit{
				width: 100%;
				text-align: center;
				color: $text-color2;
				font-size: 16px;
				font-weight: 600;
				margin-top: 10px;
				padding-bottom: 25px;
				border-bottom: 1px #CED2DA dashed;
			}
			.num{
				margin-top: 30px;
				width: 150px;
				display: flex;
				align-items: center;
				text{
					color: $text-color3;
					margin-left: 5px;
				}
			}
			.elBtn{
				margin-top: 40px;
				width: 230px;
				font-size: 18px;
				border-radius:25px;
				.img{
					width: 18px; 
					height: 18px; 
					margin-right: 10px;
					position: relative;
					bottom: -2px;
				}
			}
		}
	}
	.cardBox:nth-child(4n){
		margin-right: 0;
	}
</style>