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
		<view class="core">
			<view class="derive f_bc">
				<view class="derLeft">
					<text class="lTit1">搜索结果（1653）</text>
					<text class="lTit2">导出本次查询的域名列表</text>
				</view>
				<view class="derRight">
					点击刷新
				</view>
			</view>			
		</view>
		<view class="core expCore">
			<template>
			  <el-table
					ref="multipleTable"
			    :data="tableData"
			    style="width: 100%"
			    max-height="250">
					<el-table-column label="域名" width="100" align="center">
						<template slot-scope="scope">
							<el-button type="text" size="small"
								@click.native.prevent="goDetail(scope.$index, tableData[scope.$index])">
								{{ scope.row.date1 }}
							</el-button>
						</template>
					</el-table-column>
					<el-table-column prop="date2" label="简介"></el-table-column>
					<el-table-column prop="date3" label="建站历史"></el-table-column>
					<el-table-column prop="date4" label="类型"></el-table-column>
					<el-table-column prop="date5" label="长度" sortable></el-table-column>
					<el-table-column prop="date6" label="PR" sortable></el-table-column>
					<el-table-column prop="date7" label="当前价格" sortable></el-table-column>
					<el-table-column prop="date8" label="剩余时间"></el-table-column>
			    <el-table-column
			      label="操作"
			      width="120">
			      <template slot-scope="scope">
			        <el-button
			          @click.native.prevent="goDetail(scope.$index, tableData[scope.$index])"
			          type="text"
			          size="small">
			          出价
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
						date1: '95310.cn',
						date2: '	包头顺通',
						date3: '建站历史',
						date4: 'DEL',
						date5: '9',
						date6: '-',
						date7: '￥124',
						date8: '7时49分'
					},
					{
						date1: '95310.cn',
						date2: '	包头顺通',
						date3: '建站历史',
						date4: 'DEL',
						date5: '2',
						date6: '-',
						date7: '￥126',
						date8: '7时40分'
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
			// 竞价
			goDetail(index, rows){
				console.log(index,rows);
				uni.navigateTo({
				    url: `/pages/nav1/n4_auction/detail`
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
	
	.derive{
		padding: 10px 20px;
		font-size: 14px;
		font-weight: 400;
		.lTit1{
			color: #9F9F9F;
		}
		.lTit2,.derRight{
			color: $text-color-main;
		}
	}
</style>