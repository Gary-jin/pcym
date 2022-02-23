<template>
	<view>
		<qj-header :searchIndex='0'></qj-header>
		<qj-nav :navVal="'home'"></qj-nav>
		<!-- 预定推荐 -->
		<recommend></recommend>
		<!-- 热门竞价域名展示 -->
		<hot-bidding></hot-bidding>
		<!-- 热门网站展示 -->
		<hot-website></hot-website>
		<!-- 热门域名展示 -->
		<hot-ym></hot-ym>
		<!-- 热门商标展示 -->
		<hot-logo></hot-logo>
		<!-- 热门新媒体展示 -->
		<hot-mt></hot-mt>
		
		<qj-footer></qj-footer>
		<!-- <bread-crumb :pages="[{name: '交易订单', linkUrl: '/pages/order/index'}, {name: '订单详情'}]" separator="/"></bread-crumb> -->
	</view>
</template>

<script>
	import recommend from '@/components/home/recommend.vue'; //预定推荐
	import hotBidding from '@/components/home/bidding.vue'; //热门竞价域名展示
	import hotWebsite from '@/components/home/hotWebsite.vue'; //热门网站展示
	import hotYm from '@/components/home/hotYm.vue'; //热门域名展示
	import hotLogo from '@/components/home/hotLogo.vue'; //热门商标展示
	import hotMt from '@/components/home/hotMt.vue'; //热门新媒体展示
	import {mapMutations,mapActions,mapState} from 'vuex';
	export default {
		components: {
			recommend,hotBidding,hotWebsite,hotYm,hotLogo,hotMt
		},
		data() {
			return {
				
			}
		},
		computed: {
			...mapState({
				userInfo: ({ user }) => user.userInfo,
				token: ({ user })  => user.token,
			})
		},
		onLoad() {
			
		},
		onShow() {
			this.getUserInfo()
			// this.getOrderList()
			console.log('token',this.token);
		},
		onHide() {
			
		},
		methods: {
			...mapActions(['getUserInfo']),
			getOrderList() {
				let that = this;
				that.loadStatus = 'loading';
				that.$http('order.index', {
					type: 'all',
					page: 1
				}, '加载中...').then(res => {
					if (res.code === 1) {
						
					}
				});
			},
		}
	}
</script>
<style lang="scss" scoped>
</style>