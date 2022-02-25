<template>
	<view>
		<qj-header></qj-header>
		<qj-nav :navVal="'nav4'"></qj-nav>
		<bread-crumb :pages="[{name: '热门商标',linkUrl:'/pages/nav4/n1_brand/index'},{name: '商标详情'}]" separator=">"></bread-crumb>
		<detail-brand></detail-brand>
		<qj-footer></qj-footer>
	</view>
</template>

<script>
	import detailBrand from './components/detailBrand.vue'; 
	export default {
		components: {
			detailBrand
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