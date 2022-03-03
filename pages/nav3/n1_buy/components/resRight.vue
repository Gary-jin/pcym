<template>
	<view class="rightBox">
		<view class="detail">
			<view class="ymBox">{{goodsDetail.domain}}</view>
			<view class="ymBox1">{{goodsDetail.desc}}</view>
			<view class="ymCen ">
				<view class="card">
					<view class="t1">当前价格：</view>
					<view class="t2 t22">{{goodsDetail.price}}</view>
				</view>
				<view class="card">
					<view class="t1">过期时间：</view>
					<view class="t2">{{goodsDetail.delete_date}}</view>
				</view>
				<!-- <view class="card">
					<view class="t1">注册商：</view>
					<view class="t2">{{goodsDetail.desc}}</view>
				</view> -->
				<view class="card">
					<view class="t1">域名有效期：</view>
					<view class="t2">{{goodsDetail.desc}}</view>
				</view>
				<view class="card">
					<view class="t1">
						<el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="top">
							<i class="el-icon-warning-outline"></i>
						</el-tooltip>
						手机号码：
					</view>
					<view class="t2">
						<text class="pho">{{userInfo.mobile}}</text>
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
						<el-button @click="buy()" type="warning" size="mini">立即购买</el-button>
						<text class="x1">可用余额：</text>
						<text class="x2">￥{{userInfo.money}}</text>
						<text class="x3">充值</text>
					</view>
				</view>
			</view>
		</view>
		
		<qj-dialog :hidden="hidden" :title="'域名：'+goodsDetail.domain" :hideFooter="false" :width="400" :height="150"
		 @close="closeDialog" @cancel="closeDialog"  @confirm="submit">
			<view class="popupBox">
				<view class="tit1">出售价格：￥{{goodsDetail.price}}</view>
				<view class="tit1">可用余额：<text style="color: #007AFF;">￥{{userInfo.money}}</text></view>
				<view class="tit1">您确定要购买吗？</view>
			</view>
		</qj-dialog>
		
	</view>
</template>

<script>
	import {mapMutations,mapActions,mapState} from 'vuex';
	export default {
		components: {
		},
		props: {
			goodsId: {
				type: String,
				default: ''
			},
		},
		computed: {
			...mapState({
				userInfo: ({ user })  => user.userInfo,
			})
		},
		data() {
			return {
				code:'',
				checked:true,
				goodsDetail:{},
				hidden:false
			}
		},
		mounted() {
			this.getDetail()
		},
		methods: {
			getDetail(){
				let that = this;
				that.$http('ym.ykjDetail', {
					id: that.goodsId
				}).then(res => {
					if (res.code === 1) {
						that.goodsDetail = res.data 
					}
				});
			},
			toggleSelection(val){
				console.log(val);
			},
			buy(){
				this.hidden = true;
			},
			closeDialog() {
				this.hidden = false
			},
			submit() {
				this.hidden = false
			},

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
	
	.popupBox{
		padding: 20px;
		.tit1{
			padding: 10px 0;
		}
	}
</style>