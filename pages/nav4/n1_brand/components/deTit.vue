<template>
	<view class="titleBox">
		<el-image style="width: 20px; height: 20px"
				src="../../../../static/image/common/ic8.png">
		</el-image>
		<text class="tt1">{{tit1}}</text>
		<text class="tt2">●</text>
		<text class="tt3">{{tit2}}</text>
	</view>
</template>

<script>

	export default {
		components: {
			
		},
		props: {
			tit1: {
				type: String,
				default: '主标'
			},
			tit2: {
				type: String,
				default: '副标'
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
	.tt1{
		margin-left: 28px;
		font-size: 30px;
		font-weight: 600;
		color: $text-color3;
	}
	.tt2{
		font-size: 30px;
		font-weight: 600;
		color: $text-color3;
		margin: 0 10px;
	}
	.tt3{
		font-size: 30px;
		font-weight: 600;
		color: $text-color2;
	}
	
</style>