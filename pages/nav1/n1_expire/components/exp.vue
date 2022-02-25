<template>
	<view class="f_cc_ls">
		<filtra @submitForm="submitForm"></filtra>
		<view style="height: 20px;"></view>
		<view class="core expCore">
			<template>
			  <el-table ref="multipleTable" :data="list" style="width: 100%" >
					<el-table-column type="selection" width="55"></el-table-column>
			    <el-table-column prop="domain" label="域名"></el-table-column>
					<el-table-column prop="desc" label="简介"></el-table-column>
					<!-- <el-table-column prop="date" label="查询"></el-table-column> -->
					<el-table-column prop="type" label="类型"></el-table-column>
					<el-table-column prop="length" label="长度" sortable></el-table-column>
					<el-table-column prop="out_link" label="外链" sortable></el-table-column>
					<!-- <el-table-column prop="date" label="PR" sortable></el-table-column> -->
					<el-table-column prop="weight" label="权重" sortable></el-table-column>
					<el-table-column prop="reg_date" label="原注册日期" width="120" sortable></el-table-column>
					<el-table-column prop="delete_date" label="删除日期" sortable></el-table-column>
			    <el-table-column label="操作" width="60">
			      <template slot-scope="scope">
			        <el-button
			          @click.native.prevent="deleteRow(scope.$index, tableData[scope.$index])"
			          type="text"
			          size="small">
			          预订
			        </el-button>
			      </template>
			    </el-table-column>
			  </el-table>
			</template>
		</view>
		<!--  -->
		<view class="core">
			<view class="pagBox">
				<view class="pagL">
					 <el-checkbox @change="toggleSelection(checked)" v-model="checked">全选</el-checkbox>
					 <el-button
					   @click="derive"
						 class="btn"
					   type="primary">
					   批量导出
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
</template>

<script>
	import wzList from '@/common/config/common/wzList.js';
	import filtra from'./filtra.vue'
	export default {
		components: {
			filtra
		},
		props: {
			// navVal: {
			// 	type: String,
			// 	default: 'home'
			// },
		},
		data() {
			return {
				ruleForm: {
					fast: '', //快速搜索
					name: '',
					region: '',
					delivery: false,
					type: [],
				},
				rules: {},
				tableData:[
					{
						date: '2016-05-02',
						name: '王小虎',
						province: '上海',
						city: '普陀区',
						address: '上海市普陀区金沙江路 1518 弄',
						zip: 200333
					}
				],
				checked: false,
				
				list:[],
			}
		},
		mounted() {
			
		},
		methods: {
			submitForm(e) {
				console.log('x',e);
				let that = this;
				that.$http('ym.domainsList', e).then(res => {
					if (res.code === 1) {
						that.list = res.data.data
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
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
			//单个预定
			deleteRow(index,item){
				uni.navigateTo({
					url: `/pages/nav1/n2_ymYd/index?tab=first`
				});
			},
			derive(){
				uni.navigateTo({
					url: `/pages/nav1/n2_ymYd/index?tab=second`
				});
			},
			// 
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
	.footerBtnBox{
		margin-bottom: 48px;
		.footerTit{
			font-size: 14px;
			font-weight: 400;
			color: #FE2626;
			text-align: center;
			padding: 20px 0;
		}
		.footerBtn{
			display: flex;
			justify-content: center;
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
</style>