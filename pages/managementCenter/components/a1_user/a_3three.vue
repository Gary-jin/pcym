<template>
	<view>
		<view class="cardTitBox f_bc">
			<view class="titL">
				<i class="iconfontAl icon-geren"></i>
				<text>实名认证</text>
			</view>
			<view class="titR"></view>
		</view>
		<view class="IdCardBoxDetail">
			<view class="explainRule">
				<view class="titleEx">认证说明</view>
				
				<view class="expItem ">
					<i class="iconfontAl icon-dian"></i>
					<view class="item">
						在身份认证页面，填写姓名、证件号码，上传证件照片，提交认证；
					</view>
				</view>
				<view class="expItem ">
					<i class="iconfontAl icon-dian"></i>
					<view class="item">
						请提交证件正面照片进行身份认证(有效期内的证件)，如需添加水印，内容只能为：仅限实名认证使用。因为我们还需要提
						交到CNNIC注册局审核；
					</view>
				</view>
				<view class="expItem ">
					<i class="iconfontAl icon-dian"></i>
					<view class="item">
						单张图片大小请在55KB-1024KB范围之内，宽高限制不超过2000px，允许上传的图片类型：jpg/jpeg/png；
					</view>
				</view>
				<view class="expItem ">
					<i class="iconfontAl icon-dian"></i>
					<view class="item">
						请提交清晰可辨别的证件原件彩色扫描件；
					</view>
				</view>
				<view class="expItem ">
					<i class="iconfontAl icon-dian"></i>
					<view class="item">
						提交完成后，请等待我司专员进行审核，审核结果会以站内信方式通知用户；
					</view>
				</view>
				<view class="expItem ">
					<i class="iconfontAl icon-dian"></i>
					<view class="item">
						根据域名实名政策要求，如本站合作商需要实名，本站会提交您的实名材料到合作商平台由合作商提交实名；
					</view>
				</view>
			</view>
			<!--  -->
			<view class="formBox">
				<view class="rowbox">
					<view class="title f_cc">认证类型：</view>
					<view class="subBox">
						<el-select  size="small" v-model="form.type" placeholder="请选择">
							<el-option
								v-for="item in options"
								:key="item.value"
								:label="item.label"
								:value="item.value">
							</el-option>
						</el-select>
					</view>
				</view>
				<!-- 营业执照 -->
				<block v-if="form.type == '2'">
					<view class="rowbox">
						<view class="title f_cc">公司名称:</view>
						<view class="subBox ">
							<el-input v-model="form.input1" size="small" placeholder="请填写公司名称" ></el-input>
						</view>
					</view>
					<view class="rowbox">
						<view class="title f_cc">执照号码:</view>
						<view class="subBox ">
							<el-input v-model="form.input1" size="small" placeholder="请填写企业营业执照号码" ></el-input>
						</view>
					</view>
					<view class="rowbox">
						<view class="title f_cc">营业执照:</view>
						<view class="subBox ">
							<el-image style="width: 100px; height: 100px;"
									:src="form.idz"></el-image>
							<view style="margin-top: 10px;">
								<el-button type="primary">选择文件</el-button>
							</view>
						</view>
					</view>
					<view class="rowbox">
						<view class="title f_cc"></view>
						<view class="subBox ">
							企业认证，您还需要在下填写法人身份证信息，并上传法人身份证照片。
						</view>
					</view>
				</block>
				<!--  -->
				
				<view class="rowbox">
					<view class="title f_cc">证件姓名：</view>
					<view class="subBox subBoxXm">
						<text>姓</text>
						<el-input  size="small" v-model="form.input1"></el-input>
						<text class="tx">名</text>
						<el-input  size="small" v-model="form.input2"></el-input>
					</view>
				</view>
				<view class="rowbox">
					<view class="title f_cc">证件号码：</view>
					<view class="subBox ">
						<el-input  size="small" v-model="form.input1"></el-input>
					</view>
				</view>
				<view class="rowbox">
					<view class="title f_cc">证件照片：</view>
					<view class="subBox ">
						<view class="subZpBox">
							<view class="idBox" @click="cheImg(1)">
								<el-image style="width: 100%; height: 100%;" v-if="!form.idz"
										src="../../../../static/image/admin/idz.png"></el-image>
								<el-image style="width: 100%; height: 100%;" v-else
										:src="form.idz"></el-image>
							</view>
							<view class="idBox" @click="cheImg(2)">
								<el-image style="width: 100%; height: 100%;" v-if="!form.idf"
										src="../../../../static/image/admin/idf.png"></el-image>
								<el-image style="width: 100%; height: 100%;" v-else
										:src="form.idf"></el-image>
							</view>							
						</view>
						<view class="subZtex">
							<view class="">注意：</view>
							<view class="">
								1. 如首次提交认证，将自动把身份信息绑定作为《账户所有者》之后再提交认证只作为模板联系人使用。
							</view>
							<view class="">
								2. 请务必使用您本人证件进行认证，如因盗用他人证件进行认证导致的一切后果，责任自负！
							</view>
						</view>
					</view>
				</view>
				<view class="rowbox">
					<view class="title f_cc"></view>
					<view class="subBox ">
						<el-button type="primary">立即提交</el-button>
					</view>
				</view>
			</view>
			<!--  -->
			<view class="cardTitBox f_bc">
				<view class="titL">
					<i style="color: #007AFF;" class="iconfontAl icon-fuzhushuxian"></i>
					<text>近期登录日志</text>
				</view>
				<view class="titR"></view>
			</view>
			<view class="anquanBox">
				<view class="anquanTit f_bc anquanTitM">
					<view class="aqTx">姓名</view>
					<view class="aqTx aqTxc">证件号码</view>
					<view class="aqTx aqTxc">证件类型</view>
					<view class="aqTx aqTxc">审核结果</view>
					<view class="aqTx aqTxc">提交审核</view>
					<view class="aqTx aqTxr">操作</view>
				</view>
				<view class="anquanTit1 f_bc anquanTitM" v-for="(item,index) in 4" :key="index">
					<view class="aqTx">219.123.*.*</view>
					<view class="aqTx aqTxc">河南郑州市</view>
					<view class="aqTx aqTxc">PC端</view>
					<view class="aqTx aqTxc">PC端</view>
					<view class="aqTx aqTxc">PC端</view>
					<view class="aqTx aqTxr">变更</view>
				</view>
			</view>
			
			
		</view>
	</view>
</template>

<script>

	export default {
		components: {
			
		},
		data() {
			return {
				options: [{
					value: '1',
					label: '个人-身份证'
				},  {
					value: '2',
					label: '企业-营业执照'
				}],
				form:{
					type:'1',
					input1:'',
					input2:'',
					idz:'',
					idf:''
				}
				
			}
		},
		methods: {
			cheImg(val){
				let that = this;
				uni.chooseImage({
				    count: 1, 
				    success: function (res) {
				        console.log(JSON.stringify(res.tempFilePaths));
								if(val==1){
									that.form.idz = res.tempFilePaths[0]
								} else {
									that.form.idf = res.tempFilePaths[0]
								}
				    }
				});
			}
		}
	}
</script>
<style lang="scss" scoped>
	
	
	.IdCardBoxDetail{
		padding: 20px 40px 100px 40px;
		background-color: #FFFFFF;
		
		
		.formBox{
			margin-top: 50px;
			border: 1px #f2f2f2 solid;
			font-size: 14px;
			font-weight: 400;
			color: #777777;
			.rowbox:last-child{
				border: none;
			}
			.rowbox{
				display: flex;
				border-bottom: 1px #CED2DA dashed;
				.title{
					width: 112px;
					background: #F5F7FA;
				}
				.subBox{
					padding: 20px 0;
					margin-left: 20px;
				}
				.subBoxXm{
					text{
						padding-right: 10px;
					}
					.tx{
						padding-left: 10px;
					}
					.el-input{
						width: 90px;
					}
				}
				.subZpBox{
					display: flex;
					.idBox{
						margin-right: 20px;
						width: 237px;
						height: 198px;
					}
				}
				.subZtex{
					margin-top: 40px;
					color: #FE2626;
				}
				
			}
		}
	}
	
	
	.anquanBox{
		padding: 30px;
		background-color: #FDFDFD;
		.anquanTit{
			padding: 15px;
			border-bottom: 1px #E6E6E6 dashed;
			.aqTx{
				font-size: 14px;
				font-weight: 400;
				color: #777777;
			}
		}
		.anquanTit1{
			padding: 15px;
			font-size: 14px;
			font-weight: 400;
			.aqTx1{
				color: #FE2626;
			}
			.aqTx11{
				color: #58C46E;
			}
			.aqTx2{
				color: $text-color-main;
			}
		}
	}
	.anquanTitM{
		.aqTx{
			width: 25%;
		}
		.aqTxc{
			text-align: center;
		}
		.aqTxr{
			text-align: right;
		}
	}
</style>