<template>
	<view>
		<qj-header></qj-header>
		<qj-nav :navVal="'nav1'"></qj-nav>
		<bread-crumb :pages="[{name: '域名抢注'},{name: '过期域名'}]" separator=">"></bread-crumb>
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