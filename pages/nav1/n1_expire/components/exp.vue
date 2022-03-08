<template>
	<view class="f_cc_ls">
		<filtra @submitForm="submitForm"></filtra>
		<view style="height: 20px;"></view>
		<view class="core expCore">
			<template>
			  <el-table ref="multipleTable" :data="list" style="width: 100%" stripe>
					<!-- <el-table-column type="selection" width="55"></el-table-column> -->
			    <el-table-column prop="domain" label="域名" align="center"></el-table-column>
					<el-table-column prop="desc" label="简介"></el-table-column>
					<!-- <el-table-column prop="date" label="查询"></el-table-column> -->
					<el-table-column prop="type" label="类型"></el-table-column>
					<el-table-column prop="length" label="长度" sortable></el-table-column>
					<el-table-column prop="out_link" label="外链" sortable></el-table-column>
					<!-- <el-table-column prop="date" label="PR" sortable></el-table-column> -->
					<el-table-column prop="weight" label="权重" sortable></el-table-column>
					<el-table-column prop="reg_date" label="原注册日期" width="120" sortable></el-table-column>
					<el-table-column prop="delete_date" label="删除日期" sortable></el-table-column>
			    <el-table-column label="操作" width="60">
			      <template slot-scope="scope">
			        <el-button
			          @click.native.prevent="deleteRow(scope.$index, list[scope.$index])"
			          type="text"
			          size="small">
			          预订
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
					 <!-- <el-checkbox @change="toggleSelection(checked)" v-model="checked">全选</el-checkbox>
					 <el-button
					   @click="derive"
						 class="btn"
					   type="primary">
					   批量导出
					 </el-button> -->
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
				that.$http('ym.domainsList', {
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
					this.list.forEach(row => {
						this.$refs.multipleTable.toggleRowSelection(row);
					});
				} else {
					this.$refs.multipleTable.clearSelection();
				}
			},
			//单个预定
			deleteRow(index,item){
				if(this.isLogin){
					uni.navigateTo({
						url: `/pages/nav1/n2_ymYd/index?id=${item.id}&tab=first`
					});					
				} else{
					this.$util.loginPopup()
				}
			},
			derive(){
				uni.navigateTo({
					url: `/pages/nav1/n2_ymYd/index?tab=second`
				});
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
			padding: 20px 0;
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
	
	
	// form
	.rowBox:last-child{
		border: none;
	}
	.rowBox{
		display: flex;
		align-items: center;
		// height: 70px;
		border-bottom: 1px #CED2DA dashed;
		.formTit{
			width: 100px;
			height: 100%;
			color: $text-color1;
			font-weight: bold;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			margin-right: 20px;
		}
		.formCheck{
			width: 1000px;
			padding: 20px 0;
			.cBox{
				width: 125px;
			}
		}
		.moreBox{
			width: 80px;
		}
	}
</style>