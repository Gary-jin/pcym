<template>
	<view class="selectFil">
		<view class="selectBox">
			<view class="selItem" v-for="(item,index) in 12" :key="index">
				<view class="selTitle">关键字：</view>
				<view class="selx" v-if="index ==0">
					<el-input
					  type="textarea"
					  :rows="1"
					  placeholder="关键词/域名每个一行"
						 size="mini"
					  v-model="form.textarea">
					</el-input>
					<el-checkbox-group class="group" v-model="form.checkList">
						<el-checkbox label="1">开头</el-checkbox>
						<el-checkbox label="2">结尾</el-checkbox>
					</el-checkbox-group>
				</view>
				<view class="selx" v-if="index == 1">
					<el-input
					  placeholder="所有后缀"
					  v-model="form.input"
						 size="mini"
					  :disabled="true">
					</el-input>
				</view>
				<view class="selx" v-if="index == 2">
					<el-input
					  placeholder="所有后缀"
					  v-model="form.input"
						size="mini">
					</el-input>
				</view>
				<view class="selx" v-if="index == 3">
					<el-select size="mini" v-model="form.value" placeholder="请选择">
						<el-option
							v-for="item in options"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
				</view>
				<view class="selx" v-if="index ==4">
					<el-date-picker
						v-model="form.value1"
						size="mini"
						type="daterange"
						range-separator="至"
						start-placeholder="开始日期"
						end-placeholder="结束日期">
					</el-date-picker>
				</view>
			</view>
		</view>
		<view class="selBtn">
			<el-button type="primary" @click="submitForm('ruleForm')">查找</el-button>
			<el-button type="primary" @click="resetForm('ruleForm')" plain>重置</el-button>
		</view>
	</view>
</template>

<script>

	export default {
		components: {
			
		},
		data() {
			return {
				tabNum:'1',
				form:{
					textarea:'',
					checkList:'',
					input:'',
					value:'',
					value1:""
				},
				options: [{
					value: '选项1',
					label: '黄金糕'
				},],
				tableData:[],
				checked: false,
				totalNum: 0,
				pagin: {
					page: 1, //页码
					pagesize: 50 //条数
				},
				
				groupLi:[
					{ text: '未分组', value: null }, 
				]
			}
		},
		mounted() {
			this.getList()
			this.groupList()
		},
		methods: {
			getList(){
				let that = this;
				that.$http('member.myDomains', 
					{
						...that.pagin,
						...that.form
					}).then(res => {
					if (res.code === 1) {
						that.tableData = res.data.data
						that.totalNum = res.data.total
					}
				});
			},
			groupList(){
				let that = this;
				that.$http('member.groupList').then(res => {
					if (res.code === 1) {
						// this.tableData = res.data
						// this.groupLi
						res.data.forEach(item=>{
							let itm = { text: item.name, value: item.name };
							that.groupLi.push(itm)
						})
						console.log(that.groupLi);
					}
				});
			},
			handleSelect(e){
				this.tabNum = e
			},
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						// alert('submit!');
						console.log(valid);
						console.log(this.ruleForm);
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
			toggleSelection(val) {
				if (val) {
					this.tableData.forEach(row => {
						this.$refs.multipleTable.toggleRowSelection(row);
					});
				} else {
					this.$refs.multipleTable.clearSelection();
				}
			},
			filterTag(value, row, column) {
				return row.group.name === value;
			},
		}
	}
</script>
<style lang="scss" scoped>
	.selectFil{
		background-color: #FFFFFF;
	}
	.selectBox{
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
	

</style>