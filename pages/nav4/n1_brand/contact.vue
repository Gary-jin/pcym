<template>
	<view>
		<qj-header :searchIndex='0'></qj-header>
		<qj-nav :navVal="'nav4'"></qj-nav>
		<bread-crumb :pages="[{name: '商标交易',linkUrl:'/pages/nav4/n1_brand/index'},
			{name: '热门商标',linkUrl:'/pages/nav4/n1_brand/detailBrand'},{name: '联系经济人'}]" separator=">"></bread-crumb>
		
		<view class="f_cc_ls">
			<view class="core">
				<contant-card></contant-card>
			</view>
		</view>
		
		
		
		<qj-footer></qj-footer>
	</view>
</template>

<script>
	import contantCard from '@/components/common/contantCard.vue';  
	export default {
		components: {
			contantCard
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