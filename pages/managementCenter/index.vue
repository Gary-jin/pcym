<template>
	<view>
		<qj-header></qj-header>
		<qj-nav :navVal="''" :adminVal="'admin'"></qj-nav>
		<bread-crumb :pages="[{name: '管理中心'}]" separator=">"></bread-crumb>
		<view class="f_cc_ls">
			<view class="core f_b">
				<res-left @typeTab="typeTab" :tabNum="typeNum"></res-left>
				<res-right :tabNum="typeNum"></res-right>
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
				typeNum:'',
				option:{}, //所有数据
			}
		},
		onLoad(option) {
			this.typeNum = option.tab
		},
		onShow() {
			
		},
		onHide() {
			
		},
		methods: {
			typeTab(e){
				this.typeNum = e.itemVal
			}
		}
	}
</script>
<style lang="scss" scoped>
</style>