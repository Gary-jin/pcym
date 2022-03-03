<template>
	<view class="rightBox ">
		<!-- 我的域名 -->
		<my-ym @changeTal="changeTal" v-if="tabVal=='1'"></my-ym>
		<!-- 域名详情 -->
		<detail @changeTal="changeTal" :parameter="parameter"  v-if="tabVal=='2'"></detail>
		<!-- 续费 -->
		<renew-domain @changeTal="changeTal" :parameter="parameter"  v-if="tabVal=='3'"></renew-domain>
	</view>
</template>

<script>
	// 账户管理
	import myYm from './oneComp/myYm.vue';
	import detail from './oneComp/detail.vue';
	import renewDomain from './oneComp/renewDomain.vue';
	export default {
		components: {
			myYm,detail,renewDomain
		},
		data() {
			return {
				tabVal: '1',
				parameter:{},
			}
		},
		mounted() {
		},
		methods: {
			changeTal(e){
				this.tabVal = e.tabVal
				if(e.item){
					this.parameter = e.item
				}
			}
		}
	}
</script>
<style lang="scss" scoped>
	
</style>