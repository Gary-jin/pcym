<template>
	<view>
		<qj-header></qj-header>
		<qj-nav :navVal="'nav2'"></qj-nav>
		<bread-crumb :pages="[{name: '网站交易'},{name: '热门网站',linkUrl:'/pages/nav2/n1_hotWz/index'},{name: '网站详情'}]" separator=">"></bread-crumb>
		<view class="f_cc_ls">
			<view class="core f_b">
				<res-left></res-left>
				<res-right></res-right>
			</view>			
		</view>
		<guess-like></guess-like>
		<qj-footer></qj-footer>
	</view>
</template>

<script>
	import resLeft from './components/resLeft.vue'; 
	import resRight from './components/resRight.vue'; 
	import guessLike from './components/guessLike.vue'; 
	export default {
		components: {
			resLeft,resRight,guessLike
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