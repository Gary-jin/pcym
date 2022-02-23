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
			 <el-table :data="tableData" style="width: 100%" 	ref="multipleTable">
			    <el-table-column prop="url" label="日期"></el-table-column>
					<el-table-column label="当前价格" >
						<template slot-scope="scope">
							<el-button type="text" size="small"
								@click.native.prevent="goDetail(scope.$index, tableData[scope.$index])">
								{{ scope.row.data1 }}
							</el-button>
						</template>
					</el-table-column>
					<el-table-column label="剩余时间" >
						<template slot-scope="scope">
							<el-button type="text" size="small"
								@click.native.prevent="goDetail(scope.$index, tableData[scope.$index])">
								{{ scope.row.data2 }}
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
				tableData:[{
					url:"2935.com",
					data1:'￥12.00',
					data2:'12时43分'
				},{
					url:"2935.com",
					data1:'￥12.00',
					data2:'12时43分'
				},{
					url:"2935.com",
					data1:'￥12.00',
					data2:'12时43分'
				}]
			}
		},
		onLoad() {
		},
		onShow() {
			
		},
		onHide() {
			
		},
		methods: {
			goDetail(index, rows){
				console.log(index,rows);
				uni.navigateTo({
				    url: `/pages/nav1/n4_auction/detail`
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