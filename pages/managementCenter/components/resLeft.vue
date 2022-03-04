<template>
	<view class="leftBox">
		<el-menu
			:default-active="tabNum"
			class="el-menu-vertical-demo"
			:unique-opened="true">
				<block v-for="(item,index) in managementCenter" :key="index">
					<el-submenu :index="item.val" >
						<template slot="title">
							<i :class="item.icon"></i>
							<span>{{item.title}}</span>
						</template>
						<el-menu-item-group>
							<el-menu-item @click="handleOpen(itm)" :index="itm.itemVal" v-for="(itm,idx) in item.list" :key="idx">
								{{itm.name}}
							</el-menu-item>
						</el-menu-item-group>
					</el-submenu>						
				</block>
		</el-menu>
	</view>
</template>

<script>
	import navConfig from '@/common/config/common/nav.config.js';
	import {mapMutations,mapActions,mapState} from 'vuex';
	export default {
		components: {
			
		},
		props: {
			tabNum: {
				type: String,
				default: ''
			},
		},
		data() {
			return {
				...navConfig
			}
		},
		mounted() {
			let that = this;
			uni.$on('upTypeTab',function(data){
				that.$emit('typeTab',data)
			})
		},
		methods: {
			...mapActions(['setdomainList']),
			handleOpen(item) {
				this.$emit('typeTab',item)
				this.setdomainList({})
			},
		}
	}
</script>
<style lang="scss" scoped>
	.leftBox{
		width: 230px;
		height: 100vh;
		overflow-y: auto;
	}
	.iconfontAl{
		margin-right: 5px;
	}
	.el-submenu__title i{
		color: #000000;
	}
</style>