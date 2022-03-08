<template>
	<view>
		<view class="cardTitBox f_bc">
			<view class="titL">
				<i class="iconfontAl icon-money"></i>
				<text>充值方式</text>
			</view>
			<view class="titR"></view>
		</view>
		<view class="topUpBox">
			<view class="descBox">
				<view class="">1. 温馨提示：如在充值中遇到错误，请更换（IE）浏览器再试一遍！</view>
				<view class="tx">2. 本站账户禁止虚假交易、信用卡套现或洗钱等交易行为，若有发现将一律永久查封账户。</view>
			</view>
			<view class="cardTitBox f_bc">
				<view class="titL">
					<i style="color: #007AFF;" class="iconfontAl icon-fuzhushuxian"></i>
					<text>充值方式</text>
				</view>
				<view class="titR"></view>
			</view>
			<view class="czBox">
				<view class="czItem">商品名称： 预付款</view>
				<view class="czItem">支付方式：<text>*在线充值不需要任何手续费</text></view>
				<view class="czItem2">
					<el-radio v-model="type" label="alipay">支付宝</el-radio>
					<el-radio v-model="type" label="wechat">微信支付</el-radio>
				</view>
				<view class="czItem3">
					充值金额：
					<el-input v-model="money" :placeholder="plac"></el-input>
					<el-button type="warning" @click="getOrderId">充值</el-button>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import { API_URL } from '@/env.js'
	export default {
		components: {
			
		},
		data() {
			return {
				money:'',
				type: 'alipay',
				plac:'充值金额',
			}
		},
		mounted() {
			
		},
		methods: {
			getOrderId(){
				let that = this;
				if(!that.money){
					this.$util.showErrorMsg('请输入充值金额！');
					return
				}
				that.$http('order.chargeOrder',{
						money:that.money,
						type:that.type
					}).then(res => {
					if (res.code === 1) {
						window.open(API_URL+`pay/getQrcode?id=${res.data}`,'_blank');
					} else{
						that.$util.showErrorMsg(res.msg);
					}
				});
			},
		}
	}
</script>
<style lang="scss" scoped>
	.topUpBox{
		padding: 20px 40px 40px 40px;
		background-color: #FFFFFF;
		.descBox{
			background: #FFFAF5;
			border-radius: 8px;
			color: #FF6000;
			padding: 14px 28px;
			.tx{
				margin-top: 10px;
			}
		}
	}
	.czBox{
		border: 1px #F5F7FA solid;
		font-size: 14px;
		font-weight: 400;
		color: #323232;
		padding: 0 37px;
		.czItem{
			margin-top: 20px;
		}
		.czItem{
			text{
				color: #FE2626;
			}
		}
		.czItem2{
			padding: 20px 0;
			margin-left: 72px;
		}
		.czItem3{
			display: flex;
			align-items: center;
			margin-bottom: 30px;
			.el-input{
				width: 180px;
				margin-right: 10px;
			}
		}
	}
</style>