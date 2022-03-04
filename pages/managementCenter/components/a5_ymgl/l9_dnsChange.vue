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
		  <el-menu-item index="1">修改DNS</el-menu-item>
			<el-menu-item index="2">修改DNS记录</el-menu-item>
		</el-menu>
		<view v-if="tabNum=='2'">
			<template>
				<el-table
					ref="multipleTable"
					:data="tableData"
					style="width: 100%;padding: 0 20px;"
					max-height="250">
					<el-table-column prop="domain" label="域名"></el-table-column>
					<el-table-column prop="updatetime" label="修改时间"></el-table-column>
					<el-table-column prop="dns" label="DNS"></el-table-column>
					
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
		<view class="d_f" v-if="tabNum=='1'">
			<view class="formBox">
				<el-form ref="form" :model="form" :rules="rules" label-width="80px">
					<!-- <el-form-item label="域名" prop="domain">
						<el-input
						  type="textarea"
						  :rows="4"
							@input="changeRow(textVal)"
						  placeholder="每行一个域名,一次最多1000个"
						  v-model="textVal">
						</el-input>
						<text>您已经填写 <text class="numSize">{{numLength}}</text> 个域名，还可添加 <text class="numSize">{{1000-numLength}}</text> 个</text>
					</el-form-item> -->
					<el-form-item label="域名" prop="domain">
						<el-input
						  placeholder="请输入域名"
						  v-model="form.domain">
						</el-input>
					</el-form-item>
					<el-form-item label="DNS" prop="dns">
						<el-input
						  type="textarea"
						  :rows="4"
							@input="changeStr(textVal)"
						  placeholder="每行一个,一次最多6个"
						  v-model="textVal">
						</el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="onSubmit">提交</el-button>
					</el-form-item>
				</el-form>				
			</view>
		</view>
	</view>
</template>

<script>
	import {mapMutations,mapActions,mapState} from 'vuex';
	export default {
		computed: {
			...mapState({
				domainList: ({ user }) => user.domainList,
			})
		},
		data() {
			return {
				tabNum:'1',
				input:'',
				tableData:[],
				textVal:'',
				form: {
					domain: '',
					dns:'',
				},
				rules:{
					domain: [
						{ required: true, message: '请输入域名', trigger: 'blur' },
					],
					dns: [
						{ required: true, message: '请输入DNS', trigger: 'blur' },
					]
				},
				numLength: 0
			}
		},
		mounted() {
			this.groupList()
			if(this.domainList.domain){
				this.form.domain = this.domainList.domain
				// this.changeRow(this.domainList.domain)
			}
		},
		methods: {
			groupList(){
				let that = this;
				that.$http('member.updateDnsLog').then(res => {
					if (res.code === 1) {
						this.tableData = res.data
					}
				});
			},
			handleSelect(e){
				this.tabNum = e
			},
			onSubmit() {
				this.$refs['form'].validate((valid) => {
					if (valid) {
						this.$http('member.updateDns',{...this.form}).then(res => {
							this.$util.showErrorMsg(res.msg);
							this.groupList()
						});
					} 
				});
			},
			changeStr(val){
				this.form.dns = this.$util.textareaString(val);
				let num = this.$util.textareaLength(val);
				if(num>5){
					this.$util.showErrorMsg('最多填写五个');
					return
				}
			},
			// changeRow(val){
			// 	this.form.domains = this.$util.textareaList(val);
			// }
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