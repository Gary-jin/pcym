<template>
	<view>
		<el-menu
		  :default-active="tabNum"
		  class="el-menu-demo"
		  mode="horizontal"
		  @select="handleSelect"
		  background-color="#F1F6FF"
		  text-color="#969696"
		  active-text-color="#4088FF">
		  <el-menu-item index="1">未读短信</el-menu-item>
			<el-menu-item index="2">已读短信</el-menu-item>
		</el-menu>
		<view class="tabBox">
			<template>
			  <el-table ref="multipleTable" :data="tableData" stripe >
					<el-table-column type="selection" width="55"></el-table-column>
					<el-table-column prop="date1" label="状态" width="100"></el-table-column>
					<el-table-column prop="date2" label="类型" width="100"></el-table-column>
			    <el-table-column label="标题" >
						<template slot-scope="scope">
							<el-button type="text" size="small"
								@click.native.prevent="goDetail(scope.$index, tableData[scope.$index])">
								{{ scope.row.date3 }}
							</el-button>
						</template>
					</el-table-column>
					<el-table-column prop="date4" label="时间" width="150" fixed="right"></el-table-column>
			  </el-table>
			</template>
			<view>
				<view class="pagBox">
					<view class="pagL">
						 <el-checkbox @change="toggleSelection(checked)" v-model="checked">全选</el-checkbox>
						 <el-button
							 @click="derive"
							 class="btn"
							 type="primary">
							 {{tabNum=='1'?'设置已读':'删除已读'}}
						 </el-button>
					</view>
					<view class="pagR">
						<el-pagination
							@size-change="handleSizeChange"
							@current-change="handleCurrentChange"
							:current-page="4"
							:page-sizes="[100, 200, 300, 400]"
							:page-size="100"
							layout="total, sizes, prev, pager, next, jumper"
							:total="400">
						</el-pagination>
					</view>
				</view>			
			</view>
		</view>
	</view>
</template>

<script>

	export default {
		components: {
			
		},
		data() {
			return {
				tabNum:'1',
			 tableData: [{
					date1: '未读',
					date2: '系统消息',
					date3: '您的账号存在登录异常情况，请确认',
					date4: '2016-05-02'
				},{
					date1: '未读',
					date2: '系统消息',
					date3: '您的账号存在登录异常情况，请确认',
					date4: '2016-05-02'
				},{
					date1: '未读',
					date2: '系统消息',
					date3: '您的账号存在登录异常情况，请确认',
					date4: '2016-05-02'
				}],
				checked: false
			}
		},
		onLoad() {
		},
		onShow() {
			
		},
		onHide() {
			
		},
		methods: {
			handleSelect(e){
				console.log(e);
				this.tabNum = e
			},
			toggleSelection(val) {
				if (val) {
					this.tableData.forEach(row => {
						this.$refs.multipleTable.toggleRowSelection(row);
					});
				} else {
					this.$refs.multipleTable.clearSelection();
				}
			},
			derive(){
				// uni.navigateTo({
				// 	url: `/pages/nav1/n2_ymYd/index?tab=second`
				// });
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
	.tabBox{
		margin-top: 20px;
		padding: 40px 20px;
		background: #FFFFFF;
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
</style>