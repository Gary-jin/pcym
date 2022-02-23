<template>
	<view>
		<qj-header :searchIndex='0'></qj-header>
		<qj-nav :navVal="'nav3'"></qj-nav>
		<bread-crumb :pages="[{name: '一口价',linkUrl: '/pages/nav3/n1_buy/index'},{name: '批量购买'}]" separator=">"></bread-crumb>
		
		<buy-more></buy-more>
		
		<qj-footer></qj-footer>
	</view>
</template>

<script>
	import buyMore from './components/buyMore.vue'; 
	export default {
		components: {
			buyMore
		},
		data() {
			return {
				
			}
		},
		onLoad() {
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