<template>
	<view class="rightBox ">
		<!-- 账户管理 -->
		<user-a v-if="tabNum=='1-1'"></user-a>
		<user-b v-if="tabNum=='1-2'"></user-b>
		<user-c v-if="tabNum=='1-3'"></user-c>
		<user-d v-if="tabNum=='1-4'"></user-d>
		<!-- 我的财务 -->
		<money-a v-if="tabNum=='3-1'"></money-a>
		<money-b v-if="tabNum=='3-2'"></money-b>
		<money-c v-if="tabNum=='3-3'"></money-c>
		<money-d v-if="tabNum=='3-4'"></money-d>
		<!-- 域名抢注 -->
		<ym-a v-if="tabNum=='4-1'"></ym-a>
		<ym-b v-if="tabNum=='4-2'"></ym-b>
		<ym-c v-if="tabNum=='4-3'"></ym-c>
		<!-- 域名管理 -->
		<ymgl-a v-if="tabNum=='5-1'"></ymgl-a>
		<ymgl-b v-if="tabNum=='5-2'"></ymgl-b>
		<ymgl-c v-if="tabNum=='5-3'"></ymgl-c>
		<ymgl-d v-if="tabNum=='5-4'"></ymgl-d>
		<ymgl-e v-if="tabNum=='5-5'"></ymgl-e>
		<ymgl-f v-if="tabNum=='5-6'"></ymgl-f>
		<ymgl-mb v-if="tabNum=='5-7'"></ymgl-mb>
		<domain-gh v-if="tabNum=='5-8'"></domain-gh>
		<dns-change v-if="tabNum=='5-9'"></dns-change>
		<!-- 域名经纪 -->
		<middleman-a v-if="tabNum=='6-1'"></middleman-a>
		<middleman-b v-if="tabNum=='6-2'"></middleman-b>
	</view>
</template>

<script>
	// 账户管理
	import userA from './a1_user/a_1one.vue';
	import userB from './a1_user/a_2two.vue';
	import userC from './a1_user/a_3three.vue';
	import userD from './a1_user/a_4four.vue';
	// 我的财务
	import moneyA from './a3_money/m1_one.vue';
	import moneyB from './a3_money/m2_two.vue';
	import moneyC from './a3_money/m3_three.vue';
	import moneyD from './a3_money/m4_four.vue';
	// 域名抢注
	import ymA from './a4_ym/y1_one.vue';
	import ymB from './a4_ym/y2_two.vue';
	import ymC from './a4_ym/y3_three.vue';
	// 域名管理
	import ymglA from './a5_ymgl/l1_one.vue';
	import ymglB from './a5_ymgl/l2_two.vue';
	import ymglC from './a5_ymgl/l3_three.vue';
	import ymglD from './a5_ymgl/l4_four.vue';
	import ymglE from './a5_ymgl/l5_five.vue';
	import ymglF from './a5_ymgl/l6_six.vue';
	import ymglMb from './a5_ymgl/l7_muban.vue';
	import domainGh from './a5_ymgl/l8_domainGh.vue';
	import dnsChange from './a5_ymgl/l9_dnsChange.vue';
	// 域名经纪
	import middlemanA from './a6_ymMiddleman/ym1_sq.vue';
	import middlemanB from './a6_ymMiddleman/ym2_list.vue';
	
	export default {
		components: {
			userA,userB,userC,userD,
			moneyA,moneyB,moneyC,moneyD,
			ymA,ymB,ymC,
			ymglA,ymglB,ymglC,ymglD,ymglE,ymglF,ymglMb,domainGh,dnsChange,
			middlemanA,middlemanB
		},
		props: {
			tabNum: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				
			}
		},
		updated (){
			
		},
		methods: {
			
		}
	}
</script>
<style lang="scss" scoped>
	.rightBox{
		width: 940px;
		height: 100vh;
		overflow-y: auto;
	}

</style>