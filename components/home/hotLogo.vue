<template>
	<view>
		<!--  -->
		<view class="f_cc_ls rmdbg2">
			<title-home style="margin: 50px 0 30px 0;" @change="change" :title="title" :subhead="subhead"></title-home>
			<view class="core_f rmdCardBox1">
				<view class="rmdCardBox">
					<view class="rmdCard" v-for="(item,index) in 4" :key="index">
						<view class="top">
							<!-- <img src="" alt=""> -->
						</view>
						<view class="bot">
							<view class="btop">
								<view class="pl">路易芭莎</view>
								<view class="pr">￥26854.00</view>								
							</view>
							<view class="bbom elip">
								树脂工艺品;垫枕;办公家具;家具;室内窗用遮光帘;
							</view>
						</view>
						
					</view>					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import titleHome from '@/components/home/title.vue'; 
	export default {
		components: {
			titleHome
		},
		data() {
			return {
				title:'热门商标展示',
				subhead:'一个小标题的注释一个小标题的注释一个小标题的注释'
			}
		},
		onLoad(admin) {
			console.log(admin);
		},
		onShow() {
			
		},
		onHide() {
			
		},
		methods: {
			change(e){
				console.log(e);
			}
		}
	}
</script>
<style lang="scss" scoped>
	
	.rmdbg2{
		background-color: $bg-home-2;
		height: 1117px;
		background-image: url(../../static/image/home/bb2.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		.rmdCardBox1{
			justify-content: flex-start;
		}
		.rmdCardBox{
			width: 587px;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.rmdCard{
				width: 280px;
				height: 330px;
				background: #FFFFFF;
				border-radius: 26px;
				border: 1px solid #F0F0F0;
				overflow: hidden;
				margin-bottom: 27px;
				text-align: center;
				.top{
					height: 230px;
				}
				.bot{
					height: 60px;
					padding: 20px;
					.btop{
							display: flex;
							justify-content: space-between;
							font-size: 18px;
							font-weight: 600;
						.pl{
							color: $text-color1;
						}
						.pr{
							color: #FE2626;
						}
					}
					.bbom{
						font-size: 14px;
						margin-top: 5px;
						font-weight: 400;
						color: #8E919F;
					}
				}
			}
			
			.rmdCard:hover {
				transition: all .5s;
				transform: scale(1.02);
				.bot{
					background-color: #4F80FF;
					.pl,.bbom{
						color: #FFFFFF;
					}
					.pr{
						color: #FFE600;
					}
				}
			}
		}
	}
</style>