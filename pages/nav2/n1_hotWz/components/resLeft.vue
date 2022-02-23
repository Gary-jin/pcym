<template>
	<view class="leftBox">
		<!-- title -->
		<view class="titleBox f_bc">
			<view class="titleL">
				<view class="l1"></view>
				<view class="l2">咨询经纪人</view>
			</view>
			<view class="titleR"></view>
		</view>
		<!-- table -->
		<view class="tableBox f_cc_ls">
			<el-avatar class="ava" :size="50" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></el-avatar>
			<view class="name f_cc">
				<text class="n1">夏红光</text>
				<text class="n2">资深顾问</text>
			</view>
			<view class="phone">
				<i class="iconfontAl icon-shouji"></i>
				<text>15190746033</text>
			</view>
			<view class="btnBox">
				<el-button type="primary">
					<i class="iconfontAl icon-qq"></i>
					1149119844
				</el-button>
			</view>
			<view class="btnBox1">
				<el-button type="success">
					<i class="iconfontAl icon-weixin"></i>
					1149119844
				</el-button>
			</view>
		
		</view>
		<view style="height: 20px;"></view>
		<!-- title -->
		<view class="titleBox f_bc">
			<view class="titleL">
				<view class="l1"></view>
				<view class="l2">常见问题</view>
			</view>
			<view class="titleR"></view>
		</view>
		<!--  -->
		<view class="ruleBox">
			网站交易流程
		</view>
	</view>
</template>

<script>

	export default {
		components: {
			
		},
		data() {
			return {
				tableData:[{
					url:"2935.com"
				},{
					url:"2935.com"
				},{
					url:"2935.com"
				}]
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
	.leftBox{
		width: 283px;
		.titleBox{
			height: 50px;
			background-color: $bg-color-main;
			.titleL{
				display: flex;
				.l1{
					width: 4px;
					height: 25px;
					background: linear-gradient(317deg, #4088FF 0%, #FFFFFF 100%);
					margin: 0 12px 0 20px;
				}
				.l2{
					font-size: 18px;
					font-weight: 600;
					color: #FFFFFF;
				}
			}
			.titleR{
				font-size: 14px;
				font-weight: 400;
				color: #FFFFFF;
				margin-right: 20px;
			}
		}
	}
	
	.tableBox{
		background-color: #FFFFFF;
		.ava{
			margin-top: 25px;
		}
		.name{
			margin-top: 25px;
			.n1{
				font-size: 22px;
				font-weight: 600;
			}
			.n2{
				font-size: 16px;
				margin-left: 5px;
				font-weight: 400;
				color: #FC5D3D;
			}
		}
		.phone{
			color: $text-color-main;
			font-size: 18px;
			margin-top: 30px;
			text{
				margin-left: 5px;
			}
		}
		.btnBox{
			margin-top: 30px;
			margin-bottom: 15px;
		}
		.btnBox1{
			margin-bottom: 51px;
		}
		.el-button{
			width: 215px;
		}
	}
	
	
	.ruleBox{
		padding: 20px;
		background-color: #FFFFFF;
	}
</style>