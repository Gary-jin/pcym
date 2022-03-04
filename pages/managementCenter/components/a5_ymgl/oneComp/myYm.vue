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
		</el-menu>
		<filtra-one @submitForm="submitForm"></filtra-one>
		<!-- list -->
		<template>
		  <el-table
				ref="multipleTable"
		    :data="tableData"
		    style="width: 100%">
				<!-- <el-table-column type="selection"></el-table-column> -->
				<el-table-column prop="domain" label="域名"  ></el-table-column>
				<el-table-column prop="reg_time" label="注册时间" sortable></el-table-column>
				<el-table-column prop="delete_date" label="到期时间" sortable></el-table-column>
				
				<el-table-column
					prop="group.name"
					label="分组"
					width="100"
					:filters="groupLi"
					:filter-method="filterTag"
					filter-placement="bottom-end">
					<template slot-scope="scope">
							{{scope.row.group.name ?scope.row.group.name:'未分组'}}
					</template>
				</el-table-column>
				
				
				
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
		        <text class="xtext" @click="goPath('2',scope.row)">管理</text>
						<text class="xtext" @click="goPath('3',scope.row)">续费</text>
						<text class="xtext" @click="changeDns(scope.row)">修改</text>
		      </template>
		    </el-table-column>
				
		  </el-table>
		</template>
		<view class="pagBox">
			<view class="pagL">
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
	import filtraOne from'./filtra_one.vue';
	import {mapMutations,mapActions,mapState} from 'vuex';
	export default {
		components: {
			filtraOne
		},
		data() {
			return {
				tabNum:'1',
				form:{},
				options: [],
				tableData:[],
				checked: false,
				totalNum: 0,
				pagin: {
					page: 1, //页码
					pagesize: 50 //条数
				},
				
				groupLi:[
					{ text: '未分组', value: null }, 
				]
			}
		},
		mounted() {
			this.getList()
			this.groupList()
		},
		methods: {
			...mapActions(['setdomainList']),
			submitForm(e) {
				this.form = e
				this.getList()
			},
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
			groupList(){
				let that = this;
				that.$http('member.groupList').then(res => {
					if (res.code === 1) {
						res.data.forEach(item=>{
							let itm = { text: item.name, value: item.name };
							that.groupLi.push(itm)
						})
					}
				});
			},
			handleSelect(e){
				this.tabNum = e
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
			filterTag(value, row, column) {
				return row.group.name === value;
			},
			goPath(val,item){
				let option ={
					tabVal:val,
					item: item
				}
				this.$emit('changeTal',option)
			},
			changeDns(item){
				this.setdomainList(item)
				uni.$emit('upTypeTab',{itemVal:'5-9'})
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
	
	.xtext{
		color: $text-color-main;
		padding: 0 3px;
		cursor:pointer;
	}
</style>