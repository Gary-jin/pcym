<template>
	<view class="f_cc_ls">
		<view class="core">
			<view class="expCore">
				
				<view class="rowBox" v-for="(item,index) in list" :key="index">
					<view class="formTit">出售状态：</view>
					<view class="formCheck f_w">
						<view class="cBox" v-for="(ite,idx) in item.xList" :key="idx">
							<view v-if="!item.show">
								<el-checkbox :label="idx+1" name="type">{{ite.name}}</el-checkbox>
							</view>
							<view v-if="item.show">
								<el-checkbox v-if="idx<8" :label="idx+1" name="type">{{ite.name}}</el-checkbox>
							</view>
						</view>
					</view>
					<view class="moreBox">
						<el-button v-if="item.length>8" @click="morech(item,index)" :icon="item.show?'el-icon-arrow-down':'el-icon-arrow-up'" type="primary" size="mini">展开</el-button>
					</view>
				</view>
				
			</view>
		</view>
		<!--  -->
		<view style="height: 20px;"></view>
		<view class="core expCore2">
			<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
				<el-menu-item index="1">产品列表	</el-menu-item>
				<el-menu-item index="2">我的关注</el-menu-item>
			</el-menu>
			<view class="expRight">
				<view class="sortBox">
					<sort :sortlist="topicArr"  @sortTap="sortTap"></sort>
				</view>
				<view class="inpBox">
					<el-input v-model="min" placeholder="0" size="small"></el-input>
					<view style="width: 10px;"></view>
					<el-input v-model="max" placeholder="0" size="small"></el-input>
				</view>
				<el-button type="text" style="padding: 0 20px;">确定</el-button>
			</view>
		</view>
		
		<view style="margin-top: 20px;">
			<mt-mt></mt-mt>
		</view>
		
		<!--  -->
		<view class="core">
			<view class="pagBox">
				<view class="pagL">
					 
				</view>
				<view class="pagR">
					<el-pagination
						@size-change="handleSizeChange"
						@current-change="handleCurrentChange"
						:current-page="4"
						:page-sizes="[12]"
						:page-size="100"
						layout="total, sizes, prev, pager, next, jumper"
						:total="400">
					</el-pagination>
				</view>
			</view>			
		</view>
	</view>
</template>

<script>
	import wzList from '@/common/config/common/wzList.js';
	import sort from '@/components/zwx-sort/zwx-sort';
	import mtMt from '@/components/home/mt.vue';
	export default {
		components: {
			sort,mtMt
		},
		props: {
			// navVal: {
			// 	type: String,
			// 	default: 'home'
			// },
		},
		data() {
			return {
				topicArr:["发布时间", "价格", "百度权重",'搜狗权重','神马权重'],
				activeIndex: '1',
				min:'',
				max:'',
				collect:false, 
				list:wzList.list
			}
		},
		onLoad() {
		},
		onShow() {
			
		},
		onHide() {
			
		},
		methods: {
			morech(item,index){
				console.log(item,index);
				let that = this
				if(item.length>8){
					that.$set(item,'show',!item.show)
				}
				
			},
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			},
			sortTap(index,bol){
				console.log(index,bol);
			},
			goDetail(item){
				uni.navigateTo({
				    url: `/pages/nav2/n1_hotWz/detail`
				});
			},
			//收藏
			collectCh(item){
				this.collect = !this.collect
			},
			
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			}
		}
	}
</script>
<style lang="scss" scoped>
	.expCore{
		background-color: #FFFFFF;
	}
	.el-checkbox{
		width: 100px;
		margin-right: 25px;
	}
	// form
	.rowBox:last-child{
		border: none;
	}
	.rowBox{
		display: flex;
		align-items: center;
		// height: 70px;
		border-bottom: 1px #CED2DA dashed;
		.formTit{
			width: 100px;
			height: 100%;
			color: $text-color1;
			font-weight: bold;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			margin-right: 20px;
		}
		.formCheck{
			width: 1000px;
			padding: 20px 0;
			.cBox{
				width: 125px;
			}
		}
		.moreBox{
			width: 80px;
		}
	}
	
	
	
	.pagBox{
		padding: 20px 14px;
		background-color: #FFFFFF;
		margin-bottom: 40px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.pagL{
			.btn{
				margin-left: 20px;
			}
		}
	}
	
	.expCore2{
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.el-menu-demo{
			width: 300px;
			.el-menu-item{
				width: 150px;
				text-align: center;
			}
		}
		.expRight{
			display: flex;
			align-items: center;
			.sortBox{
				width: 450px;
				padding: 0 20px;
			}
			.inpBox{
				display: flex;
				justify-content: space-between;
				.el-input--small{
					width: 100px;
				}
			}
		}
	}
	
	.listBox{
		padding: 30px;
		
	}
</style>