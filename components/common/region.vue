<template>
	<view class="regionBox">
		<el-select v-model="form.region1" size="small"  placeholder="请选择">
			<el-option
				v-for="item in options"
				:key="item.value"
				:label="item.label"
				:value="item.value">
			</el-option>
		</el-select>
		<el-select v-model="form.region2" size="small"  placeholder="请选择">
			<el-option
				v-for="item in options"
				:key="item.value"
				:label="item.label"
				:value="item.value">
			</el-option>
		</el-select>
		<el-select v-model="form.region3" size="small"  placeholder="请选择">
			<el-option
				v-for="item in options"
				:key="item.value"
				:label="item.label"
				:value="item.value">
			</el-option>
		</el-select>
	</view>
</template>

<script>

	export default {
		components: {
			
		},
		data() {
			return {
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}, {
					value: '选项3',
					label: '蚵仔煎'
				}, {
					value: '选项4',
					label: '龙须面'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
				form:{
					region1:'中国',
					region2:'北京',
					region3:'北京市'
				}
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
	.regionBox{
		display: flex;
		justify-content: space-between;
		.el-select{
			width: 33%;
		}
	}
</style>