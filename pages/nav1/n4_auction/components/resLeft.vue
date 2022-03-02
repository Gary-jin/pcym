<template>
	<view class="leftBox">
		<!-- title -->
		<view class="titleBox f_bc">
			<view class="titleL">
				<view class="l1"></view>
				<view class="l2">即将结束的竞价域名</view>
			</view>
			<view class="titleR"></view>
		</view>
		<!-- table -->
		<view class="tableBox">
			 <el-table :data="datalist" style="width: 100%" 	ref="multipleTable">
					<el-table-column type="index" ></el-table-column>
					<el-table-column label="域名">
						<template slot-scope="scope">
							<el-button type="text"
								@click.native.prevent="goDetail(scope.$index, datalist[scope.$index])">
								{{ scope.row.domain }}
							</el-button>
						</template>
					</el-table-column>
					<el-table-column prop="price" label="价格"></el-table-column>
			    <!-- <el-table-column prop="delete_date" label="剩余时间"></el-table-column> -->
			  </el-table>
		</view>
		<view style="height: 20px;"></view>
		<!-- title -->
		<view class="titleBox f_bc">
			<view class="titleL">
				<view class="l1"></view>
				<view class="l2">预订竞价交易规则</view>
			</view>
			<view class="titleR"></view>
		</view>
		<!--  -->
		<view class="ruleBox">
			竞价时间：域名竞价开始时间为抢注成功当天9:00，结束时间为第三天晚上21至22点。若结束前5分钟内有新出价，竞价自动延时至5分钟。合作平台域名竞价时间以平台显示为准。
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
				that.$http('ym.bidhot', {pagesize: 8}, '').then(res => {
					if (res.code === 1) {
						that.datalist = res.data.data
					}
				});
			},
			goDetail(index, item){
				uni.navigateTo({
					url: `/pages/nav1/n4_auction/detail?id=${item.id}`
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
	
	.colorR{
		background-color: red;
	}
	
	.ruleBox{
		padding: 20px;
		background-color: #FFFFFF;
	}
</style>