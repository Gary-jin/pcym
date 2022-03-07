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
		  <el-menu-item index="1">域名PUSH</el-menu-item>
			<el-menu-item index="2">发起的PUSH</el-menu-item>
			<el-menu-item index="3">收到的PUSH</el-menu-item>
		</el-menu>
		<view style="padding: 20px;" v-if="tabNum=='1'">
			<view class="d_f" >
				<view class="formBox">
					<el-form ref="form" :model="form" :rules="rules" label-width="70px">
						<el-form-item label="域名" prop="domain">
							<el-input
								type="textarea"
								:rows="4"
								@input="changeRow(form.domain)"
								placeholder="每行一个域名,一次最多1000个"
								v-model="form.domain">
							</el-input>
							<text>您已经填写 <text class="numSize">{{numLength}}</text> 个域名，还可添加 <text class="numSize">{{1000-numLength}}</text> 个</text>
						</el-form-item>
						<el-form-item label="对方ID" >
							<el-input v-model="input" style="width: 280px;" placeholder="请输入正确的会员ID" size="small"></el-input>
						</el-form-item>	
						<el-form-item label="索要金额" >
							<el-input v-model="input" style="width: 280px;" placeholder="请输入金额，如免费请输'0'" size="small"></el-input>
						</el-form-item>
						<el-form-item label="备注" >
							<el-input v-model="input" style="width: 280px;" placeholder="备注信息对方可见，小于30个字" size="small"></el-input>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" @click="onSubmit">发起PUSH</el-button>
						</el-form-item>
					</el-form>				
				</view>
			</view>
		</view>
		
		<view v-else>
			<view class="fenziBox">
				<text>状态：</text>
				<el-select v-model="record.region"  size="small" placeholder="请选择">
					<el-option label="处理中" value="shanghai"></el-option>
					<el-option label="转出中" value="beijing"></el-option>
				</el-select>
				<text style="margin-left: 10px;">域名：</text>
				<el-input
				  type="textarea"
				  :rows="1"
					size="small"
					style="width: 200px;margin-right: 10px;"
				  placeholder="请输入内容"
				  v-model="record.textarea">
				</el-input>
				<el-button type="primary" size="small">搜索</el-button>
				<el-button type="primary" size="small" plain>重置</el-button>
			</view>
			<template>
				<el-table
					ref="multipleTable"
					:data="tableData"
					style="width: 100%;padding: 0 20px;"
					max-height="250">
					<el-table-column prop="date1" label="分组名称"></el-table-column>
					<el-table-column prop="date2" label="域名数量"></el-table-column>
					<el-table-column
						label="操作"
						width="120">
						<template slot-scope="scope">
							<el-button
								@click.native.prevent="goDetail(scope.$index, tableData[scope.$index])"
								type="text"
								size="small">
								取消
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
		<!--  -->
		
		
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
				form: {
					domain: '',
				},
				record:{//记录
					region:'',
					textarea:''
				},
				rules:{
					domain: [
						{ required: true, message: '请输入域名', trigger: 'blur' },
					],
					dns: [
						{ required: true, message: '请输入DNS', trigger: 'blur' },
					]
				},
				numLength: 0,
				typeBtn:'warning',
				checked:false,
				
			}
		},
		mounted() {
			if(this.domainList.domain){
				this.form.domain = this.domainList.domain
				this.changeRow(this.form.domain)
			}
		},
		methods: {
			handleSelect(e){
				this.tabNum = e
			},
			onSubmit() {
				console.log(this.checked);
				console.log('submit!');
			},
			changeRow(val){
				this.numLength = this.$util.textareaLength(val);
			},
		}
	}
</script>
<style lang="scss" scoped>
	.fzBox{
		background-color: #FFFFFF;
	}
	.fenziBox{
		display: flex;
		align-items: center;
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
		margin-left: 50px;
		.el-form{
			width: 550px;
		}
		.numSize{
			color: $text-color-main;
		}
		.d_f_c{
			position: relative;
			left: -16px;
		}
	}
</style>