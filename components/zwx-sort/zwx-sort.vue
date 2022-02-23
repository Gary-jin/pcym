<template>
	<view class="sortContent">
		<view class="sortCondition">
			<view class="conditionList" v-for="(item,index) in topicArr" :key="index">
				<view class="listParent" :data-tabtopic="sortlist[index]" :data-index="index" :data-name="item" @click="topicClick">
					<text :class="item.length>4?'isovertext':''">{{item}}</text>
					<i :class="topicIndex==index && topicStatu ?'iconfont el-icon-thirdshengji' :'iconfont el-icon-thirdshengji-copy'"></i>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'sort',
		props: {
			sortlist: {
				type: Array,
				default: () => []
			},
			panelData: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {
				topicArr: [],
				topicIndex: 0,
				topicStatu: false
			}
		},
		mounted() {
			this.topicArr = JSON.parse(JSON.stringify(this.sortlist))
		},
		methods: {
			topicClick(e) {
				const index = e.currentTarget.dataset.index;
				if (this.topicIndex == index) {
					this.topicStatu = !this.topicStatu
				} else {
					this.topicStatu = true;
					this.topicIndex = index;
				}
				this.$emit('sortTap',index,this.topicStatu)
			}
		}
	}
</script>

<style>
	@import url("./css/iconfont.css");
	@import url("./css/sort.css");
</style>
