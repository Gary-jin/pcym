<template>
	<view>
		<qj-header></qj-header>
		<qj-nav :navVal="'nav1'"></qj-nav>
		<bread-crumb :pages="[{name: '域名抢注'},{name: '竞价域名',linkUrl:'/pages/nav1/n4_auction/index'},{name: '竞价详情'}]" separator=">"></bread-crumb>
		<view class="f_cc_ls">
			<view class="core f_b">
				<res-left></res-left>
				<res-right :goodsId="goodsId"></res-right>
			</view>			
		</view>
		
		<qj-footer></qj-footer>
	</view>
</template>

<script>
	import resLeft from './components/resLeft.vue'; 
	import resRight from './components/resRight.vue'; 
	export default {
		components: {
			resLeft,resRight
		},
		data() {
			return {
				goodsId:'',
			}
		},
		onLoad(option) {
			console.log('竞价id',option);
			this.goodsId = option.id 
		},
		onShow() {
			
		},
		onHide() {
			
		},
		methods: {
			
		}
	}
</script>
<style lang="scss" scoped>
</style>