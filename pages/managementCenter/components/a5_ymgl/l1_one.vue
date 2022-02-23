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
		  <el-menu-item index="1">我的域名</el-menu-item>
			<el-menu-item index="2">即将到期</el-menu-item>
			<el-menu-item index="3">已经到期</el-menu-item>
		</el-menu>
		<view class="selectBox">
			<view class="selItem" v-for="(item,index) in 12" :key="index">
				<view class="selTitle">关键字：</view>
				<view class="selx" v-if="index ==0">
					<el-input
					  type="textarea"
					  :rows="1"
					  placeholder="关键词/域名每个一行"
						 size="mini"
					  v-model="form.textarea">
					</el-input>
					<el-checkbox-group class="group" v-model="form.checkList">
						<el-checkbox label="1">开头</el-checkbox>
						<el-checkbox label="2">结尾</el-checkbox>
					</el-checkbox-group>
				</view>
				<view class="selx" v-if="index == 1">
					<el-input
					  placeholder="所有后缀"
					  v-model="form.input"
						 size="mini"
					  :disabled="true">
					</el-input>
				</view>
				<view class="selx" v-if="index == 2">
					<el-input
					  placeholder="所有后缀"
					  v-model="form.input"
						size="mini">
					</el-input>
				</view>
				<view class="selx" v-if="index == 3">
					<el-select size="mini" v-model="form.value" placeholder="请选择">
						<el-option
							v-for="item in options"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
				</view>
				<view class="selx" v-if="index ==4">
					<el-date-picker
						v-model="form.value1"
						size="mini"
						type="daterange"
						range-separator="至"
						start-placeholder="开始日期"
						end-placeholder="结束日期">
					</el-date-picker>
				</view>
			</view>
		</view>
		<view class="selBtn">
			<el-button type="primary" @click="submitForm('ruleForm')">查找</el-button>
			<el-button type="primary" @click="resetForm('ruleForm')" plain>重置</el-button>
		</view>
		<!-- list -->
		<template>
		  <el-table
				ref="multipleTable"
		    :data="tableData"
		    style="width: 100%"
		    max-height="250">
				<el-table-column type="selection"></el-table-column>
				<el-table-column label="域名"  align="center">
					<template slot-scope="scope">
						<el-button type="text" size="small"
							@click.native.prevent="goDetail(scope.$index, tableData[scope.$index])">
							{{ scope.row.date1 }}
						</el-button>
					</template>
				</el-table-column>
				<el-table-column prop="date2" label="注册时间" sortable></el-table-column>
				<el-table-column prop="date3" label="到期时间" sortable></el-table-column>
				<el-table-column prop="date4" label="注册商"></el-table-column>
				<el-table-column prop="date5" label="分组" ></el-table-column>
				<el-table-column prop="date6" label="DNS" ></el-table-column>
				<el-table-column prop="date7" label="状态" ></el-table-column>
		    <el-table-column
		      label="操作"
		      width="120">
		      <template slot-scope="scope">
		        <el-button
		          @click.native.prevent="goDetail(scope.$index, tableData[scope.$index])"
		          type="text"
		          size="small">
		          xxx
		        </el-button>
		      </template>
		    </el-table-column>
				
		  </el-table>
		</template>
		<view class="pagBox">
			<view class="pagL">
				<el-checkbox @change="toggleSelection(checked)" v-model="checked">全选</el-checkbox>
				<el-select size="mini" v-model="form.value" placeholder="请选择">
					<el-option
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value">
					</el-option>
				</el-select>
				<el-button
				  @click="derive"
					size="mini"
					 class="btn"
				  type="primary">
				  批量操作
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
</template>

<script>

	export default {
		components: {
			
		},
		data() {
			return {
				tabNum:'1',
				form:{
					textarea:'',
					checkList:'',
					input:'',
					value:'',
					value1:""
				},
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项2',
					label: '双皮奶'
				}],
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
			handleSelect(e){
				this.tabNum = e
			},
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
		}
	}
</script>
<style lang="scss" scoped>
	.selectBox{
		background-color: #FFFFFF;
		display: flex;
		flex-wrap: wrap;
		.selItem{
			width: 33.3%;
			display: flex;
			align-items: center;
			padding: 10px 0;
			border-bottom: 1px #f2f2f2 dashed;
			.selTitle{
				width: 25%;
				text-align: right;
			}
			.selx{
				width: 75%;
				display: flex;
				align-items: center;
				.el-input,.el-input,.el-select,.el-date-picker{
					width: 145px;
				}
				.group{
					margin-left: 5px;
				}
			}
		}
	}
	.selBtn{
		padding: 20px 0;
		display: flex;
		justify-content: center;
	}
	
	.pagBox{
		padding: 20px 14px;
		background-color: #FFFFFF;
		margin-bottom: 40px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.pagL{
			.el-select{
				width: 150px;
				margin-left: 5px;
			}
			.btn{
				margin-left: 20px;
			}
		}
	}
</style>