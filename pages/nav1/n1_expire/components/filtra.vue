<template>
	<view>
		<view class="core expCore">
			
				<el-form :model="ruleForm"  ref="ruleForm" label-width="116px" class="demo-ruleForm">
					<el-form-item label="快速搜索" prop="rule">
						<el-radio-group v-model="ruleForm.rule">
							<el-radio :label="''" @change="ruleForm.rule=''">不限</el-radio>
							<el-radio :label="item.type" v-for="(item,index) in filtraList.fast" :key="index">{{item.name}}</el-radio>
						</el-radio-group>
					</el-form-item>
					<view class="f_bc itemBox">
						<el-form-item label="关键字" prop="">
							<view class="itemCore">
								<el-input @input="changeRow(textVal)" v-model="textVal" type="textarea" class="mr" :rows="1" size="small" placeholder="关键词/域名每个一行"></el-input>
								<el-checkbox-group v-model="ruleForm.key_match">
									<el-checkbox label="1" name="type">开头</el-checkbox>
									<el-checkbox label="2" name="type">结尾</el-checkbox>
								</el-checkbox-group>								
							</view>
						</el-form-item>
						<el-form-item label="排除" prop="">
							<view class="itemCore">
								<el-input v-model="ruleForm.besides" class="mr"  size="small" placeholder=""></el-input>
								<el-checkbox-group v-model="ruleForm.besides_match">
									<el-checkbox label="1" name="type">开头</el-checkbox>
									<el-checkbox label="2" name="type">结尾</el-checkbox>
								</el-checkbox-group>								
							</view>
						</el-form-item>
					</view>
					<el-form-item label="后缀" prop="suffix">
						<view class="d_f_c">
							<el-checkbox style="height: 45px;margin-right: 10px;" @change="togType1(checkedSuffix)" v-model="checkedSuffix">不限</el-checkbox>
							<el-checkbox-group @change="checkedSuffix = false" v-model="ruleForm.suffix">
								<el-checkbox :label="index" name="type" v-for="(item,index) in filtraList.suffix" :key="index">{{item}}</el-checkbox>
							</el-checkbox-group>
						</view>
					</el-form-item>
					<view class="f_bc itemBox">
						<el-form-item label="长度" prop="">
							<view class="itemCore">
								<el-input v-model="ruleForm.min_length" type="number" min="0" size="small" placeholder=""></el-input>
								<i class="el-icon-minus"></i>
								<el-input v-model="ruleForm.max_length" type="number" min="0" size="small" placeholder=""></el-input>
							</view>
						</el-form-item>
						<el-form-item label="注册日期" prop="">
							<el-select v-model="ruleForm.reg_time" placeholder="不限" size="small">
								<el-option :label="''" :value="''">不限</el-option>
								<el-option
									v-for="(item,index) in filtraList.reg_time" :key="index"
									:label="item+'年之前'" :value="item"></el-option>
							</el-select>
						</el-form-item>						
					</view>
					
					<el-form-item label="预订类型" prop="type">
						<view class="d_f_c">
							<el-checkbox style="height: 45px;margin-right: 10px;" @change="togType2(checkedType)" v-model="checkedType">不限</el-checkbox>
							<el-checkbox-group @change="checkedType = false" v-model="ruleForm.type">
								<el-checkbox :label="index" name="type" v-for="(item,index) in filtraList.type" :key="index">{{item}}</el-checkbox>
							</el-checkbox-group>							
						</view>
					</el-form-item>
					<el-form-item label="删除日期" prop="expire_time">
						<el-radio-group v-model="ruleForm.expire_time">
							<el-radio :label="''" @change="ruleForm.expire_time=''">不限</el-radio>
							<el-radio :label="index" v-for="(item,index) in filtraList.expire_time" :key="index">{{item}}</el-radio>
						</el-radio-group>
					</el-form-item>
					
					
					
				</el-form>
				
				
				
				
				
				<view class="footerBtnBox">
					<view class="footerTit">
						注意：数据只做参考，不保证数据完全准确。
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
					besides:'', //排除
					besides_match:[], //排除开头 //排除结尾
					min_length:'', //长度区间最低
					max_length:'' ,//长度区间最高
					reg_time:'', //注册日期
					type:[], //预订类型
					expire_time:'', //删除日期
				},
				textVal:'',
				checkedType:true,
				checkedSuffix:true,
				filtraList:[],
			}
		},
		mounted() {
			this.getfiltrate()
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
				this.$emit('submitForm',this.ruleForm)
			},
			resetForm(){
				this.ruleForm.rule= '';//快速查询/构成
				this.ruleForm.suffix=[];//后缀
				this.ruleForm.key= [];//关键字
				this.ruleForm.key_match=[];//关键字开头 //关键字结尾
				this.ruleForm.besides='';//排除
				this.ruleForm.besides_match=[];//排除开头 //排除结尾
				this.ruleForm.min_length='';//长度区间最低
				this.ruleForm.max_length='' ;//长度区间最高
				this.ruleForm.reg_time='';//注册日期
				this.ruleForm.type=[];//预订类型
				this.ruleForm.expire_time='';
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
			}
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