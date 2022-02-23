<template>
	<view class="f_cc_ls">
		<view class="core expCore">
			<!--  -->
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="116px" class="demo-ruleForm">
						<el-form-item label="商标分类" prop="type">
							<el-checkbox-group v-model="ruleForm.type">
								<el-checkbox label="1" name="type">asd</el-checkbox>
								<el-checkbox label="2" name="type">sd</el-checkbox>
								<el-checkbox label="3" name="type">das</el-checkbox>
							</el-checkbox-group>
						</el-form-item>
						<el-form-item label="" prop="type" :class="checked?'itemMore':''">
						  <el-checkbox-group v-model="ruleForm.type">
						    <el-checkbox v-for="(item,index) in 22" :key="index" label="1" name="type"></el-checkbox>
						  </el-checkbox-group>
						</el-form-item>
						<el-form-item label="商标类型" prop="type">
						  <el-checkbox-group v-model="ruleForm.type">
						    <el-checkbox label="1" name="type"></el-checkbox>
						    <el-checkbox label="2" name="type"></el-checkbox>
						    <el-checkbox label="3" name="type"></el-checkbox>
						  </el-checkbox-group>
						</el-form-item>
						<el-form-item label="字符长度" prop="type">
						  <el-checkbox-group v-model="ruleForm.type">
						    <el-checkbox label="1" name="type"></el-checkbox>
						    <el-checkbox label="2" name="type"></el-checkbox>
						    <el-checkbox label="3" name="type"></el-checkbox>
						  </el-checkbox-group>
						</el-form-item>
						<el-form-item label="附带转让" prop="type">
						  <el-checkbox-group v-model="ruleForm.type">
						    <el-checkbox label="1" name="type"></el-checkbox>
						    <el-checkbox label="2" name="type"></el-checkbox>
						    <el-checkbox label="3" name="type"></el-checkbox>
						  </el-checkbox-group>
						</el-form-item>
						<el-form-item label="价格区间" prop="type">
						  <el-checkbox-group v-model="ruleForm.type">
						    <el-checkbox label="1" name="type"></el-checkbox>
						    <el-checkbox label="2" name="type"></el-checkbox>
						    <el-checkbox label="3" name="type"></el-checkbox>
						  </el-checkbox-group>
						</el-form-item>
				  </el-form-item>
				</el-form>
				<!--  -->
				<view class="moreBox">
					<el-button @click="morech" :icon="checked?'el-icon-arrow-down':'el-icon-arrow-up'" type="primary" size="mini">展开</el-button>
				</view>
			<!--  -->
		</view>
		<view style="height: 20px;"></view>
		<view class="core expCore2">
			<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
				<el-menu-item index="1">产品列表	</el-menu-item>
				<el-menu-item index="2">我的关注</el-menu-item>
			</el-menu>
			<view class="expRight">
				<view class="sortBox">
					<sort :sortlist="topicArr"  @sortTap="sortTap"></sort>
				</view>
				<view class="inpBox">
					<el-input v-model="min" placeholder="最低价" size="small"></el-input>
					<view style="width: 10px;"></view>
					<el-input v-model="max" placeholder="最高价" size="small"></el-input>
				</view>
				<el-button type="text" style="padding: 0 20px;">确定</el-button>
			</view>
		</view>
		
		<view class="core">
			<view class="listBox">
				<view class="card"  v-for="(item,index) in 12" :key="index">
					<view class="imgbox" @click.top="goDetail(item)">
						<el-image style="width: 100%; height: 100%"
								src="https://cloud0.a5.net/y/a5.zc/1924840/sellgoods/0/cc0ko620_400x300.jpg">
						</el-image>						
					</view>
					<view class="intBox">
						<view class="intCore">
							<view class="int1">
								<view class="t1">路易芭莎</view>
								<view class="t2">￥26854.00</view>
							</view>
							<view class="int1">
								<view class="t11">广告销售/1930年注册</view>
								<view class="t22" @click="collectCh(item)"><i class="iconfontAl icon-iclike" :class="collect?'alicY':'alicN'"></i></view>
							</view>
							<view class="int2">
								<el-button type="primary" class="iBtn" round>联系经纪人</el-button>
							</view>
						</view>
					</view>
					<el-image v-if="index==1" class="jImg" src="../../../../static/image/nav4/cardbg.png" ></el-image>	
				</view>
			</view>
		</view>
		<!--  -->
		<view class="core">
			<view class="pagBox">
				<view class="pagL">
					 
				</view>
				<view class="pagR">
					<el-pagination
						@size-change="handleSizeChange"
						@current-change="handleCurrentChange"
						:current-page="4"
						:page-sizes="[12]"
						:page-size="100"
						layout="total, sizes, prev, pager, next, jumper"
						:total="400">
					</el-pagination>
				</view>
			</view>			
		</view>
	</view>
</template>

<script>
	import sort from '@/components/zwx-sort/zwx-sort'
	export default {
		components: {
			sort
		},
		props: {
			// navVal: {
			// 	type: String,
			// 	default: 'home'
			// },
		},
		data() {
			return {
				topicArr:["发布时间", "价格", "注册时间"],
				ruleForm: {
					type: [],
				},
				rules: {},
				checked: true,
				activeIndex: '1',
				min:'',
				max:'',
				collect:false, 
			}
		},
		onLoad() {
		},
		onShow() {
			
		},
		onHide() {
			
		},
		methods: {
			morech(){
				this.checked = !this.checked
			},
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			},
			sortTap(index,bol){
				console.log(index,bol);
			},
			goDetail(item){
				uni.navigateTo({
				    url: `/pages/nav4/n1_brand/detailBrand`
				});
			},
			//收藏
			collectCh(item){
				this.collect = !this.collect
			},
			
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			}
		}
	}
</script>
<style lang="scss" scoped>
	.expCore{
		background-color: #FFFFFF;
		position: relative;
		.moreBox{
			position: absolute;
			right: 20px;
			top: 20px;
		}
		.itemMore{
			display: none;
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
			.btn{
				margin-left: 20px;
			}
		}
	}
	
	.expCore2{
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.el-menu-demo{
			width: 300px;
			.el-menu-item{
				width: 150px;
				text-align: center;
			}
		}
		.expRight{
			display: flex;
			align-items: center;
			.sortBox{
				width: 300px;
				padding: 0 20px;
			}
			.inpBox{
				display: flex;
				justify-content: space-between;
				.el-input--small{
					width: 100px;
				}
			}
		}
	}
	
	.listBox{
		padding: 30px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		background-color: #FFFFFF;
		.card:hover {
			.intBox{
				bottom: 0;			
			}
		}
		.card{
			width: 368px;
			height: 332px;
			border-radius: 26px;
			border: 1px solid #F0F0F0;
			box-sizing: border-box;
			margin-bottom: 20px;
			overflow: hidden;
			position: relative;
			.imgbox{
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: center;
			}
			.intBox{
				width: 100%;
				position: absolute;
				bottom: -60px;
				transition-duration: .5s;
				background-color: rgba($color: $color-f2, $alpha: .8);
				.intCore{
					padding: 15px;
					.int1{
						display: flex;
						align-items: center;
						justify-content: space-between;
						margin-bottom: 15px;
						.t1{
							font-size: 18px;
							color: $text-color2;
							font-weight: bold;
						}
						.t2{
							font-size: 18px;
							font-weight: bold;
							color: #FE2626;
						}
						.t11{
							font-size: 14px;
							font-weight: 400;
							color: #8E919F;
						}
						.t22{
							font-size: 20px;
						}
					}
					.int2{
						.iBtn{
							width: 100%;
						}
					}
				}
			}
			.jImg{
				width: 100px;
				height: 100px;
				position: absolute;
				top: -1px;
				left: -1px;
			}
		}
	}
	
</style>