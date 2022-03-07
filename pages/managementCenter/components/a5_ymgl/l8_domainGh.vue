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
			<el-menu-item index="1">域名过户</el-menu-item>
		  <el-menu-item index="2">域名过户记录</el-menu-item>
		</el-menu>
		<view v-if="tabNum=='2'">
			<template>
				<el-table
					ref="multipleTable"
					:data="tableData"
					style="width: 100%;padding: 0 20px;">
					
					<el-table-column
						label="域名">
						<template slot-scope="scope">
							<view class="elip" @click="popShow(tableData[scope.$index])">
								{{scope.row.domain}}
							</view>
						</template>
					</el-table-column>
					<el-table-column prop="updatetime" label="提交时间"></el-table-column>
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
		<!-- 批量分组 -->
		<view class="d_f" v-if="tabNum=='1'">
			<view class="formBox">
				<el-form ref="form" :rules="rules" :model="form" label-width="130px">
					<el-form-item label="域名" prop="domain">
						<el-input
						  type="textarea"
						  :rows="4"
							@input="changeRow(textVal)"
						  placeholder="每行一个域名,一次最多1000个"
						  v-model="textVal">
						</el-input>
						<text>您已经填写 <text class="numSize">{{numLength}}</text> 个域名，还可添加 <text class="numSize">{{1000-numLength}}</text> 个</text>
					</el-form-item>
					<el-form-item label="请选择模板" prop="mould_id">
						<el-select v-model="form.mould_id" placeholder="请选择">
							<el-option v-for="(item,index) in mouldList" :key="index" :label="item.mould_name" :value="item.id"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="onSubmit">提交</el-button>
						<el-button>返回</el-button>
					</el-form-item>
				</el-form>				
			</view>
		</view>
		
		<qj-dialog :hidden="hidden" :title="'共('+popShowList.length+')条'" :hideFooter="false" 
			  :showConfrim="false" :width="400" :height="150"
		 @close="closeDialog" @cancel="closeDialog" >
			<view class="popupBox">
				<scroll-view class="scroll-Y" scroll-y="true">
					<view class="item" v-for="(item,index) in popShowList" :key="index">
						 <text>{{index+1}}</text> {{item}}
					</view>
				</scroll-view>
			</view>
		</qj-dialog>
		
		
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
				mouldList:[],
				tableData:[],
				textVal:'',
				form: {
					domain: [],
					mould_id:''
				},
				rules:{
					mould_id: [
						{ required: true, message: '请选择模板', trigger: 'change' }
					],
					domain: [
						{ required: true, message: '请填写域名', trigger: 'blur' }
					]
				},
				numLength: 0,
				totalNum: 0,
				pagin: {
					page: 1, //页码
					pagesize: 50 //条数
				},
				hidden: false,
				popShowList:[]
			}
		},
		mounted() {
			this.getMouldList()
			this.getList()
		},
		methods: {
			getList(){
				let that = this;
				that.$http('member.updateContactLog', 
					{
						...that.pagin
					}).then(res => {
					if (res.code === 1) {
						that.tableData = res.data.data
						that.totalNum = res.data.total
					}
				});
			},
			getMouldList(){
					let that = this;
					that.$http('member.mouldList').then(res => {
						if (res.code === 1) {
							that.mouldList = res.data.data
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
						this.$http('member.updateContact',{...this.form}).then(res => {
							this.$util.showErrorMsg(res.msg);
							this.getList()
						});
					} 
				});
			},
			changeRow(val){
				this.numLength = this.$util.textareaLength(val);
				this.form.domain = this.$util.textareaList(val);
			},
			handleSizeChange(val) {
				this.pagin.pagesize = val
				this.getList()
			},
			handleCurrentChange(val) {
				this.pagin.page = val
				this.getList()
			},
			closeDialog(){
				this.hidden = false
			},
			popShow(item){
				console.log(item);
				this.popShowList = item.domains
				this.hidden = true
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
	.popupBox{
		width: 100%;
		height: 100%;
		.scroll-Y{
			height: 100%;
			padding:0 20px;
			.item{
				padding: 5px 0;
				text{
					padding: 0 15px;
					color: $text-color-main;
				}
			}
		}
	}
	.elip{
		color: $text-color-main;
		cursor:pointer;
	}
</style>