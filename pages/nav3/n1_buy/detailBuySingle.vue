<template>
	<view>
		<qj-header></qj-header>
		<qj-nav :navVal="'nav3'"></qj-nav>
		<bread-crumb :pages="[{name: '一口价',linkUrl: '/pages/nav3/n1_buy/index'},{name: '域名详情'}]" separator=">"></bread-crumb>
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