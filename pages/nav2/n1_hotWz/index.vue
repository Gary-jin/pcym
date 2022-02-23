<template>
	<view>
		<qj-header :searchIndex='0'></qj-header>
		<qj-nav :navVal="'nav2'"></qj-nav>
		<bread-crumb :pages="[{name: '网站交易'},{name: '热门网站'}]" separator=">"></bread-crumb>
		<exp-exp></exp-exp>
		<qj-footer></qj-footer>
	</view>
</template>

<script>
	import expExp from './components/exp.vue'; 
	export default {
		components: {
			expExp
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