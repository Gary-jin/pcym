<template>
	<view>
		<!-- 登录提示 -->
		<view class="f_cc topbar">
			<view class="core_f">
				<view class="topbar_welcome">您好，欢迎来到...！</view>
				<a class="topbar_login">
					<navigator class="nav-item" :url="`/pages/user/login/index?callbackUrl=${callbackUrl}`">登录</navigator>
				</a>
				<a class="topbar_login">
					<navigator class="nav-item" :url="`/pages/user/register/index?callbackUrl=${callbackUrl}`">注册</navigator>
				</a>
			</view>
		</view>
		<!-- 头部 -->
		<view class="f_cc header">
			<view class="core_f core f_bc">
				<view class="logo">
					<image src="../../static/image/common/logo.png" mode="widthFix"></image>
				</view>
				<view class="search">
					<!--  -->
					<view class="search_top">
						<view class="lp" @click="tabs(index)" v-for="(item,index) in searchList" :key="index">
							<view :class="index == searchIndex?'name':''" >{{item.name}}</view>	
							<view class="icon" v-if="index == searchIndex">
								<image src="../../static/image/common/scion.png" mode="widthFix"></image>
							</view>
							<view class="icon_no" v-else></view>
						</view>
					</view>
					<!--  -->
					<view class="search_b f_bc">
						<input class="inp_s" type="text" value="" placeholder-class="pl_c" placeholder="请输入域名关键字" />
						<el-button
							class="btn_s"
							@click="cancel"
						  type="primary">
						  批量导出
						</el-button>
					</view>
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapGetters} from 'vuex';

	export default {
		components: {
		},
		props: {
			searchIndex: {
				type: Number,
				default: 0
			},
		},
		data() {
			return {
				searchList:[
					{name:'域名搜索',type:0},
					{name:'whois查询',type:1},
					{name:'被墙查询',type:2},
					{name:'污染查询',type:3},
					{name:'拦截检测',type:4},
				],
				callbackUrl:'/'+(getCurrentPages()[getCurrentPages().length - 1]).route,
			}
		},
		watch: {
		},
		activated() {
		},
		computed: {
			...mapGetters(['hasLogin'])
		},
		mounted() {
			console.log(this.callbackUrl);
		},
		methods: {
			tabs(index){
				// this.searchIndex = index   
				if(index == 0){
					uni.navigateTo({
					    url: `/pages/index`
					});
				}
				if(index == 1){
					uni.navigateTo({
					    url: ``
					});
				}
			},
			goLogin(){
				let callbackUrl = '/pages/index'
				uni.navigateTo({
				    url: `/pages/user/login/index?callbackUrl=${callbackUrl}`
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.topbar{
		background-color: #f9f9f9;
		height: 35px;
		color: #666;
		font-size: 14px;
		.core_f{
			.topbar_login{
				padding: 0 10px;
			}
		}		
	}
	
	.header{
		background-color: #FFFFFF;
		height: 102px;
		color: #999999;
		font-size: 12px;
		.core{
			.logo{
				width: 52px;
				height: 68px;
				image{
					width: 100%;
				}
			}
			.search{
				width: 565px;
				.search_top{
					display: flex;
					align-items: center;
					.lp{
						padding: 0 20px;
						.icon{
							display: flex;
							justify-content: center;
							margin-top: 5px;
							image{
								width: 9px;
								height: 5px;
							}
						}
						.icon_no{
							width: 9px;
							height: 5px;
							margin-top: 5px;
						}
						.name{
							color: $text-color-main;
						}
					}
				}
				
				.search_b{
					width: 100%;
					height: 40px;
					border: 2px solid $text-color-main;
					box-sizing: border-box;
					.inp_s{
						width: 400px;
						padding-left: 10px;
						color: #000;
					}
					.pl_c{
						font-weight: 400;
						color: #C4C4C4;
						font-size: 14px;
					}
					.btn_s{
						width: 142px;
						height: 40px;
						background-color: $text-color-main;
						color: #FFFFFF;
						font-weight: bold;
						border-radius: 0;
					}
				}
			}
		}
	}
</style>
