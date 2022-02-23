<template>
	<view style="padding: 15px;">
		<view class="ymBox f_bc">
			<view class="ymLeft">
				<text class="lTit1">pengdeng.com.cn</text>
				<text class="lTit2">推荐</text>
				<el-tooltip class="item" effect="dark" content="未拦截" placement="top">
					<i class="iconfontAl icon-weixin"></i>
				</el-tooltip>
				<el-tooltip class="item" effect="dark" content="安全" placement="top">
					<i class="iconfontAl icon-qq"></i>
				</el-tooltip>
			</view>
			<view class="ymRight">
				<text class="Rtext">综合查询</text>
				<text class="Rtext">汇率：6.3</text>
				<text class="Rtext">whois</text>
				<text class="Rtext">百度</text>
				<text class="Rtext">天眼查</text>
			</view>
		</view>
		<view class="ymBox1">pengdeng</view>
		<view class="ymCen f_bc">
			<view class="card">
				<view class="t1">预订类型</view>
				<view class="t2">NJ_PRE</view>
			</view>
			<view class="card">
				<view class="t1">删除时间</view>
				<view class="t2">2022-02-20</view>
			</view>
			<view class="card">
				<view class="t1">剩余时间</view>
				<view class="t2">14时17分</view>
			</view>
		</view>
		
		<template>
		  <el-table ref="singleTable" :data="tableData" highlight-current-row
		    @current-change="handleCurrentChange" style="width: 100%">
				<el-table-column
				  property="name1"
				  label="通道">
				</el-table-column>
		    <el-table-column
		      property="name2"
		      label="说明">
					<template slot-scope="scope">
						<span style="margin-left: 10px">{{ scope.row.name2 }}</span>
						<el-tooltip class="item" effect="dark" content="此通道成功率高" placement="top">
							<i class="iconfontAl icon-wenhao"></i>
						</el-tooltip>
					</template>
		    </el-table-column>
		    <el-table-column
		      property="name3"
		      label="起拍价格">
		    </el-table-column>
		    <el-table-column
		      property="name4"
		      label="预订保证金">
		    </el-table-column>
				<el-table-column
				  property="name5"
				  label="支持后缀">
				</el-table-column>
		  </el-table>
		</template>
		<view class="pp1">
			* 特惠通道相比其他通道有一定的延迟，适合大批量预订，代替手工注册，仅限单人预订。
		</view>
		<view class="pp1">
			* CN高速通道由于包含多个抢注商，建议尽量在22:30之前预订，否则无法保证在所有抢注商处均能成功提交预订。
		</view>
		<view class="agreementBox">
			<el-checkbox @change="toggleSelection(checked)" v-model="agreement"></el-checkbox>
			<view class="agreement">
				我已阅读并同意<text>《域名预订竞价服务协议》</text>
			</view>
		</view>
		<view class="btnBox">
			<el-button type="primary">确认预定</el-button>
		</view>
	</view>
</template>

<script>
	export default {
		components: {
		},
		data() {
			return {
				agreement:true,
				tableData: [{
					name1: '14号通道',
					name2: 'NJ预释放专用',
					name3: '$69（约￥441）',
					name4: '$20（约￥128）',
					name5: '.com'
				}, {
					name1: '14号通道',
					name2: 'NJ预释放专用',
					name3: '$69（约￥441）',
					name4: '$20（约￥128）',
					name5: '.com'
				}, {
					name1: '14号通道',
					name2: 'NJ预释放专用',
					name3: '$69（约￥441）',
					name4: '$20（约￥128）',
					name5: '.com'
				}],
			}
		},
		onLoad() {
		},
		onShow() {
			
		},
		onHide() {
			
		},
		methods: {
			handleCurrentChange(val) {
				console.log(val);
			}
		}
	}
</script>
<style lang="scss" scoped>
	.ymBox{
		.ymLeft{
			.lTit1{
			font-size: 22px;
			font-weight: bold;				
			}
			.lTit2{
				padding: 2px 3px;
				background-color: $text-color-main;
				color: #FFFFFF;
				font-size: 14px;
				border-radius: 4px;
				margin: 0 5px;
			}
			.icon-weixin,.icon-qq{
				color: $text-color-main;
			}
		}
		.ymRight{
			color: #A0A0A2;
			.Rtext{
				padding: 0 10px;
				border-right: 1px #A0A0A2 solid;
			}
			.Rtext:last-child{
				border: none;
			}
		}
	}
	.ymBox1{
		margin-top: 10px;
	}
	.ymCen{
		background-color: $color-f2;
		margin-top: 20px;
		.card{
			width: 33%;
			text-align: center;
			.t1{
				padding: 20px 0 10px 0;
			}
			.t2{
				margin-bottom: 20px;
				color: $text-color2;
				font-size: 20px;
				font-weight: bold;
			}
		}
	}
	.pp1{
		color: red;
		padding: 10px 0 5px 0;
	}
	
	.agreementBox{
		display: flex;
		padding: 10px 0;
		.agreement{
			margin-left: 5px;
			text{
				color: $text-color-main;
			}
		}
	}
	
	.btnBox{
		display: flex;
		justify-content: center;
		margin-bottom: 50px;
	}
</style>