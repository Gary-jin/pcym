<template>
	<view class="fzBox">
		<el-menu
		  :default-active="tabNum"
		  class="el-menu-demo"
		  mode="horizontal"
		  @select="handleSelect"
		  background-color="#F1F6FF"
		  text-color="#969696"
		  active-text-color="#4088FF">
		  <el-menu-item index="1">我的分组</el-menu-item>
			<el-menu-item index="2">批量设置分组</el-menu-item>
		</el-menu>
		<view v-if="tabNum=='1'">
			<view class="fenziBox">
				<el-input v-model="input" ></el-input>
				<el-button @click="addGroup" type="primary">添加新分组</el-button>
			</view>
			<template>
				<el-table
					ref="multipleTable"
					:data="tableData"
					style="width: 100%;padding: 0 20px;"
					max-height="250">
					<el-table-column prop="name" label="分组名称"></el-table-column>
					<el-table-column prop="date2" label="域名数量"></el-table-column>
					<el-table-column
						label="操作"
						width="120">
						<template slot-scope="scope">
							<el-button
								@click.native.prevent="goDetail(scope.$index, tableData[scope.$index])"
								type="text"
								size="small">
								修改
							</el-button>
							<el-button
								@click.native.prevent="goDetail(scope.$index, tableData[scope.$index])"
								type="text"
								size="small">
								删除
							</el-button>
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
						:current-page="4"
						:page-sizes="[100, 200, 300, 400]"
						:page-size="100"
						layout="total, sizes, prev, pager, next, jumper"
						:total="400">
					</el-pagination>
				</view>
			</view>	
		</view>
		<!-- 批量分组 -->
		<view class="d_f" v-if="tabNum=='2'">
			<view class="formBox">
				<el-form ref="form" :rules="rules" :model="form" label-width="80px">
					<el-form-item label="域名" prop="domains">
						<el-input
						  type="textarea"
						  :rows="4"
							@input="changeRow(textVal)"
						  placeholder="每行一个域名,一次最多1000个"
						  v-model="textVal">
						</el-input>
						<text>您已经填写 <text class="numSize">{{numLength}}</text> 个域名，还可添加 <text class="numSize">{{1000-numLength}}</text> 个</text>
					</el-form-item>
					<el-form-item label="分组" prop="group_id">
						<el-select v-model="form.group_id" placeholder="请选择">
							<el-option v-for="(item,index) in tableData" :key="index" :label="item.name" :value="item.id"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="onSubmit">提交</el-button>
						<el-button>返回</el-button>
					</el-form-item>
				</el-form>				
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
				input:'',
				tableData:[],
				textVal:'',
				form: {
					domains: [],
					group_id:''
				},
				rules:{
					group_id: [
						{ required: true, message: '请选择分组', trigger: 'change' }
					],
					domains: [
						{ required: true, message: '请填写域名', trigger: 'blur' }
					]
				},
				numLength: 0
			}
		},
		mounted() {
			this.groupList()
		},
		methods: {
			addGroup() {
				let that = this;
				if(!that.input){
					that.$util.showErrorMsg('请填写分组名称');
					return
				}
				that.$http('member.addGroup', {group_name:that.input}, '').then(res => {
					if (res.code === 1) {
						that.$util.showErrorMsg('添加成功');
						that.groupList()
					}else{
						that.$util.showErrorMsg(res.msg);
					}
				});
			},
			groupList(){
				let that = this;
				that.$http('member.groupList').then(res => {
					if (res.code === 1) {
						this.tableData = res.data
					}
				});
			},
			handleSelect(e){
				this.tabNum = e
			},
			onSubmit() {
				console.log(this.form);
				this.$refs['form'].validate((valid) => {
					if (valid) {
						this.$http('member.domainGroup',{...this.form}).then(res => {
							this.$util.showErrorMsg(res.msg);
						});
					} 
				});
			},
			changeRow(val){
				this.numLength = this.$util.textareaLength(val);
				this.form.domains = this.$util.textareaList(val);
			}
		}
	}
</script>
<style lang="scss" scoped>
	.fzBox{
		background-color: #FFFFFF;
	}
	.fenziBox{
		display: flex;
		padding: 20px;
		.el-input{
			width: 160px;
			margin-right: 10px;
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
			.el-select{
				width: 150px;
				margin-left: 5px;
			}
			.btn{
				margin-left: 20px;
			}
		}
	}
	
	.formBox{
		width: 90%;
		margin-left: 20px;
		padding: 20px 0;
		.el-form{
			width: 550px;
		}
		.numSize{
			color: $text-color-main;
		}
	}
</style>