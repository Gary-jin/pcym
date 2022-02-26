<template>
	<view class="f_cc_ls">
		<filtra @submitForm="submitForm"></filtra>
		<view style="height: 20px;"></view>
		<view class="core expCore">
			<template>
			  <el-table ref="multipleTable" :data="list" style="width: 100%" >
					<el-table-column type="selection" width="55"></el-table-column>
			    <el-table-column prop="domain" label="域名"></el-table-column>
					<el-table-column prop="desc" label="简介"></el-table-column>
					<el-table-column prop="length" label="长度" sortable></el-table-column>
					
					<!-- <el-table-column prop="date" label="访问量"></el-table-column> -->
					<el-table-column prop="delete_date" label="域名到期时间" sortable></el-table-column>
					<el-table-column prop="price" label="价格" sortable></el-table-column>
					<el-table-column prop="last_time" label="	剩余时间" width="120" ></el-table-column>
					
					<!-- <el-table-column prop="out_link" label="外链" sortable></el-table-column> -->
					<!-- <el-table-column prop="date" label="PR" sortable></el-table-column> -->
					<!-- <el-table-column prop="weight" label="权重" sortable></el-table-column> -->
			    <el-table-column label="操作" width="60">
			      <template slot-scope="scope">
			        <el-button
			          @click.native.prevent="deleteRow(scope.$index, list[scope.$index])"
			          type="text"
			          size="small">
			          购买
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
					   @click="derive"
						 class="btn"
					   type="primary">
					   批量导出
					 </el-button>
				</view>
				<view class="pagR">
					<el-pagination
						@size-change="handleSizeChange"
						@current-change="handleCurrentChange"
						:current-page="pagin.page"
						:page-sizes="[50, 100]"
						:page-size="pagin.pagesize"
						layout="total, sizes, prev, pager, next, jumper"
						:total="totalNum">
					</el-pagination>
				</view>
			</view>			
		</view>
	</view>
</template>

<script>
	import filtra from'./filtra.vue'
	import {mapMutations,mapActions,mapState} from 'vuex';
	export default {
		components: {
			filtra
		},
		props: {
			// navVal: {
			// 	type: String,
			// 	default: 'home'
			// },
		},
		data() {
			return {
				totalNum: 0,
				pagin: {
					page: 1, //页码
					pagesize: 50 //条数
				},
				ruleForm: {},
				checked: false,
				
				list:[],
			}
		},
		computed: {
			...mapState({
				isLogin: ({ user })  => user.isLogin,
			})
		},
		mounted() {
			this.getList()
		},
		methods: {
			submitForm(e) {
				this.ruleForm = e
				this.getList()
			},
			getList(){
				let that = this;
				that.$http('ym.ykjList', {
					...that.pagin,
					...that.ruleForm
				}).then(res => {
					if (res.code === 1) {
						that.list = res.data.data
						that.totalNum = res.data.total
					}
				});
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
			},
			// 单个购买
			deleteRow(index, rows){
				if(this.isLogin){				
					uni.navigateTo({
						url: `/pages/nav3/n1_buy/detailBuySingle`
					});
				} else{
					this.$util.loginPopup()
				}
			},
			// 
			handleSizeChange(val) {
				this.pagin.pagesize = val
				this.getList()
			},
			handleCurrentChange(val) {
				this.pagin.pagesize = val
				this.getList()
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