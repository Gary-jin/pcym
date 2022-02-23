<template>
	<view>
		<qj-header :searchIndex='0'></qj-header>
		<qj-nav :navVal="'nav5'"></qj-nav>
		<bread-crumb :pages="[{name: '新媒体交易'},{name: '热门新媒体',linkUrl:'/pages/nav5/n1_mt/index'}
			,{name: '新媒体详情'}]" separator=">"></bread-crumb>
			<mt-detail></mt-detail>
		<qj-footer></qj-footer>
	</view>
</template>

<script>
	import mtDetail from './components/detail.vue'; 
	export default {
		components: {
			mtDetail
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