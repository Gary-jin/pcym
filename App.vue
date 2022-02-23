<script>
	export default {
		onLaunch() {
			// 初始化登录信息
			this.initLoginUser();
			console.log('789');
		},
		onPageNotFound() {
			// 页面不存在时自动重定向到首页
			uni.redirectTo({
				url: 'pages/index'
			});
		},
		methods: {
			initLoginUser() {
				let loginUser = sessionStorage.getItem('loginUser');
				if (loginUser) {
					loginUser = JSON.parse(loginUser);
					if (loginUser.token) this.$store.commit('login', loginUser);
				}
			}
		}
	}
</script>

<style lang="scss">
	@import url("@/common/styles/myfont/iconfont.css");
	@import './common/styles/app.scss';
	* {
		outline: none;
	}

	body {
		height: auto;
		min-width: $page-width;
		overflow-x: auto;
		font-size: 14px;
		background-color: #F8FAFE;
	}

	/* 图片显示模式 */
	.thumb {
		object-fit: contain;
	}

	/* 省略长文本 */
	.elip {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.btn-prev,.btn-next{
		width: 35px;
		height: 28px;
		text-align: center;
		line-height: 28px;
		background: none;
		border: none;
	}
	
	.tabPane3{
		.el-alert.is-dark .el-alert__closebtn, .el-alert.is-dark .el-alert__description{
			color: #FAB233;
		}
	}
	.resRight{
		.el-tabs--border-card{
			box-shadow:none;
			border: none;
			.el-tabs__content{
				padding: 0;
			}	
		}	
	}
	
	// form表单
	.el-form-item__label{
		// color: $text-color2;
		font-size: 14px;
		font-weight: bold;
	}
	.el-form-item{
		padding: 10px 0;
		margin-bottom: 0;
	}
	
	.el-carousel__container{
		height: 100%;
	}
	
	.is-opened{
		.el-submenu__title{
			background-color: $bg-color-main;
			color: #FFFFFF;
		}
		i{
			color: #FFFFFF !important;
		}
	}
	
	
	.explainRule{
		padding: 20px 30px;
		background: #FFFAF5;
		border-radius: 2px;
		border-left: 3px #FF6000 solid;
		.titleEx{
			font-size: 14px;
			font-weight: 600;
			color: #323232;
			margin-bottom: 15px;
		}
		.expItem{
			display: flex;
			.icon-dian{
				color: #FF6000;
				margin-top: 6px;
			}
			.item{
				padding: 5px 0;
			}
		}
	}
</style>
