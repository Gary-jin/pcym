<template>
	<view>
		<qj-header></qj-header>
		<qj-nav :navVal="'nav1'"></qj-nav>
		<bread-crumb :pages="[{name: '过期域名',linkUrl:'/pages/nav1/n1_expire/index'},{name: '域名预定'}]" separator=">"></bread-crumb>
		<view class="f_cc_ls">
			<view class="core f_b">
				<res-left></res-left>
				<res-right :goodsId="goodsId" :tabN="tabVal"></res-right>
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
				tabVal:'',
				goodsId:'',
			}
		},
		onLoad(option) {
			if(option.tab){
				this.tabVal = option.tab
			}
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