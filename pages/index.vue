<template>
	<view>
		<qj-header></qj-header>
		<qj-nav :navVal="'home'"></qj-nav>
		<!-- 预定推荐 -->
		<recommend></recommend>
		<!-- 热门竞价域名展示 -->
		<hot-bidding></hot-bidding>
		<!-- 热门网站展示 -->
		<hot-website></hot-website>
		<!-- 热门域名展示 一口价  -->
		<hot-ym></hot-ym>
		<!-- 热门商标展示 -->
		<hot-logo></hot-logo>
		<!-- 热门新媒体展示 -->
		<hot-mt></hot-mt>
		
		<qj-footer></qj-footer>
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
				token: ({ user })  => user,
			})
		},
		onLoad() {
		},
		onShow() {
		},
		onHide() {
			
		},
		methods: {
			...mapActions(['getUserInfo']),
		}
	}
</script>
<style lang="scss" scoped>
</style>