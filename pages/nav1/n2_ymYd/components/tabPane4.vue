<template>
	<view >
		<view class="p3Bom" style="padding: 15px;">
			<!--  -->
			<view class="expCore">
				<template>
				  <el-table
						@select="selectionRow"
						@select-all="selectionRowAll"
						ref="multipleTable"
				    :data="tableData"
				    style="width: 100%"
				    max-height="250">
						<el-table-column
							type="selection"
							width="55">
						</el-table-column>
				    <el-table-column
				      fixed
				      prop="date"
							sortable
				      label="日期"
				      width="150">
				    </el-table-column>
				    <el-table-column
				      prop="name"
				      label="姓名"
				      width="120">
				    </el-table-column>
				    <el-table-column
				      prop="province"
				      label="省份"
				      width="120">
				    </el-table-column>
				    <el-table-column
				      prop="city"
				      label="市区"
				      width="120">
				    </el-table-column>
				    <el-table-column
				      prop="address"
				      label="地址"
				      width="300">
				    </el-table-column>
				    <el-table-column
				      prop="zip"
				      label="邮编"
				      width="120">
				    </el-table-column>
				    <el-table-column
				      fixed="right"
				      label="操作"
				      width="80">
				      <template slot-scope="scope">
				        <el-button
				          @click.native.prevent="deleteRow(scope.$index, tableData)"
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
			<view class="pagBox">
				<view class="pagL">
					 <el-checkbox @change="toggleSelection(checked)" v-model="checked">全选</el-checkbox>
					 <el-select class="sel" @change="selChange" v-model="value" placeholder="请选择">
					 	<el-option
					 		v-for="item in options"
					 		:key="item.value"
					 		:label="item.label"
					 		:value="item.value">
					 	</el-option>
					 </el-select>
					 <el-button
						 class="btn"
						 @click="cancel"
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
			<!--  -->
		</view>
	</view>
</template>

<script>

	export default {
		components: {
			
		},
		data() {
			return {
				checkList:[],
				input:"",
				value1: '',
				textVal:'',
				tableData:[
					{
						date: '2016-05-03',
						name: '王小',
						province: '上海',
						city: '普陀区',
						address: '上海市普陀区金沙江路 1518 弄',
						zip: 200333
					},
					{
						date: '2016-05-02',
						name: '王小虎',
						province: '上海',
						city: '普陀区',
						address: '上海市普陀区金沙江路 1518 弄',
						zip: 200333
					},
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
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
				value: '',
			}
		},
		onLoad() {
		},
		onShow() {
			
		},
		onHide() {
			
		},
		methods: {
			cheEven(e){
				console.log(e);
			},
			// 单选
			selectionRow(selection, row){
					let selected = selection.length && selection.indexOf(row) !== -1; //为true时选中，为 0 时（false）未选中
					console.log('selected',selected,row);
					// if(selected){
					// 		this.deleteRowIdArray.push(row);
					// }
			},
			// 全选
			selectionRowAll(selection){
				console.log('selection',selection);
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
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},
			cancel(){
				console.log(this.tableData);
			},
			selChange(e){
				console.log(e,this.value);
			}
		}
	}
</script>
<style lang="scss" scoped>
	
	.pagBox{
		padding: 20px 14px;
		background-color: #FFFFFF;
		margin-bottom: 40px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.pagL{
			display: flex;
			justify-content: space-between;
			align-items: center;
			.sel{
				width: 100px;
				margin-left: 10px;
			}
			.btn{
				margin-left: 20px;
			}
		}
	}
</style>