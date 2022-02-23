<template>
	<view class="core titBox">
		<view class="titT">
			<view class="tit1">{{title}}</view>
			<view class="tit2">{{subhead}}</view>
		</view>
		<view class="titR" @click="titGo()">
			<image src="../../static/image/home/icon1.png" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>

	export default {
		components: {
			
		},
		props:{
			title: {
				type: String,
				default: ''
			},
			subhead: {
				type: String,
				subhead: ''
			}
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
			titGo(){
				this.$emit('change',1)
			}
		}
	}
</script>
<style lang="scss" scoped>
	.titBox{
		height: 95px;
		position: relative;
		.titT{
			text-align: center;
			.tit1{
				font-size: 40px;
				font-weight: 600;
				color: $text-color1;
				margin: 5px 0 5px 0;
			}
			.tit2{
				font-size: 16px;
				font-weight: 400;
				color: #8E919F;
			}
		}
		.titR{
			position: absolute;
			right: 0;
			top: 13px;
			image{
				width: 69px;
				height: 69px;
			}
		}
		.titR:hover{
			cursor:pointer			
		}
	}
</style>