<template>
	<view class="rightBox">
		<view class="detail">
			<view class="ymBox">pengdeng.com.cn</view>
			<view class="ymBox1">我的名字</view>
			<view class="ymCen ">
				<view class="card">
					<view class="t1">当前价格：</view>
					<view class="t2 t22">DEL</view>
				</view>
				<view class="card">
					<view class="t1">剩余时间：</view>
					<view class="t2">12</view>
				</view>
				<view class="card">
					<view class="t1">注册商：</view>
					<view class="t2">2021-08-21 至 2022-08-21</view>
				</view>
				<view class="card">
					<view class="t1">域名有效期：</view>
					<view class="t2">2021-08-21 至 2022-08-21</view>
				</view>
				<view class="card">
					<view class="t1">
						<el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="top">
							<i class="el-icon-warning-outline"></i>
						</el-tooltip>
						手机号码：
					</view>
					<view class="t2">
						<text class="pho">123456789456</text>
						<el-button type="primary" :loading="true" plain size="mini">获取验证码</el-button>
					</view>
				</view>
				<view class="card">
					<view class="t1">验证码：</view>
					<view class="t2" style="width: 150px;">
						<el-input v-model="code" size="mini" placeholder="请输入验证码"></el-input>
					</view>
				</view> 
				<view class="card">
					<view class="t1"></view>
					<view class="t2">
						<el-checkbox @change="toggleSelection(checked)" v-model="checked"></el-checkbox>
						<text>勾选后，在60分钟内相同业务类型，不需要再次验证。</text>
					</view>
				</view>
				<view class="card">
					<view class="t1"></view>
					<view class="t2">
						<el-button type="warning" size="mini">立即购买</el-button>
						<text class="x1">可用余额：</text>
						<text class="x2">￥0.00</text>
						<text class="x3">充值</text>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		components: {
		},
		data() {
			return {
				code:'',
				checked:true,
			}
		},
		onLoad() {
		},
		onShow() {
			
		},
		onHide() {
			
		},
		methods: {
			toggleSelection(val){
				console.log(val);
			}

		}
	}
</script>
<style lang="scss" scoped>
	.rightBox{
		width: 887px;
		background-color: #FFFFFF;
	}
	.detail{
		padding: 15px;
	}
	.ymBox{
		font-size: 22px;
		font-weight: bold;
	}
	.ymBox1{
		margin-top: 10px;
	}
	
	.ymCen{
		background-color: $color-f2;
		margin-top: 20px;
		.card{
			display: flex;
			align-items: center;
			font-size: 14px;
			padding:10px 0;
			.t1{
				width: 25%;
				text-align: right;
				font-weight: bold;
			}
			.t2{
				width: 75%;
				.pho{
					margin-right: 30px;
				}
				.x1{
					margin-left: 10px;
				}
				.x3{
					margin-left: 20px;
					color: $text-color3;
				}
			}
			.t22{
				color: #FE2626;
			}
		}
	}
</style>