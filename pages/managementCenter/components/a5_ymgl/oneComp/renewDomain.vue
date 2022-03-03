<template>
	<view>
		<el-menu
		  :default-active="tabNum"
		  class="el-menu-demo"
		  mode="horizontal"
		  background-color="#F1F6FF"
		  text-color="#969696"
		  active-text-color="#4088FF">
		  <el-menu-item @click="goPath('1')" index="1">我的域名</el-menu-item>
			<el-menu-item index="2">域名续费</el-menu-item>
		</el-menu>
		<!-- list -->
		<template>
		  <el-table
				ref="multipleTable"
		    :data="tableData"
		    style="width: 100%">
				<el-table-column prop="domain" label="域名" align="center" ></el-table-column>
				<el-table-column label="选择年限" align="center">
					<template slot-scope="scope">
						<el-select v-model="years" placeholder="请选择">
							<el-option v-for="(item,index) in optionList" :key="index" :label="item.value" :value="item.val"></el-option>
						</el-select>
					</template>
				</el-table-column>
				<el-table-column prop="price" label="金额" align="center"></el-table-column>
		  </el-table>
		</template>
		<view class="pagBox">
			<view class="pagL"></view>
			<view class="pagR">
				<text>可用余额：￥{{userInfo.money}}  合计：</text>
				<text style="font-weight: bold;padding-right: 10px;color: #007AFF;">￥{{dprice*years}}</text>
				<el-button @click="close" type="primary">去结算</el-button>
			</view>
		</view>
	</view>
</template>

<script>
		import {mapMutations,mapActions,mapState} from 'vuex';
	export default {
		components: {},
		props: {
			parameter: {
				type: Object,
				default: {}
			},
		},
		computed: {
			...mapState({
				userInfo: ({ user }) => user.userInfo
			})
		},
		data() {
			return {
				tabNum:'2',
				tableData:[],
				years: 1,
				dprice:'',
				optionList:[
					{value:'1年',val:1},
					{value:'2年',val:2},
					{value:'3年',val:3},
					{value:'4年',val:4},
					{value:'5年',val:5},
					{value:'6年',val:6},
					{value:'7年',val:7},
					{value:'8年',val:8},
					{value:'9年',val:9},
					{value:'10年',val:10}
				]
			}
		},
		mounted() {
			this.dprice = this.parameter.price
			this.tableData.push(this.parameter)
		},
		methods: {
			close(){
				console.log(this.years);
			},
			goPath(val,item){
				let option ={
					tabVal:val,
					item: item
				}
				this.$emit('changeTal',option)
			}
		}
	}
</script>
<style lang="scss" scoped>
	.selectBox{
		background-color: #FFFFFF;
		display: flex;
		flex-wrap: wrap;
		.selItem{
			width: 33.3%;
			display: flex;
			align-items: center;
			padding: 10px 0;
			border-bottom: 1px #f2f2f2 dashed;
			.selTitle{
				width: 25%;
				text-align: right;
			}
			.selx{
				width: 75%;
				display: flex;
				align-items: center;
				.el-input,.el-input,.el-select,.el-date-picker{
					width: 145px;
				}
				.group{
					margin-left: 5px;
				}
			}
		}
	}
	.selBtn{
		padding: 20px 0;
		display: flex;
		justify-content: center;
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
	
	.xtext{
		color: $text-color-main;
		padding: 0 3px;
		cursor:pointer;
	}
</style>