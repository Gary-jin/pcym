<template>
	<view >
		<view class="tabPane3"  style="padding: 15px;">
			<el-alert
				title="您可在下方设置预订提醒，当域名可预订时，我们将发送通知给你。"
				type="warning"
				effect="dark">
			</el-alert>
			<textarea v-model="textVal" class="txta" placeholder="每行一个域名，敲击回车键换行，单次上限500个" placeholder-class="pls"></textarea>
			<view class="selBox">
				<text>提醒方式：</text>
				<el-checkbox-group @change="cheEven" v-model="checkList">
						<el-checkbox label="复选框 A">站内信</el-checkbox>
						<el-checkbox label="复选框 B">邮箱</el-checkbox>
					</el-checkbox-group>
			</view>
			<el-button type="primary" class="tbtn">设 置</el-button>
			<view style="height: 40px;"></view>
		</view>
		<view class="jgBox"></view>
		<view class="tabPane3 p3Bom" style="padding: 15px;">
			<el-alert
				title="您可在下方设置预订提醒，当域名可预订时，我们将发送通知给你。"
				type="warning"
				effect="dark">
			</el-alert>
			<view class="listBox">
				<text class="tit1">域名</text>
				<el-input class="inp" v-model="input" placeholder="请输入内容"></el-input>
				<text class="tit2">添加时间</text>
				<el-date-picker
					class="picBox"
					v-model="value1"
					type="daterange"
					range-separator="至"
					start-placeholder="开始日期"
					end-placeholder="结束日期">
				</el-date-picker>
				<el-button type="primary">主要按钮</el-button>
				<el-button>默认按钮</el-button>
			</view>
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
		}
	}
</script>
<style lang="scss" scoped>
	.txta{
		width: 837px;
		padding: 10px;
		border-radius: 5px;
		border: 1px #DBDFE7 solid;
		font-size: 16px;
		margin-top: 20px;
	}
	.selBox{
		display: flex;
		align-items: center;
		color: #606266;
		padding: 20px 0;
	}
	.tbtn{
		width: 162px;
	}
	.jgBox{
		height: 20px;
		background-color: #F8FAFE;
	}
	.p3Bom{
		.listBox{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 20px 0;
			.tit1{
				padding-right: 19px;
			}
			.inp{
				width: 230PX;
			}
			.tit2{
				padding: 0 19px;
			}
			.picBox{
				width: 230px;
			}
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
</style>
<style lang="scss">
	.el-alert--warning.is-dark{
		background-color: #FFFBF2;
		color: #FAB233;
		border: 1px #FAB233 solid;
	}
	.el-alert__closebtn.el-icon-close{
		color: #FAB233 !important;
	}
	
</style>