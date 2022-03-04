<template>
	<view class="rightBox resRight">
		<view class="">
			<el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
				<!-- 单个预订 -->
				<el-tab-pane label="预订" name="first">
					<tab-pane1 :goodsId="goodsId"></tab-pane1>
				</el-tab-pane>
				<!-- <el-tab-pane label="批量预订" name="second">
					<tab-pane2></tab-pane2>
				</el-tab-pane> -->
				<el-tab-pane label="预订提醒" name="third">
					<tab-pane3></tab-pane3>
				</el-tab-pane>
				<el-tab-pane label="我的关注" name="fourth">
					<tab-pane4></tab-pane4>
				</el-tab-pane>
			</el-tabs>
		</view>
		<view style="height: 20px;"></view>
		<flow v-if="activeName=='first'||activeName=='second'"></flow>
	</view>
</template>

<script>
	import tabPane1 from './tabPane1.vue';
	import tabPane2 from './tabPane2.vue';
	import tabPane3 from './tabPane3.vue';
	import tabPane4 from './tabPane4.vue';
	import flow from './flow.vue'
	export default {
		components: {
			tabPane1,tabPane2,tabPane3,tabPane4,flow
		},
		props: {
			tabN: {
				type: String,
				default: 'first'
			},
			goodsId: {
				type: String,
				default: ''
			},
		},
		data() {
			return {
				activeName: this.tabN
				
			}
		},
		onLoad() {
		},
		onShow() {
			
		},
		onHide() {
			
		},
		methods: {
		  handleClick(tab, event) {
				this.activeName = tab._props.name
				console.log(tab._props.name);
				console.log(event);
			},
			

		}
	}
</script>
<style lang="scss" scoped>
	.rightBox{
		width: 887px;
	}
	.el-tabs--border-card{
		.el-tabs__content{
			padding: 0;
		}
	}
</style>