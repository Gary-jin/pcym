<template>
	<view class="leftBox">
		<!-- title -->
		<view class="titleBox f_bc">
			<view class="titleL">
				<view class="l1"></view>
				<view class="l2">一口价推荐</view>
			</view>
			<view class="titleR"></view>
		</view>
		<!-- table -->
		<view class="tableBox">
			 <el-table
			    :data="datalist"
			    style="width: 100%">
			    <el-table-column type="index">
			    </el-table-column>
			    <el-table-column
			      prop="domain"
			      label="域名">
			    </el-table-column>
					
					<el-table-column
						label="操作">
						<template slot-scope="scope">
							<el-button
								@click.native.prevent="deleteRow(scope.$index, datalist[scope.$index])"
								type="text"
								size="small">
								购买
							</el-button>
						</template>
					</el-table-column>
			  </el-table>
		</view>
		<view style="height: 20px;"></view>
		<!-- title -->
		<view class="titleBox f_bc">
			<view class="titleL">
				<view class="l1"></view>
				<view class="l2">一口价购买须知</view>
			</view>
			<view class="titleR"></view>
		</view>
		<!--  -->
		<view class="ruleBox">
			如有多人预订同一个域名(且预订价格相同)，抢注成功后则需要进行竞价，竞价结束价高者得；
			如有多人预订同一个域名(且预订价格相同)，抢注成功后则需要进行竞价，竞价结束价高者得；
		</view>
	</view>
</template>

<script>

	export default {
		components: {
			
		},
		data() {
			return {
				datalist:[]
			}
		},
		mounted() {
			this.getList()
		},
		methods: {
			getList() {
				let that = this;
				that.$http('ym.ykjhot', {pagesize:8}, '').then(res => {
					if (res.code === 1) {
						that.datalist = res.data.data
					}
				});
			},
			deleteRow(index,item){
				uni.navigateTo({
					url: `/pages/nav3/n1_buy/detailBuySingle?id=${item.id}`
				});
			},
		}
	}
</script>
<style lang="scss" scoped>
	.leftBox{
		width: 283px;
		.titleBox{
			height: 50px;
			background-color: $bg-color-main;
			.titleL{
				display: flex;
				.l1{
					width: 4px;
					height: 25px;
					background: linear-gradient(317deg, #4088FF 0%, #FFFFFF 100%);
					margin: 0 12px 0 20px;
				}
				.l2{
					font-size: 18px;
					font-weight: 600;
					color: #FFFFFF;
				}
			}
			.titleR{
				font-size: 14px;
				font-weight: 400;
				color: #FFFFFF;
				margin-right: 20px;
			}
		}
	}
	
	.ruleBox{
		padding: 20px;
		background-color: #FFFFFF;
	}
</style>