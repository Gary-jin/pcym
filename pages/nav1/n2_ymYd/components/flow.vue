<template>
	<view class="flowBox">
		<view class="title">
			<view class="tL"></view>
			<view class="tLL">域名预订流程图</view>
		</view>
		<image class="img" src="../../../../static/image/nav1/lc.png" mode="widthFix"></image>
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
	.flowBox{
		padding: 20px;
		background: #FFFFFF;
		margin-bottom: 127px;
		.title{
			display: flex;
			align-items: center;
			margin-bottom: 20px;
			.tL{
				width: 4px;
				height: 25px;
				background: linear-gradient(137deg, #4088FF 0%, #FFFFFF 100%);
			}
			.tLL{
				color: $text-color-main;
				font-size: 18px;
				font-weight: 600;
				margin-left: 5px;
			}
		}
		.img{
			width: 844px;
		}
	}
</style>