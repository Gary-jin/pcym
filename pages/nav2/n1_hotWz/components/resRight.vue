<template>
	<view class="rightBox ">
		<view class="resRight">
			<view class="cornerBox">
				垂直行业
			</view>
			<view class="title">
				百度移动权重3 三声母域名 整站打包亏本处理 着急卖
			</view>
			<view class="titleF">
				代售委托ID:73049  发布时间:2021.11.30 12:42:03
			</view>
			<view class="picBox f_bc">
				<view class="pic">￥12345</view>
				<view class="btnBox f_bc">
					<!-- <el-button class="bt" type="primary"><i class="iconfontAl icon-jiagebaohu"></i>砍价</el-button> -->
					<el-button class="bt" type="primary"><i class="el-icon-user-solid"></i>联系经纪人</el-button>
					<i @click="collectCh(item)" class="iconfontAl icon-iclike" :class="collect?'alicY':'alicN'">关注</i>
				</view>
			</view>
			<view class="labBox">
				
				<view class="labItem">
					<view class="lab">
						<view class="labTit">百度移动权重</view>
						<view class="labBd">
							<view class="labBd1 f_cc"><i class="iconfontAl icon-baidu"></i></view>
							<view class="labBd2">23</view>
						</view>
					</view>
					<view class="lab">
						<view class="labTit">网站流量</view>
						<view class="labTit1">1000+</view>
					</view>
					<view class="lab">
						<view class="labTit">转服务器</view>
						<view class="labTit1">1000+</view>
					</view>
					<view class="lab">
						<view class="labTit">百度收录量</view>
						<view class="labTit1">1000+</view>
					</view>
					<view class="lab">
						<view class="labTit">卖家微信</view>
						<view class="labTit1">1000+</view>
					</view>
					<view class="lab">
						<view class="labTit">卖家认证</view>
						<view class="labTit1">1000+</view>
					</view>
				</view>
				<!--  -->
				<view class="labItem">
					<view class="lab">
						<view class="labTit">百度权重</view>
						<view class="labBd">
							<view class="labBd1 f_cc"><i class="iconfontAl icon-baidu"></i></view>
							<view class="labBd2">23</view>
						</view>
					</view>
					<view class="lab">
						<view class="labTit">建站程序</view>
						<view class="labTit1">1000+</view>
					</view>
					<view class="lab">
						<view class="labTit">网站分类</view>
						<view class="labTit1">1000+</view>
					</view>
					<view class="lab">
						<view class="labTit">网站地址</view>
						<view class="labTit1">1000+</view>
					</view>
					<view class="lab">
						<view class="labTit">所在区域</view>
						<view class="labTit1">1000+</view>
					</view>
				</view>
				<!--  -->
				<view class="labItem">
					<view class="lab">
						<view class="labTit">搜狗权重/收录</view>
						<view class="labTit1">1000+</view>
					</view>
					<view class="lab">
						<view class="labTit">内容更新</view>
						<view class="labTit1">1000+</view>
					</view>
					<view class="lab">
						<view class="labTit">神马权重</view>
						<view class="labTit1">1000+</view>
					</view>
					<view class="lab">
						<view class="labTit">卖家QQ</view>
						<view class="labTit1">1000+</view>
					</view>
					<view class="lab">
						<view class="labTit">卖家类型</view>
						<view class="labTit1">1000+</view>
					</view>
				</view>
				
			</view>
			
			<view class="agreement">
				<el-checkbox @change="toggleSelection(checked)" v-model="checked">我已阅读并同意</el-checkbox>
				<text>《交易服务协议》</text>
			</view>
		</view>
		
		<view class="expBox">
			<view class="cexp">
				<view class="">
					为了保证交易行为安全可靠，我站提供第三方资金代管业务，仅作为第三方合同所涉资金，做中介居间服务 快速，安全，专注十五年，成交数十万笔
				</view>
				<view class="">
					备注：我们只做正规合法站，严禁任何违规产品和虚假交易后果自负
				</view>
			</view>
		</view>
		
		<view class="wzTitle">
			<i class="iconfontAl icon-maijiadianpu"></i>
			<text>卖家描述</text>
		</view>
		<view class="expBox1">
			<view class="">
				为了保证交易行为安全可靠，我站提供第三方资金代管业务，仅作为第三方合同所涉资金，做中介居间服务 快速，安全，专注十五年，成交数十万笔
			</view>
		</view>
		
		<view class="wzTitle">
			<i class="iconfontAl icon-shuju"></i>
			<text>数据图</text>
		</view>
		<view class="expBox2">
			<view class="">
				<el-image style="width: 100%; height: 100%"
				      src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></el-image>
			</view>
		</view>
		
		<view class="wzTitle">
			<i class="iconfontAl icon-shuju"></i>
			<text>交易步骤</text>
		</view>
		<view class="expBox2 expBox22">
			<view class="">
				<el-image style="width: 100%; height: 100%"
				      src="../../../../static/image/nav2/bz.png"></el-image>
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
				activeName:'first',
				collect:false,
				checked:false
			}
		},
		onLoad() {
		},
		onShow() {
			
		},
		onHide() {
			
		},
		methods: {
		  handleClick(tab, event) {
				this.activeName = tab._props.name
				console.log(tab._props.name);
				console.log(event);
			},
			collectCh(item){
				this.collect = !this.collect
			},
			toggleSelection(e){
				
			}
		}
	}
</script>
<style lang="scss" scoped>
	.rightBox{
		width: 887px;
	}
		
	.resRight{
		background-color: #FFFFFF;
		padding: 20px 60px;
		position: relative;
		overflow: hidden;
		.cornerBox{
			position: absolute;
			top: 5px;
			left: -33px;
			background: #F36161;
			color: #FFFFFF;
			text-align: center;
			line-height: 40px;
			width: 120px;
			height: 40px;
			transform: rotate(-45deg);
			transform-origin:50% 50%;
		}
		.title{
			font-size: 30px;
			font-weight: 600;
			color: #323232;
		}
		.titleF{
			font-size: 14px;
			font-weight: 400;
			color: #777777;
			margin-top: 15px;
		}
		.picBox{
			margin: 30px 0;
			.pic{
				font-size: 40px;
				font-weight: 900;
				color: #FE2626;
			}
			.btnBox{
				.bt{
					width: 143px;
					background: linear-gradient(157deg, #FF7661 0%, #FC5461 100%);
					border: none;
				}
				.icon-iclike{
					padding: 0 30px;
				}
			}
		}
		
		.labBox{
			height: 490px;
			background: #FDFDFD;
			border: 1px solid rgba(230, 230, 230, 0.6);
			display: flex;
			padding: 30px 50px;
			.labItem{
				width: 33%;
				.lab{
					margin-bottom: 37px;
					.labTit{
						font-size: 14px;
						font-weight: 400;
						color: #777777;
					}
					.labTit1{
						font-size: 16px;
						font-weight: 400;
						color: #323232;
						margin-top: 10px;
					}
					.labBd{
						display: flex;
						width: 60px;
						height: 20px;
						border: 1px solid $text-color-main;
						border-radius: 20px;
						box-sizing: border-box;
						margin-top: 10px;
						.labBd1{
							width: 30px;
							height: 100%;
							background-color: $text-color-main;
							border-radius: 20px;
							color: #FFFFFF;
							font-size: 14px;
						}
						.labBd2{
							width: 30px;
							text-align: center;
							line-height: 20px;
							color: $text-color-main;
						}
					}
				}
			}
		}
		
		.agreement{
			padding: 30px 0;
			text{
				color: $text-color-main;
			}
		}
	}
	
	
	.expBox{
		padding: 20px;
		margin-top: 20px;
		background-color: #fff;
		.cexp{
			background: #FFFAF5;
			font-size: 14px;
			font-weight: 400;
			color: #FE2626;
		}
	}
	
	.wzTitle{
		margin-top: 20px;
		padding: 18px;
		background: #F5F7FA;
		text{
			font-size: 14px;
			font-weight: 600;
			color: #323232;
			margin-left: 10px;
		}
	}
	
	.expBox1{
		padding: 36px 54px;
		background-color: #fff;
		background: #FFFAF5;
		font-size: 14px;
		font-weight: 400;
	}
	.expBox2{
		padding: 43px;
		background: #FFFFFF;
	}
	.expBox22{
		margin-bottom: 112px;
	}
</style>