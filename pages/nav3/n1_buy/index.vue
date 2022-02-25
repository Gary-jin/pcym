<template>
	<view>
		<qj-header></qj-header>
		<qj-nav :navVal="'nav3'"></qj-nav>
		<bread-crumb :pages="[{name: '淘域名'},{name: '一口价'}]" separator=">"></bread-crumb>
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