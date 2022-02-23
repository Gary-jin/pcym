<template>
	<view>
		<view class="navBox f_cc">
			<view class="core_f coreNav">
				<!--  -->
				<view style="display: flex;">
					<view class="f_f" v-for="(item,index) in navList" :key="index" @click="gopath(item)">
						<el-dropdown @command="gopath" v-if="item.isEmpty == 1" :placement="'bottom-end'">
							<el-button type="primary" :class="navVal==item.val?'colNav':''">
								{{item.title}}
							</el-button>
							<el-dropdown-menu slot="dropdown" v-show="item.list.length !=0">
								<el-dropdown-item :command="itm"  v-for="(itm,ind) in item.list" :key="ind">{{itm.name}}</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
						<view class="n_n" :class="navVal==item.val?'colNav':''" v-if="item.isEmpty == 0">
							{{item.title}}
						</view>
					</view>
				</view>					
				<!--  -->
				<view :class="adminVal=='admin'?'xzAdmin':''" class="adminBox">
					<view class="admin" @click="goAdmin('1-1')">
						<image src="../../static/image/common/ficon5.png" mode="widthFix"></image>
						<text>管理中心</text>
					</view>
					<view class="popBox">
						<view class="popsj"></view>
						<view class="pop">
							<view class="mcList" v-for="(item,index) in managementCenter" :key="index">
								<view class="tit">
									{{item.title}}
								</view>
								<view class="urlT" @click="goAdmin(ite.itemVal)" v-for="(ite,idx) in item.list" :key="idx">
									{{ite.name}}
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import navConfig from '@/common/config/common/nav.config.js';
	export default {
		components: {
			
		},
		props: {
			navVal: {
				type: String,
				default: 'home'
			},
			adminVal: {
				type: String,
				default: ''
			},
		},
		data() {
			return {
				...navConfig
			}
		},
		onLoad(admin) {
			
		},
		onShow() {
			
		},
		onHide() {
			
		},
		methods: {
			gopath(item){
				uni.navigateTo({
				    url: item.linkUrl
				});
			},
			goAdmin(val){
				uni.navigateTo({
				    url: `/pages/managementCenter/index?tab=${val}`
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.el-button{
		height: 50px;
		border-radius: 0;
		border: none;
	}
	.el-button:hover{
		background-color: $color-f1;
	}
	.el-button--primary{
		width: 120px;
		background-color: $text-color-main;
	}
	.navBox{
		background: $text-color-main;
		.coreNav{
			height: 50px;
			justify-content: space-between;
			// align-items: center;
			.f_f{
				display: flex;
			}
			.n_n{
				width: 120px;
				color: #FFFFFF;
				text-align: center;
				line-height: 50px;
			}
			.n_n:hover{
				background-color: $color-f1;
				cursor:pointer
			}
			.itmBox{
				width: 120px;
			}
			.colNav{
				background-color: $color-f1;
				color: #fff;
			}
		}
	}
	.adminBox:hover .popBox{
		display: block;
	}
	.adminBox:hover{
		background-color: $color-f1;
		cursor:pointer
	}
	.xzAdmin{
		background-color: $color-f1;
		cursor:pointer
	}
	.adminBox{
		height: 50px;
		padding: 0 30px;
		position: relative;
		.admin{
			height: 50px;
			display: flex;
			align-items: center;
			font-size: 16px;
			font-weight: 400;
			color: #FFFFFF;
			image{
				width: 17px;
				height: 17px;
				margin-right: 7px;
				
			}
		}
		
		.popBox{
			position: absolute;
			top: 50px;
			right: 0;
			z-index: 999;
			display:none;
			// display:block;
			width: 600px;
			.popsj{
				width: 0;
				height: 0;
				border-left: 5px solid transparent;
				border-right: 5px solid transparent;
				border-bottom: 5px solid #FFFFFF;
				position: relative;
				left: 510px;
				margin-top: 5px;
			}
			.pop{
				background: #FFFFFF;
				padding: 20px;
				display: flex;
				flex-wrap: wrap;
				border-radius: 5px;
				.mcList{
					width: 25%;
					text-align: center;
					margin-bottom: 15px;
					.tit{
						color: #EF9937;
						font-weight: bold;
						font-size: 20px;
						margin-bottom: 10px;
					}
					.urlT{
						padding: 5px 0;
						border-radius: 5px;
					}
					.urlT:hover{
						background-color: $color-f2;
						color: $text-color-main;
					}
				}
			}
		}
	}
	
</style>