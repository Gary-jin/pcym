<template>
	<view>
		<view class="userBox">
			<el-image style="width: 150px; height: 150px;border-radius: 10px;"
			      :src="avaUrl"></el-image>
			<view class="userCore">
				<view class="f_cc_ls">
					<view class="titBox">
						<view class="tit1">会员ID：</view>
						<view class="tit2 elip">11758</view>
					</view>
					<view class="titBox">
						<view class="tit1">用户名：</view>
						<view class="tit2 elip">会员ID：</view>
					</view>
					<view class="titBox">
						<view class="tit1">登录IP：</view>
						<view class="tit2 elip">会员ID：</view>
					</view>
					<view class="titBox">
						<view class="tit1">总积分：</view>
						<view class="tit2 elip">会员ID：</view>
					</view>
				</view>
				<view class="f_cc_ls">
					<view class="titBox">
						<view class="tit1">上次登录 ：</view>
						<view class="tit2 elip">11758</view>
					</view>
					<view class="titBox">
						<view class="tit1">安全等级：</view>
						<view class="tit3">
							<i v-for="(item,index) in 4" :key="index"
								:class="index<=rate?'icCol':'icN'"
							class="el-icon-minus"></i>
						</view>
					</view>
				</view>
			</view>
			<view class="btnUserBox">
				<view class="btnUser">
					<el-button type="primary" plain>积分详情</el-button>
				</view>
				<view class="btnUser">
					<el-button @click="exHead" type="primary" plain>更改头像</el-button>
				</view>
			</view>
		</view>			
		<!-- 2 -->
		<view class="cardTitBox f_bc">
			<view class="titL">
				<i class="iconfontAl icon-24gl-phoneBubble"></i>
				<text>联系方式</text>
			</view>
			<view class="titR">更改</view>
		</view>
		<view class="cardContact f_bc">
			<view class="">
				<text>微信：</text>
				<el-input  v-model="input1"  size="small"></el-input>
			</view>
			<view class="">
				<text>QQ：</text>
				<el-input  v-model="input2"  size="small"></el-input>
			</view>
			<view class="">
				<text>其他：</text>
				<el-input  v-model="input3"  size="small"></el-input>
			</view>
		</view>
		<!-- 3 -->
		<view class="cardTitBox f_bc">
			<view class="titL">
				<i class="iconfontAl icon-anquan"></i>
				<text>安全设置</text>
			</view>
			<view class="titR"></view>
		</view>
		<view class="anquanBox">
			<view class="anquanTit f_bc">
				<view class="aqTx">绑定项目</view>
				<view class="aqTx">状态</view>
				<view class="aqTx">现在绑定</view>
			</view>
			<view class="anquanTit1 f_bc">
				<view class="aqTx">安全码</view>
				<view class="aqTx11">状态</view>
				<view class="aqTx2">修改绑定</view>
			</view>
			<view class="anquanTit1 f_bc">
				<view class="aqTx">手机绑定</view>
				<view class="aqTx1">状态</view>
				<view class="aqTx2">修改绑定</view>
			</view>
			<view class="anquanTit1 f_bc">
				<view class="aqTx">邮箱绑定</view>
				<view class="aqTx1">状态</view>
				<view class="aqTx2">修改绑定</view>
			</view>
			<view class="anquanTit1 f_bc">
				<view class="aqTx">修改密码</view>
				<view class="aqTx1">状态</view>
				<view class="aqTx2">修改绑定</view>
			</view>
		</view>
		<!-- 4 -->
		<view class="cardTitBox f_bc">
			<view class="titL">
				<i class="iconfontAl icon-shijian"></i>
				<text>近期登录日志</text>
			</view>
			<view class="titR"></view>
		</view>
		<view class="anquanBox">
			<view class="anquanTit f_bc anquanTitM">
				<view class="aqTx">登录IP</view>
				<view class="aqTx aqTxc">登录信息</view>
				<view class="aqTx aqTxc">登录端</view>
				<view class="aqTx aqTxr">登录时间</view>
			</view>
			<view class="anquanTit1 f_bc anquanTitM" v-for="(item,index) in 4" :key="index">
				<view class="aqTx">219.123.*.*</view>
				<view class="aqTx aqTxc">河南郑州市</view>
				<view class="aqTx aqTxc">PC端</view>
				<view class="aqTx aqTxr">2021-11-17 09:12端</view>
			</view>
		</view>
		
		<view style="height: 60px;"></view>
		
	</view>
</template>

<script>

	export default {
		components: {
			
		},
		data() {
			return {
				rate: 2,
				avaUrl:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
				input1:'',
				input2:'',
				input3:'',
			}
		},
		mounted() {
			console.log("111");
		},
		methods: {
			exHead(){
				let that = this
				
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'], 
					sourceType: ['album'],
					success: res => {
						res.tempFilePaths.forEach(img => {
							that.$util.uploadImage('common/upload', img).then(res => {
								that.avaUrl = res.fullurl;
							});
						});
					}
				});
			},
			
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
	
	.cardTitBox{
		padding: 0 20px;
		background: #F5F7FA;
		height: 55px;
		margin-top: 20px;
		.titL{
			font-size: 14px;
			font-weight: 600;
			color: #323232;
			.iconfontAl{
				color: #323232;
				font-weight: bold;
				margin-right: 10px;
			}
		}
	}
	
	.cardContact{
		padding: 30px;
		background-color: #FFFFFF;
		text{
			font-size: 14px;
			font-weight: 400;
			color: #777777;
		}
		.el-input{
			width: 180px;
		}
	}
	
	.anquanBox{
		padding: 30px;
		background-color: #FFFFFF;
		.anquanTit{
			padding: 15px;
			border-bottom: 1px #E6E6E6 dashed;
			.aqTx{
				font-size: 14px;
				font-weight: 400;
				color: #777777;
			}
		}
		.anquanTit1{
			padding: 15px;
			font-size: 14px;
			font-weight: 400;
			.aqTx1{
				color: #FE2626;
			}
			.aqTx11{
				color: #58C46E;
			}
			.aqTx2{
				color: $text-color-main;
			}
		}
	}
	
	.anquanTitM{
		.aqTx{
			width: 25%;
		}
		.aqTxc{
			text-align: center;
		}
		.aqTxr{
			text-align: right;
		}
	}
	
</style>