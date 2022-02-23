<template>
	<view class="ymBox">
		<view class="">
			<view class="ydBox">
				<view class="ydc">
					<text>域名包含：</text>
					<textarea v-model="textVal" class="tare" placeholder-class="pls" placeholder="多个换行或逗号分割 "></textarea>
				</view>
				<view class="ydc">
					<text>域名包含：</text>
					<el-select class="sel" @change="selChange" v-model="value" placeholder="请选择">
						<el-option
							v-for="item in options"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
				</view>
				<view class="ydc">
					<text>域名包含：</text>
					<el-select class="sel" @change="selChange" v-model="value" placeholder="请选择">
						<el-option
							v-for="item in options"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
				</view>
				<view class="ydc">
					<text>域名包含：</text>
					<el-select class="sel" @change="selChange" v-model="value" placeholder="请选择">
						<el-option
							v-for="item in options"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
				</view>
			</view>
			<view class="btnBox">
				<el-button class="btn" type="success">查 找</el-button>
				<el-button class="btn" >重 置</el-button>
			</view>
		</view>		
		
		<view style="height: 20px;"></view>
		
		<view class="">
			<view class="listBox">
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
				<!--  -->
				<view class="pagBox">
					<view class="pagL">
						 <el-checkbox @change="toggleSelection(checked)" v-model="checked">全选</el-checkbox>
						 <!-- <el-select class="sel" @change="selChange" v-model="value" placeholder="请选择">
						 	<el-option
						 		v-for="item in options"
						 		:key="item.value"
						 		:label="item.label"
						 		:value="item.value">
						 	</el-option>
						 </el-select> -->
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
				textVal:'',
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
				value: '',
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
			}
		},
		onLoad() {
		},
		onShow() {
			
		},
		onHide() {
			
		},
		methods: {
			selChange(e){
				console.log(e,this.value);
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
		}
	}
</script>
<style lang="scss" scoped>
	.ymBox{
		background-color: #FFFFFF;
	}
	.ydBox{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px;
		.ydc{
			display: flex;
			align-items: center;
			.tare{
				width: 150px;
				height: 40px;
				border: 1px solid #DCDFE6;
				box-sizing: border-box;
				border-radius: 4px;
				padding: 8px 0 0 10px;
			}
			.sel{
				width: 150px;
			}
			.pls{
				font-size: 14px;
				color: #DCDFE6;
			}
		}
	}
	
	.btnBox{
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 20px 0 40px 0;
		.btn{
			width: 160px;
		}
	}
	
	.listBox{
		padding: 20px;
	}
	
	.pagBox{
		padding: 20px 14px;
		background-color: #FFFFFF;
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