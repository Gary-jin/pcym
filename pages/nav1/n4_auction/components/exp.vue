<template>
	<view class="f_cc_ls">
		<filtra @submitForm="submitForm"></filtra>
		<view style="height: 20px;"></view>
		<!-- <view class="core">
			<view class="derive f_bc">
				<view class="derLeft">
					<text class="lTit1">搜索结果（1653）</text>
					<text class="lTit2">导出本次查询的域名列表</text>
				</view>
				<view class="derRight">
					点击刷新
				</view>
			</view>			
		</view> -->
		<view class="core expCore">
			<template>
			  <el-table
					ref="multipleTable"
			    :data="list" stripe
			    style="width: 100%">
					<el-table-column label="域名" align="center">
						<template slot-scope="scope">
							<el-button type="text" 
								@click.native.prevent="goDetail(scope.$index, list[scope.$index])">
								{{ scope.row.domain }}
							</el-button>
						</template>
					</el-table-column>
					<!-- <el-table-column prop="date2" label="简介"></el-table-column> -->
					<!-- <el-table-column prop="date3" label="建站历史"></el-table-column> -->
					<el-table-column prop="type" label="类型"></el-table-column>
					<el-table-column prop="length" label="长度" sortable></el-table-column>
					<!-- <el-table-column prop="date6" label="PR" sortable></el-table-column> -->
					<el-table-column prop="price" label="当前价格" sortable></el-table-column>
					<el-table-column prop="delete_date" label="剩余时间"></el-table-column>
			    <el-table-column
			      label="操作"
			      width="120">
			      <template slot-scope="scope">
			        <el-button
			          @click.native.prevent="goDetail(scope.$index, list[scope.$index])"
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
						:current-page="pagin.page"
						:page-sizes="[50, 100, 200]"
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
				that.$http('ym.bidList', {
					...that.pagin,
					...that.ruleForm
				}).then(res => {
					if (res.code === 1) {
						that.list = res.data.data
						that.totalNum = res.data.total
					}
				});
			},
			// 竞价
			goDetail(index, item){
				if(this.isLogin){
					uni.navigateTo({
							url: `/pages/nav1/n4_auction/detail?id=${item.id}`
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
				this.pagin.page = val
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