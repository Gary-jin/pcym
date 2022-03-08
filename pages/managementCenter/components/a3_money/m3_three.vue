<template>
	<view>
		<el-menu
		  :default-active="tabNum"
		  class="el-menu-demo"
		  mode="horizontal"
		  @select="handleSelect"
		  background-color="#F1F6FF"
		  text-color="#969696"
		  active-text-color="#4088FF">
		  <el-menu-item index="1">资金明细</el-menu-item>
			<!-- <el-menu-item index="2">冻结明细</el-menu-item>
			<el-menu-item index="3">积分明细</el-menu-item> -->
		</el-menu>
		<!--  -->
		<view class="moneyBox">
			<view class="moneyLeft">
				<view class="m1">{{userInfo.money}}</view>
				<view class="m2">总金额（元）</view>
			</view>
			<view class="moneyCen">
				<view class="cenBox">
					<view class="c1">{{userInfo.money}}</view>
					<view class="c2">可用金额(元)</view>
				</view>
				<view class="cenBox">
					<view class="c1">0</view>
					<view class="c2">已冻结金额(元)</view>
				</view>
				<view class="cenBox">
					<view class="c1">{{userInfo.money}}</view>
					<view class="c2">可提现金额(元)</view>
				</view>
				<view class="cenBox">
					<view class="c1">0</view>
					<view class="c2">不可提现金额(元)</view>
				</view>
				<!-- <view class="cenBox">
					<view class="c1">0</view>
					<view class="c2">消费积分</view>
				</view> -->
			</view>
			<view class="moneyRight">
				<view class="">
					<el-button @click="goPath('3-1')" type="primary">充值</el-button>
				</view>
				<view class="btnUser">
					<el-button @click="goPath('3-4')" type="primary" plain>提现</el-button>
				</view>
			</view>
		</view>
		<!-- 3 -->
		<view class="tabBox">
			<template>
			  <el-table ref="multipleTable" :data="tableData" stripe >
					<el-table-column type="selection" width="55"></el-table-column>
					<el-table-column prop="date1" label="状态" width="100"></el-table-column>
					<el-table-column prop="date2" label="类型" width="100"></el-table-column>
			    <el-table-column label="标题" >
						<template slot-scope="scope">
							<el-button type="text" size="small"
								@click.native.prevent="goDetail(scope.$index, tableData[scope.$index])">
								{{ scope.row.date3 }}
							</el-button>
						</template>
					</el-table-column>
					<el-table-column prop="date4" label="时间" width="150" fixed="right"></el-table-column>
			  </el-table>
			</template>
			<view>
				<view class="pagBox">
					<view class="pagL"></view>
					<view class="pagR">
						<el-pagination
							@size-change="handleSizeChange"
							@current-change="handleCurrentChange"
							:current-page="4"
							:page-sizes="[100, 200, 300, 400]"
							:page-size="100"
							layout="total, sizes, prev, pager, next, jumper"
							:total="400">
						</el-pagination>
					</view>
				</view>			
			</view>
		</view>
		
		
	</view>
</template>

<script>
	import {mapMutations,mapActions,mapState} from 'vuex';
	
	export default {
		components: {
			
		},
		computed: {
			...mapState({
				userInfo: ({ user }) => user.userInfo,
				isLogin: ({ user })  => user.isLogin,
			})
		},
		data() {
			return {
				tabNum:'1',
				tableData: [{
					date1: '未读',
					date2: '系统消息',
					date3: '您的账号存在登录异常情况，请确认',
					date4: '2016-05-02'
				},{
					date1: '未读',
					date2: '系统消息',
					date3: '您的账号存在登录异常情况，请确认',
					date4: '2016-05-02'
				},{
					date1: '未读',
					date2: '系统消息',
					date3: '您的账号存在登录异常情况，请确认',
					date4: '2016-05-02'
				}],
				checked: false
			}
		},
		mounted() {
			console.log("111");
		},
		methods: {
			handleSelect(e){
				console.log(e);
				this.tabNum = e
			},
			goPath(val){
				uni.$emit('upTypeTab',{itemVal:val})
			}
		}
	}
</script>
<style lang="scss" scoped>
	
	
	
	.moneyBox{
		height: 150px;
		background: url(../../../../static/image/admin/moneybg.png) no-repeat 0 0;
		margin-top: 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #FFFFFF;
		.moneyLeft{
			width: 172px;
			text-align: center;
			.m1{
				margin-top: 25px;
				margin-bottom: 15px;
				font-size: 20px;
				font-weight: bold;
				color: #FFFFFF;
			}
			.m2{
				font-size: 16px;
				font-weight: 400;
				color: #FFFFFF;
			}
		}
		.moneyCen{
			width: 725px;
			display: flex;
			.cenBox:last-child{
				border: none;
			}
			.cenBox{
				width: 25%;
				text-align: center;
				border-right: 1px #f2f2f2 solid;
				.c1{
					font-size: 16px;
					font-weight: bold;
					color: #FFA800;
				}
				.c2{
					font-size: 14px;
					font-weight: 400;
					color: #777777;
					margin-top: 16px;
				}
			}
		}
		.moneyRight{
			margin-right: 20px;
			.btnUser{
				margin-top: 16px;
			}
		}
	}
	
	
	.tabBox{
		margin-top: 20px;
		padding: 40px 20px;
		background: #FFFFFF;
	}
	.pagBox{
			padding: 20px 14px;
			background-color: #FFFFFF;
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