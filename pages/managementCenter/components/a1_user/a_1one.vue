<template>
	<view>
		<view class="userBox">
			<el-image style="width: 150px; height: 150px;border-radius: 10px;"
			      :src="userInfo.avatar"></el-image>
			<view class="userCore">
				<view class="f_cc_ls">
					<view class="titBox">
						<view class="tit1">会员ID：</view>
						<view class="tit2 elip">{{userInfo.user_id}}</view>
					</view>
					<view class="titBox">
						<view class="tit1">用户名：</view>
						<view class="tit2 elip">{{userInfo.username}}</view>
					</view>
					<view class="titBox">
						<view class="tit1">登录IP：</view>
						<view class="tit2 elip">{{userInfo.username}}</view>
					</view>
					<view class="titBox">
						<view class="tit1">总积分：</view>
						<view class="tit2 elip">{{userInfo.username}}</view>
					</view>
				</view>
				<view class="f_cc_ls">
					<!-- <view class="titBox">
						<view class="tit1">上次登录 ：</view>
						<view class="tit2 elip">11758</view>
					</view> -->
					<!-- <view class="titBox">
						<view class="tit1">安全等级：</view>
						<view class="tit3">
							<i v-for="(item,index) in 4" :key="index"
								:class="index<=rate?'icCol':'icN'"
							class="el-icon-minus"></i>
						</view>
					</view> -->
				</view>
			</view>
			<view class="btnUserBox">
				<view class="btnUser">
					<el-button type="primary" plain>积分详情</el-button>
				</view>
				<view class="btnUser">
					<el-button type="primary" plain>用户资料</el-button>
				</view>
			</view>
		</view>			
		<!--  -->
		<view class="moneyBox">
			<view class="moneyLeft">
				<view class="m1">{{userInfo.money}}</view>
				<view class="m2">总金额（元）</view>
			</view>
			<view class="moneyCen">
				<view class="cenBox">
					<view class="c1">78945</view>
					<view class="c2">可用金额(元)</view>
				</view>
				<view class="cenBox">
					<view class="c1">78945</view>
					<view class="c2">已冻结金额(元)</view>
				</view>
				<view class="cenBox">
					<view class="c1">78945</view>
					<view class="c2">可提现金额(元)</view>
				</view>
				<view class="cenBox">
					<view class="c1">78945</view>
					<view class="c2">不可提现金额</view>
				</view>
				<view class="cenBox">
					<view class="c1">78945</view>
					<view class="c2">消费积分</view>
				</view>
			</view>
			<view class="moneyRight">
				<view class="">
					<el-button type="primary">充值</el-button>
				</view>
				<view class="btnUser">
					<el-button type="primary" plain>提现</el-button>
				</view>
			</view>
		</view>
		<!-- 3 -->
		<view class="messBox f_s_w">
			
			<view class="messCard">
				<view class="titBox">
					<view class="titL">
						<i class="iconfontAl icon-maijiadianpu"></i>
						<text>我的购买</text>
					</view>
					<view class="titR">
						我的购买
					</view>
				</view>
				<view class="cardCore f_s_w">
					<view class="tT">
						<view class="tT1"> 已购买一口价域名：</view>
						<view class="tT2">0</view>
					</view>
					<view class="tT">
						<view class="tT1"> 已购买一口价域名：</view>
						<view class="tT2">0</view>
					</view>
					<view class="tT">
						<view class="tT1"> 已购买一口价域名：</view>
						<view class="tT2">0</view>
					</view>
					<view class="tT">
						<view class="tT1"> 已购买一口价域名：</view>
						<view class="tT2">0</view>
					</view>
				</view>
			</view>
			
			<view class="messCard">
				<view class="titBox">
					<view class="titL">
						<i class="iconfontAl icon-hulianwangIT"></i>
						<text>域名信息</text>
					</view>
					<view class="titR"></view>
				</view>
				<view class="cardCore f_s_w">
					<view class="tT">
						<view class="tT1"> 拥有域名总数：</view>
						<view class="tT2">0</view>
					</view>
					<view class="tT">
						<view class="tT1"> 30天到期域名：</view>
						<view class="tT2">0</view>
					</view>
					<view class="tT">
						<view class="tT1"> 已到期域名：</view>
						<view class="tT2">0</view>
					</view>
				</view>
			</view>
			
			<view class="messCard">
				<view class="titBox">
					<view class="titL">
						<i class="iconfontAl icon-24gl-cartFull"></i>
						<text>我的域名出售</text>
					</view>
					<view class="titR">
						<text style="margin-right: 10px;">添加寄售域名</text><text>添加一口价域名</text>
					</view>
				</view>
				<view class="cardCore f_s_w">
					<view class="tT">
						<view class="tT1"> 待审核：</view>
						<view class="tT2">0</view>
					</view>
					<view class="tT">
						<view class="tT1"> 待出售：</view>
						<view class="tT2">0</view>
					</view>
					<view class="tT">
						<view class="tT1"> 正在出售的寄售域名：</view>
						<view class="tT2">0</view>
					</view>
					<view class="tT">
						<view class="tT1"> 正在出售的一口价域名：</view>
						<view class="tT2">0</view>
					</view>
					<view class="tT">
						<view class="tT1"> 交易成功的寄售域名：</view>
						<view class="tT2">0</view>
					</view>
					<view class="tT">
						<view class="tT1"> 交易成功的一口价域名：</view>
						<view class="tT2">0</view>
					</view>
				</view>
			</view>
			
			<view class="messCard">
				<view class="titBox">
					<view class="titL">
						<i class="iconfontAl icon-xiaoxi"></i>
						<text>最新消息</text>
					</view>
					<view class="titR">
						查看更多
					</view>
				</view>
				<view class="cardCore2">
					<view class="tT">
						<view class="tT1">您的账号存在登录异常情况，请确认</view>
						<view class="tT2">11-03 11:37</view>
					</view>
					<view class="tT">
						<view class="tT1">您的账号存在登录异常情况，请确认</view>
						<view class="tT2">11-03 11:37</view>
					</view>
					<view class="tT">
						<view class="tT1">您的账号存在登录异常情况，请确认</view>
						<view class="tT2">11-03 11:37</view>
					</view>
				</view>
			</view>
			
		</view>
		
	</view>
</template>

<script>
	import {mapMutations,mapActions,mapState} from 'vuex';
	export default {
		components: {
			
		},
		data() {
			return {
				rate: 2,
			}
		},
		computed: {
			...mapState({
				userInfo: ({ user }) => user.userInfo
			})
		},
		mounted() {
			console.log("111");
		},
		methods: {
			
		}
	}
</script>
<style lang="scss" scoped>
	.userBox{
		padding: 30px;
		background: #FFFFFF;
		display: flex;
		justify-content: space-between;
		.userCore{
			width: 500px;
			height: 150px;
			display: flex;
			.titBox{
				width: 200px;
				display: flex;
				font-size: 14px;
				font-weight: 400;
				margin-bottom: 20px;
				.tit1{
					width: 50%;
					text-align: right;
					color: #777777;
				}
				.tit2{
					width: 50%;
				}
			}
			.tit3{
				width: 50%;
				.el-icon-minus{
					font-weight: bold;
					font-size: 20px;
				}
				.icCol{
					color: $text-color-main;
				}
			}
		}
		.btnUserBox{
			.btnUser{
				margin-top: 20px;
			}
		}
	}
	
	
	.moneyBox{
		height: 150px;
		background: url(../../../../static/image/admin/moneybg.png) no-repeat 0 0;
		margin-top: 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #FFFFFF;
		.moneyLeft{
			width: 172px;
			text-align: center;
			.m1{
				margin-top: 25px;
				margin-bottom: 15px;
				font-size: 20px;
				font-weight: bold;
				color: #FFFFFF;
			}
			.m2{
				font-size: 16px;
				font-weight: 400;
				color: #FFFFFF;
			}
		}
		.moneyCen{
			width: 725px;
			display: flex;
			.cenBox:last-child{
				border: none;
			}
			.cenBox{
				width: 25%;
				text-align: center;
				border-right: 1px #f2f2f2 solid;
				.c1{
					font-size: 16px;
					font-weight: bold;
					color: #FFA800;
				}
				.c2{
					font-size: 14px;
					font-weight: 400;
					color: #777777;
					margin-top: 16px;
				}
			}
		}
		.moneyRight{
			margin-right: 20px;
			.btnUser{
				margin-top: 16px;
			}
		}
	}
	
	.messBox{
		margin-bottom: 20px;
		.messCard{
			width: 455px;
			margin-top: 20px;
			.titBox{
				height: 55px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				background: #F5F7FA;
				padding: 0 20px;
				.titL{
					text{
						font-size: 14px;
						font-weight: 600;
						color: #323232;
						margin-left: 15px;
					}
				}
				.titR{
					color: $text-color-main;
				}
			}
			.cardCore{
				background-color: #FFFFFF;
				padding-bottom: 35px;
				.tT{
					width: 50%;
					display: flex;
					font-size: 14px;
					font-weight: 400;
					margin-top: 35px;
					.tT1{
						width: 80%;
						color: #777777;
						text-align: right;
					}
					.tT2{
						width: 20%;
						color: $text-color-main;
					}
				}
			}
			
			.cardCore2{
				background: #FFFFFF;
				overflow: hidden;
				.tT{
					display: flex;
					font-size: 14px;
					font-weight: 400;
					padding: 23px 0;
				}
				.tT1{
					width: 60%;
					color: #777777;
					text-align: right;
				}
				.tT2{
					width: 40%;
					color: #ADADAD;
					text-align: center;
				}
			}
			
		}
	}
</style>