<template>
	<view  style="padding: 15px;">
		<textarea v-model="textVal" class="txta" placeholder="每行一个域名，敲击回车键换行，单次上限500个" placeholder-class="pls"></textarea>
		<view class="cheBox">
			<el-checkbox-group @change="cheEven" v-model="checkList">
				<el-checkbox label="111">过滤QQ拦截</el-checkbox>
				<el-checkbox label="112">过滤微信拦截</el-checkbox>
				<el-checkbox label="113">过滤被墙</el-checkbox>
			</el-checkbox-group>
			<view class="droBox">
				<el-select v-model="value" @change="selChange" placeholder="请选择">
					<el-option
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value">
					</el-option>
				</el-select>
			</view>
			<view class="droBox">
				<el-input v-model="inpVla" placeholder="请输入内容"></el-input>
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
			<el-button type="primary" @click="confirm">确认预定</el-button>
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
				textVal:'',
				 checkList: [],
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
				options: [{
					value: '选项1',
					label: '黄金糕'
				}, {
					value: '选项5',
					label: '北京烤鸭'
				}],
				value: '',
				inpVla:''
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
			},
			confirm(){
				console.log(this.textVal);
			},
			cheEven(e){
				console.log(e);
			},
			selChange(e){
				console.log(e);
			}
		}
	}
</script>
<style lang="scss" scoped>
	.txta{
		width: 837px;
		padding: 10px;
		border-radius: 5px;
		border: 1px #DBDFE7 solid;
		font-size: 16px;
	}
	.cheBox{
		display: flex;
		align-items: center;
		padding: 15px 0;
	}
	.droBox{
		margin-left: 20px;
		.el-dropdown-link{
			width: 110px;
			border: 1px #DBDFE7 solid;
			padding: 5px 15px;
			border-radius: 5px;
		}
		input{
			width: 110px;
			border: 1px #DBDFE7 solid;
			border-radius: 5px;
			padding: 3px 5px;
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