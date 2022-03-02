<template>
	<view>
		<!--  -->
		<view class="f_cc_ls rmdbg2">
			<title-home style="margin: 50px 0 30px 0;" @change="change" :title="title" :subhead="subhead"></title-home>
			<view class="core_f rmdCardBox">
				<view class="rmdCard" @click="goDetail(item)" v-for="(item,index) in datalist" :key="index">
					<view class="top">{{item.domain}}</view>
					<view class="cen">￥{{item.price}}</view>
					<view class="btn">过期时间 <text>{{item.delete_date}}</text> </view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import titleHome from '@/components/home/title.vue'; 
	import {mapMutations,mapActions,mapState} from 'vuex';
	export default {
		components: {
			titleHome
		},
		data() {
			return {
				title:'热门一口价展示',
				subhead:'一个小标题的注释一个小标题的注释一个小标题的注释',
				datalist:[]
			}
		},
		onLoad(admin) {
			console.log(admin);
		},
		computed: {
			...mapState({
				isLogin: ({ user })  => user.isLogin,
			})
		},
		mounted() {
			this.getList()
		},
		methods: {
			getList() {
				let that = this;
				that.$http('ym.ykjhot', {pagesize:8}, '').then(res => {
					if (res.code === 1) {
						that.datalist = res.data.data
					}
				});
			},
			change(e){
				uni.navigateTo({
				    url: `/pages/nav3/n1_buy/index`
				});
			},
			goDetail(item){
				if(this.isLogin){
					uni.navigateTo({
							url: `/pages/nav3/n1_buy/detailBuySingle?id=${item.id}`
					});				
				} else{
					this.$util.loginPopup()
				}
			},
		}
	}
</script>
<style lang="scss" scoped>
	
	.rmdbg2{
		background-color: $bg-home-1;
		.rmdCardBox{
			flex-wrap: wrap;
			justify-content: space-between;
			margin-bottom: 80px;
			.rmdCard:hover{
				transition: all .5s;
				transform: scale(1.02);
			}
			.rmdCard{
				width: 280px;
				height: 160px;
				background: #FFFFFF;
				box-shadow: 0px 0px 21px 0px rgba(238, 239, 242, 0.85);
				border-radius: 26px;
				overflow: hidden;
				margin-bottom: 27px;
				text-align: center;
				.top{
					height: 61px;
					line-height: 61px;
					background: #F9FBFF;
					font-size: 18px;
					font-weight: 600;
					color: $text-color2;
				}
				.cen{
					color: #FE2626;
					height: 54px;
					line-height: 54px;
					font-size: 18px;
					font-weight: 400;
				}
				.btn{
					font-size: 16px;
					font-weight: 400;
					color: #888888;
					text{
						color: #FF992C;
						margin-left: 5px;
					}
				}
			}
		}
	}
</style>