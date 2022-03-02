<template>
	<view class="fzBox">
			<view class="fenziBox">
				<text>注册商：</text>
				<el-select v-model="record.region"  size="small" placeholder="请选择">
					<el-option label="处理中" value="shanghai"></el-option>
					<el-option label="转出中" value="beijing"></el-option>
				</el-select>
				<text style="margin-left: 10px;">状态：</text>
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
					<el-table-column prop="domains" label="域名"></el-table-column>
					<el-table-column prop="createtime" label="发布时间" sortable></el-table-column>
					<el-table-column prop="updatetime" label="最后更新时间" sortable></el-table-column>
					<el-table-column label="状态">
						<template slot-scope="scope">
							{{statusList[scope.row.status]}}
						</template>
					</el-table-column>
					
					<!-- <el-table-column
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
					</el-table-column> -->
					
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

	export default {
		components: {
			
		},
		props: {
			tabNum: {
				type: Number,
				default: 1
			},
		},
		data() {
			return {
				totalNum: 0,
				pagin: {
					page: 1, //页码
					pagesize: 50 //条数
				},
				tableData:[],
				form: {
					name: '',
					region:''
				},
				options: [{
					value: '选项1',
					label: '黄金糕'
				}],
				record:{//记录
					region:'',
					textarea:''
				},
				numLength: 0,
				typeBtn:'warning',
				checked:false,
				statusList:['待接单','确认中','谈判中','待支付','待交割','已取消','已关闭','已完成']
			}
		},
		mounted() {
			this.getList()
		},
		methods: {
			getList(){
				this.$http('agent.applyAgentLogs',{...this.pagin}).then(res => {
					if(res.code == 1){
						this.tableData = res.data.data
						this.totalNum = res.data.total
					}
				});
			},
			handleSizeChange(val) {
				this.pagin.pagesize = val
				this.getList()
			},
			handleCurrentChange(val) {
				this.pagin.page = val
				this.getList()
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
		align-items: center;
		padding: 20px;
		.el-input{
			width: 160px;
			margin-right: 10px;
		}
		.el-select{
			width: 140px;
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
			.icon-wenhao1{
				position: relative;
				left: 28px;
			}
		}
	}
	
	.formLx{
		color: $text-color-main;
		margin-left: 10px;	
	}
</style>