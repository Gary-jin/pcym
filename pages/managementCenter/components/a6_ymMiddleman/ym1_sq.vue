<template>
	<view class="fzBox">
		<!-- 批量分组 -->
		<view style="padding: 20px;" >	
			<view style="width: 60%;padding: 20px;">
				<el-steps :active="active" finish-status="success">
					<el-step title="申请经纪 "></el-step>
					<el-step title="确认需求"></el-step>
					<el-step title="确认交易"></el-step>
					<el-step title="支付成功"></el-step>
					<el-step title="经纪完成"></el-step>
				</el-steps>				
			</view>
			
			<view class="d_f" >
				<view class="formBox">
					<el-form ref="form" :rules="rules" :model="form" label-width="140px">
						<el-form-item label="您想购买的域名" prop="domains">
							<el-input
								type="textarea"
								:rows="4"
								:disabled="disabled"
								@input="changeRow(textVal)"
								placeholder="每行一个域名,一次最多5个"
								v-model="textVal">
							</el-input>
							<text>您已经填写 <text class="numSize">{{numLength}}</text> 个域名，还可添加 <text class="numSize">{{5-numLength}}</text> 个</text>
						</el-form-item>
						
						<el-form-item label="您的预算"  prop="budget">
							<el-input @focus="getServiceFee" v-model="form.budget" type="number" min="0" style="width: 280px;" placeholder="您的预算" size="small"></el-input>
						</el-form-item>
						<el-form-item label="您的称呼"  prop="username">
							<el-input v-model="form.username" style="width: 280px;" placeholder="您的称呼" size="small"></el-input>
						</el-form-item>
						<el-form-item label="您的手机"  prop="mobile">
							<el-input v-model="form.mobile" style="width: 280px;" placeholder="您的手机" size="small"></el-input>
						</el-form-item>
						<!-- <el-form-item label="验证码">
							<view class="d_f_c">
								<el-input v-model="form.textVal" style="width: 160px;" placeholder="验证码" size="small"></el-input>
								<el-button style="margin-left: 30px;" :type="typeBtn" plain size="small">获取验证码</el-button>
							</view>
						</el-form-item> -->
						<el-form-item label="备注" >
							<el-input
								type="textarea"
								:rows="4"
								@input="changeRowRemark(form.remark)"
								placeholder="请填写您的详细需求，200字以内。"
								v-model="form.remark">
							</el-input>
						</el-form-item>
						<el-form-item label="服务费" >
							<text style="color: #007AFF;margin-right: 10px;">
								￥{{form.service_fee}}
							</text>
							<el-tooltip effect="dark" :content="topCenter" placement="top">
								<i class="iconfontAl icon-wenhao1"></i>
							</el-tooltip>
						</el-form-item>
						
						<el-form-item label="" >
							<view>
								 <el-checkbox v-model="checked"></el-checkbox>
								<text style="padding-left: 5px;">我已阅读并同意</text>
								<text class="numSize">《域名经纪服务协议》</text>
							</view>
						</el-form-item>	
						<el-form-item>
							<el-button type="primary" @click="onSubmit(checked)">提交申请</el-button>
						</el-form-item>
					</el-form>				
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
		props: {
			tabNum: {
				type: Number,
				default: 1
			},
		},
		data() {
			return {
				active:0,
				input:'',
				textVal:'',
				form: {
					domains: '', //申请经纪的域名
					budget:'', //	预算
					username:'', //	用户名称
					mobile: '', //	用户手机号
					remark:'', //	备注
					service_fee:'0', //	服务费	
				},
				rules:{
					domains:[
						{ required: true, message: '请输入您想购买的域名', trigger: 'blur' }
					],
					budget:[
						{ required: true, message: '请输入您的预算', trigger: 'blur' }
					],
					username:[
						{ required: true, message: '请输入您的称呼', trigger: 'blur' }
					],
					mobile:[
						{ required: true, message: '请输入您的手机号', trigger: 'blur' }
					],
				},
				numLength: 0,
				typeBtn:'warning',
				topCenter:'如果需求被确认，无论最终是否成交，服务费均不退还。如果需求未被确认，服务费直接退还。',
				checked:false,
				disabled:false
			}
		},
		computed: {
			...mapState({
				userInfo: ({ user }) => user.userInfo,
			})
		},
		mounted() {
			this.form.mobile = this.userInfo.mobile
		},
		methods: {
			onSubmit(val) {
				console.log(this.form);
				if(!val){
					this.$util.showErrorMsg('请先同意《域名经纪服务协议》');
					return
				}
				this.$refs['form'].validate((valid) => {
					if (valid) {
						this.$http('agent.applyAgent',
							{...this.form}).then(res => {
							this.$util.showErrorMsg(res.msg);
						});
					}
				});
			},
			changeRow(val){
				this.numLength = this.$util.textareaLength(val);
				this.form.domains = this.$util.textareaList(val);
				if(this.numLength>5){
					this.$util.showErrorMsg('最多填写五个域名');
					// this.disabled = true
					return
				}
			},
			changeRowRemark(val){
				this.form.remark = val
			},
			getServiceFee(){
				this.$http('agent.serviceFee',
					{ domains:this.form.domains},
				).then(res => {
					if(res.code == 1){
						this.form.service_fee = res.data
					}
				});
			}
		}
	}
</script>
<style lang="scss" scoped>
	.fzBox{
		background-color: #FFFFFF;
	}
	.fenziBox{
		display: flex;
		align-items: center;
		padding: 20px;
		.el-input{
			width: 160px;
			margin-right: 10px;
		}
		.el-select{
			width: 140px;
		}
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
	
	.formBox{
		width: 90%;
		margin-left: 50px;
		.el-form{
			width: 550px;
		}
		.numSize{
			color: $text-color-main;
		}
	}
	
	.formLx{
		color: $text-color-main;
		margin-left: 10px;	
	}
	
</style>