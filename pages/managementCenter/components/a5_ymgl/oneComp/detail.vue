<template>
	<view class="deBox">
		<el-menu
		  :default-active="tabNum"
		  class="el-menu-demo"
		  mode="horizontal"
		  background-color="#F1F6FF"
		  text-color="#969696"
		  active-text-color="#4088FF">
		  <el-menu-item @click="goPath('1')" index="1">我的域名</el-menu-item>
			<el-menu-item index="2">域名详情</el-menu-item>
		</el-menu>
		
		<el-form ref="form" label-width="180px">
		  <el-form-item label="域名">
		    {{parameter.domain}}
				<!-- <text class="texName">域名证书</text> -->
				<a class="texName" target="_blank" href="https://cpp.cnnic.cn/certificate/certificateCnnic!searchCert.action?decorator=false">
					域名证书
				</a>
		  </el-form-item>
			<el-form-item label="状态">
				 <span v-if="parameter.status==1">正常</span>
				 <span v-if="parameter.status==2">正在出售</span>
				 <span v-if="parameter.status==3">转出中</span>
				<!-- <text class="texName">查看whois</text> -->
			</el-form-item>
			<!-- <el-form-item label="注册商">
			  易名 
				<text class="texName"> 获取转移码 </text>
				（此域名无法手动确认转出，需等待5-7天自动确认）
			</el-form-item> -->
			<el-form-item label="持有者名称">
			  域名临时持有人
				<!-- <text class="texName">白名单 </text> -->
				<!-- <text class="texName">域名过户 </text> -->
			</el-form-item>
			<!-- <el-form-item label="邮箱">
			  临时邮箱  
			</el-form-item> -->
			<el-form-item label="注册时间">
			  {{parameter.reg_time}}
				<text @click="goPath('3',parameter)" class="texName">续费</text>
			</el-form-item>
			<el-form-item label="到期时间">
			 {{parameter.delete_date}}
			</el-form-item>
			<el-form-item label="DNS">
			  <view class="d_f_c">
			  	<view class="">
						<view class="">{{parameter.dns}}</view>
					</view>
					<text @click="changeDns()" class="texName">修改</text>
			  </view>
			</el-form-item>
			<el-form-item>
			   <el-button @click="changePush()" type="primary">域名PUSH</el-button>
				 <el-button type="primary" plain>域名出售</el-button>
			</el-form-item>
		</el-form>
		
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
		data() {
			return {
				tabNum:'2',
			}
		},
		mounted() {
			console.log(this.parameter);
		},
		methods: {
			...mapActions(['setdomainList']),
			goPath(val,item){
				let option ={
					tabVal:val,
					item: item
				}
				this.$emit('changeTal',option)
			},
			changeDns(){
				this.setdomainList(this.parameter)
				uni.$emit('upTypeTab',{itemVal:'5-9'})
			},
			changePush(){
				this.setdomainList(this.parameter)
				uni.$emit('upTypeTab',{itemVal:'5-10'})
			}
		},
	}
</script>
<style lang="scss" scoped>
	.deBox{
		background: #FFFFFF;
	}
	.texName{
		padding: 0 15px;
		color: $text-color-main;
	}
	.el-form-item:nth-child(2n){
		background: $color-f2;
	}
</style>