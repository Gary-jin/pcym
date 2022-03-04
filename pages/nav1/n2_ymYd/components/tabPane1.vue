<template>
	<view style="padding: 15px;">
		<view class="ymBox f_bc">
			<view class="ymLeft">
				<text class="lTit1">{{goodsDetail.domain}}</text>
				<text class="lTit2">推荐</text>
				<!-- <el-tooltip class="item" effect="dark" content="未拦截" placement="top">
					<i class="iconfontAl icon-weixin"></i>
				</el-tooltip>
				<el-tooltip class="item" effect="dark" content="安全" placement="top">
					<i class="iconfontAl icon-qq"></i>
				</el-tooltip> -->
			</view>
			<view class="ymRight">
				<text class="Rtext">综合查询</text>
				<text class="Rtext">汇率：6.3</text>
				<text class="Rtext">whois</text>
				<text class="Rtext">百度</text>
				<text class="Rtext">天眼查</text>
			</view>
		</view>
		<view class="ymBox1">{{goodsDetail.desc}}</view>
		<view class="ymCen f_bc">
			<view class="card">
				<view class="t1">预订类型</view>
				<view class="t2">{{goodsDetail.type}}</view>
			</view>
			<view class="card">
				<view class="t1">删除时间</view>
				<view class="t2">{{goodsDetail.delete_date}}</view>
			</view>
			<view class="card">
				<view class="t1">剩余时间</view>
				<view class="t2">{{goodsDetail.last_time}}</view>
			</view>
		</view>
		
		<template>
		  <el-table ref="singleTable" :data="tableData" highlight-current-row
		    @current-change="handleCurrentChange" style="width: 100%">
				
		    <el-table-column
		      property="number"
		      label="通道">
					<template slot-scope="scope">
						<span style="margin-left: 10px">{{ scope.row.number }}号通道</span>
					</template>
		    </el-table-column>
				<el-table-column
				  property="begin_price"
				  label="起拍价格">
					<template slot-scope="scope">
						{{scope.row.currency=='USD'? '$'+ scope.row.begin_price + '（约￥'+scope.row.rmb_begin_price+'）': '￥'+scope.row.begin_price}}
					</template>
				</el-table-column>
				
				<el-table-column
				  property="deposit_price"
				  label="预订保证金">
					<template slot-scope="scope">
						{{scope.row.currency=='USD'? '$'+ scope.row.deposit_price + '（约￥'+scope.row.rmb_deposit_price+'）': '￥'+scope.row.deposit_price}}
					</template>
				</el-table-column>
				
				
				
				
				<el-table-column
				  property="suffix"
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
			<el-checkbox v-model="checked"></el-checkbox>
			<view class="agreement">
				我已阅读并同意<text>《域名预订竞价服务协议》</text>
			</view>
		</view>
		<view class="btnBox">
			<el-button @click="reserveDomain(checked)" type="primary">确认预定</el-button>
		</view>
	</view>
</template>

<script>
	export default {
		components: {
		},
		props: {
			goodsId: {
				type: String,
				default: ''
			},
		},
		data() {
			return {
				checked:true,
				tableData: [],
				
				goodsDetail:{},
				domainItem:{}
			}
		},
		mounted() {
			this.getDetail()
			this.getList()
		},
		methods: {
			getDetail(){
				let that = this;
				that.$http('ym.ydDetail', {
					id: that.goodsId
				}).then(res => {
					if (res.code === 1) {
						that.goodsDetail = res.data 
					}
				});
			},
			getList(){
				let that = this;
				that.$http('ym.ydChannel', {
					id: that.goodsId
					// id:65
				}).then(res => {
					if (res.code === 1) {
						that.tableData = res.data 
					}
				});
			},
			toggleSelection(val){
				this.checked = val
			},
			handleCurrentChange(val) {
				console.log(val);
				this.domainItem = val
			},
			reserveDomain(val){
				let that = this;
				if(val){
					if(!this.domainItem.number){
						this.$util.showErrorMsg('请先选择通道');
						return
					}
					that.$http('ym.bookDomain', {
						domain: this.goodsDetail.domain,
						channel: this.domainItem.number
					}).then(res => {
							this.$util.showErrorMsg(res.msg);
					});
				} else{
					this.$util.showErrorMsg('请先同意《域名预订竞价服务协议》');
				}
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