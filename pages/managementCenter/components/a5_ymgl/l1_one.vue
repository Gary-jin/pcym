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
		    style="width: 100%">
				<el-table-column type="selection"></el-table-column>
				<el-table-column prop="domain" label="域名"  ></el-table-column>
				<el-table-column prop="reg_time" label="注册时间" sortable></el-table-column>
				<el-table-column prop="delete_date" label="到期时间" sortable></el-table-column>
				<!-- <el-table-column prop="date4" label="注册商"></el-table-column> -->
				<el-table-column label="分组" >
					<template slot-scope="scope">
					  <span>{{scope.row.group.name ?scope.row.group.name:'未分组'}}</span>
					</template>
				</el-table-column>
				
				<!-- <el-table-column
					prop="group.name"
					label="分组"
					width="100"
					:filters="groupList"
					:filter-method="filterTag"
					filter-placement="bottom-end">
					<template slot-scope="scope">
						<el-tag
							:type="scope.row.group.name === 'sxc' ? 'primary' : 'success'"
							disable-transitions>{{scope.row.group.name}}</el-tag>
					</template>
				</el-table-column> -->
				
				
				
				<!-- <el-table-column prop="date6" label="DNS" ></el-table-column> -->
				<el-table-column  label="状态" >
					<template slot-scope="scope">
					  <span v-if="scope.row.status==1">正常</span>
						<span v-if="scope.row.status==2">正在出售</span>
						<span v-if="scope.row.status==3">转出中</span>
					</template>
				</el-table-column>
		    <el-table-column
		      label="操作">
		      <template slot-scope="scope">
		        <text style="padding: 0 3px;">管理</text>
						<text style="padding: 0 3px;">续费</text>
						<text style="padding: 0 3px;">解析</text>
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
					:current-page="pagin.page"
					:page-sizes="[50, 100, 200]"
					:page-size="pagin.pagesize"
					layout="total, sizes, prev, pager, next, jumper"
					:total="totalNum">
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
				},],
				tableData:[],
				checked: false,
				totalNum: 0,
				pagin: {
					page: 1, //页码
					pagesize: 50 //条数
				},
				
				groupList:[
					{ text: 'sxc', value: 'sxc' }, 
					{ text: '公司', value: '公司' }
				]
			}
		},
		mounted() {
			this.getList()
		},
		methods: {
			getList(){
				let that = this;
				that.$http('member.myDomains', 
					{
						...that.pagin,
						...that.form
					}).then(res => {
					if (res.code === 1) {
						that.tableData = res.data.data
						that.totalNum = res.data.total
					}
				});
			},
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
			filterTag(value, row) {
				console.log(value, row);
				return row.tag === value;
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