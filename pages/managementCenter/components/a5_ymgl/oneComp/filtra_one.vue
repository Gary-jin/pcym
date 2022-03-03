<template>
	<view>
		<view class="expCore">
				<el-form :model="ruleForm"  ref="ruleForm" label-width="116px" class="demo-ruleForm">
					<el-form-item label="构成" prop="rule">
						<el-radio-group v-model="ruleForm.rule">
							<el-radio :label="''" @change="ruleForm.rule=''">不限</el-radio>
							<el-radio :label="item.type" v-for="(item,index) in filtraList.fast" :key="index">{{item.name}}</el-radio>
						</el-radio-group>
					</el-form-item>
					<el-form-item label="关键字" prop="">
						<view class="itemCore">
							<el-input @input="changeRow(textVal)" v-model="textVal" type="textarea" class="mr" :rows="1" size="small" placeholder="关键词/域名每个一行"></el-input>
							<el-checkbox-group v-model="ruleForm.key_match">
								<el-checkbox label="1" name="type">开头</el-checkbox>
								<el-checkbox label="2" name="type">结尾</el-checkbox>
							</el-checkbox-group>								
						</view>
					</el-form-item>
					<el-form-item label="后缀" prop="suffix">
						<view class="d_f_c">
							<el-checkbox style="height: 45px;margin-right: 10px;" @change="togType1(checkedSuffix)" v-model="checkedSuffix">不限</el-checkbox>
							<el-checkbox-group @change="checkedSuffix = false" v-model="ruleForm.suffix">
								<el-checkbox :label="item" name="type" v-for="(item,index) in filtraList.suffix" :key="index">{{item}}</el-checkbox>
							</el-checkbox-group>
						</view>
					</el-form-item>
					<view class="f_bc itemBox">
						<el-form-item label="分组" prop="">
							<el-select v-model="ruleForm.group_id" placeholder="请选择">
								<el-option v-for="(item,index) in groupList" :label="item.name" :value="item.id"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="状态" prop="">
							<el-select v-model="ruleForm.status_id" placeholder="请选择">
								<el-option v-for="(item,index) in statusList" :label="item.val" :value="item.id"></el-option>
							</el-select>
						</el-form-item>						
					</view>
					<view class="f_bc itemBox">
						<el-form-item label="模板" prop="">
							<el-select v-model="ruleForm.mould_id" placeholder="请选择">
								<el-option v-for="(item,index) in mouldList" :label="item.mould_name" :value="item.id"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="DNS" prop="">
							<el-input v-model="ruleForm.DNS_key" placeholder="请输入内容"></el-input>
						</el-form-item>
					</view>
					
					<el-form-item label="注册时间" prop="">
						<el-date-picker
							v-model="ruleForm.value1"
							type="daterange"
							value-format="yyyy-M-d"
							range-separator="至"
							start-placeholder="开始日期"
							end-placeholder="结束日期">
						</el-date-picker>
					</el-form-item>
					<el-form-item label="到期时间" prop="">
						<el-date-picker
							v-model="ruleForm.value1"
							type="daterange"
							value-format="yyyy-M-d"
							range-separator="至"
							start-placeholder="开始日期"
							end-placeholder="结束日期">
						</el-date-picker>
					</el-form-item>
					
					
				</el-form>
				
				
				
				
				
				<view class="footerBtnBox">
					<view class="footerTit">
						<!-- 注意：数据只做参考，不保证数据完全准确。 -->
					</view>
					<view class="footerBtn">
						<el-button type="primary" @click="submitForm()">查找</el-button>
						<el-button @click="resetForm()">重置</el-button>						
					</view>
				</view>
			<!--  -->
		</view>
		
	</view>
</template>

<script>
	export default {
		components: {
			
		},
		props: {
			// navVal: {
			// 	type: String,
			// 	default: 'home'
			// },
		},
		data() {
			return {
				ruleForm: {
					rule: '', //快速查询/构成
					suffix:[], //后缀
					key:[], //关键字
					key_match:[], //关键字开头 //关键字结尾
					// besides:'', //排除
					// besides_match:[], //排除开头 //排除结尾
					// min_length:'', //长度区间最低
					// max_length:'' ,//长度区间最高
					// reg_time:'', //注册日期
					// type:[], //预订类型
					// expire_time:'', //删除日期
					
					group_id:'', //分组
					status_id:'',//状态
					mould_id:'', //模板
					DNS_key:'', //Dns
					value1:[]
				},
				textVal:'',
				checkedType:true,
				checkedSuffix:true,
				filtraList:[],
				groupList:[], //分组
				mouldList:[], //模板
				statusList:[  //状态
					{id:1,val:'正常'},{id:2,val:'已过期'},{id:11,val:'即将到期'},
					{id:3,val:'赎回期'},{id:4,val:'等待实名'},
					{id:5,val:'实名审核中'},{id:6,val:'PUSH中'},
					{id:7,val:'已发送转移密码'},{id:8,val:'转出中'},
					{id:9,val:'交易中'},{id:10,val:'实名审核失败'},
					
				]
			}
		},
		mounted() {
			this.getfiltrate()
			this.getgroupList()
			this.getMouldList()
		},
		methods: {
			changeRow(val){
				this.ruleForm.key = this.$util.textareaList(val);
			},
			getfiltrate() {
				let that = this;
				that.$http('ym.filtrate', '').then(res => {
					if (res.code === 1) {
						this.filtraList = res.data
					}
				});
			},
			submitForm(){
				console.log(this.ruleForm);
				this.$emit('submitForm',this.ruleForm)
			},
			resetForm(){
				this.$refs['ruleForm'].resetFields();
				this.textVal = ''
			},
			togType1(val){
				if(val){
					this.ruleForm.suffix = []
				}
			},
			togType2(val){
				if(val){
					this.ruleForm.type = []
				}
			},
			
			getgroupList(){
				let that = this;
				that.$http('member.groupList').then(res => {
					if (res.code === 1) {
						this.groupList = res.data
					}
				});
			},
			getMouldList(){
				let that = this;
				that.$http('member.mouldList').then(res => {
					if (res.code === 1) {
						that.mouldList = res.data.data
					}
				});
			},
		}
	}
</script>
<style lang="scss" scoped>
	.expCore{
		background-color: #FFFFFF;
		padding-bottom: 20px;
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
	
	
	// .itemBox{
	// 	width: 50%;
	// 	display: flex;
	// 	align-items: center;
	// }
	
	.itemBox{
		.el-form-item{
			width: 50%;
		}
	}
		.itemCore{
			display: flex;
			align-items: center;
		}
		.el-textarea{
			width: 180px; 
		}
		.mr{
			margin-right: 10px;
		}
		.el-input,.el-select{
			width: 180px; 
		}
	
	
</style>