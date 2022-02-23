<template>
	<view class="f_cc_ls">
		<view class="core expCore">
			<!--  -->
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="116px" class="demo-ruleForm">
					<el-form-item label="快速搜索" prop="resource">
					  <el-radio-group v-model="ruleForm.resource">
					    <el-radio label="buxain"></el-radio>
					    <el-radio label="ww"></el-radio>
					  </el-radio-group>
					</el-form-item>
				  <el-form-item label="活动区域" prop="region">
				    <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
				      <el-option label="区域一" value="shanghai"></el-option>
				      <el-option label="区域二" value="beijing"></el-option>
				    </el-select>
				  </el-form-item>
				  <el-form-item label="即时配送" prop="delivery">
				    <el-switch v-model="ruleForm.delivery"></el-switch>
				  </el-form-item>
				  <el-form-item label="活动性质" prop="type">
				    <el-checkbox-group v-model="ruleForm.type">
				      <el-checkbox label="1" name="type"></el-checkbox>
				      <el-checkbox label="2" name="type"></el-checkbox>
				      <el-checkbox label="3" name="type"></el-checkbox>
				      <el-checkbox label="4" name="type"></el-checkbox>
				    </el-checkbox-group>
				  </el-form-item>
				</el-form>
				<view class="footerBtnBox">
					<view class="footerTit">
						注意：数据只做参考，不保证数据完全准确。
					</view>
					<view class="footerBtn">
						<el-button type="primary" @click="submitForm('ruleForm')">查找</el-button>
						<el-button @click="resetForm('ruleForm')">重置</el-button>						
					</view>
				</view>
			<!--  -->
		</view>
		<view style="height: 20px;"></view>
		<view class="core expCore">
			<template>
			  <el-table
					ref="multipleTable"
			    :data="tableData"
			    style="width: 100%"
			    max-height="250">
					<el-table-column
						type="selection"
						width="55">
					</el-table-column>
					
					 <el-table-column
							label="域名">
							<template slot-scope="scope">
								<el-button
									@click.native.prevent="goDetail(scope.$index, tableData[scope.$index])"
									type="text"
									size="small">
									{{ scope.row.name }}
								</el-button>
							</template>
						</el-table-column>
					
			    <el-table-column
			      prop="name"
			      label="姓名">
			    </el-table-column>
			    <el-table-column
			      prop="province"
			      label="省份">
			    </el-table-column>
			    <el-table-column
			      prop="city"
			      label="市区">
			    </el-table-column>
			    <el-table-column
			      prop="address"
			      label="地址"
			      width="300">
			    </el-table-column>
			    <el-table-column
			      prop="zip"
			      label="邮编">
			    </el-table-column>
			    <el-table-column
			      label="操作">
			      <template slot-scope="scope">
			        <el-button
			          @click.native.prevent="goDetail(scope.$index, tableData[scope.$index])"
			          type="text"
			          size="small">
			          一口价
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
					   @click="derive(checked)"
						 class="btn"
					   type="primary">
					   批量购买
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

	export default {
		components: {
			
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
					name: '',
					region: '',
					delivery: false,
					type: [],
					resource: ''
				},
				rules: {
				},
				tableData:[
					{
						date: '2016-05-03',
						name: '.com1',
						province: '上海',
						city: '普陀区',
						address: '上海市普陀区金沙江路 1518 弄',
						zip: 200333
					},
					{
						date: '2016-05-02',
						name: '.com2',
						province: '上海',
						city: '普陀区',
						address: '上海市普陀区金沙江路 1518 弄',
						zip: 200333
					},
					{
						date: '2016-05-02',
						name: '.com3',
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
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						// alert('submit!');
						console.log(valid);
						console.log(this.ruleForm);
					} else {
						console.log('error submit!!');
						return false;
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
			//批量购买
			derive(val){
				console.log(val);
				//val全选
				uni.navigateTo({
				    url: `/pages/nav3/n1_buy/detailBuyMore`
				});
				// if(val){
					
				// }
			},
			// 单个购买
			goDetail(index, rows){
				console.log(index,rows);
				uni.navigateTo({
				    url: `/pages/nav3/n1_buy/detailBuySingle`
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
			padding-bottom: 20px;
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
</style>