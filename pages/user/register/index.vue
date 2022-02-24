<template>
	<view class="bgBox">

		<view class="card-wrapper">
			<view class="card-wrap">
				<view class="card-header">
					<navigator url="/pages/index" style="cursor: pointer;">
						<image class="logo" src="/static/image/common/logo.png"></image>
					</navigator>
					<view class="title">注册账号</view>
				</view>
				<form class="card-body" @submit="register">
					<view class="form-item">
						<view class="country-code">+86</view>
						<input class="input" placeholder="手机号码" name="mobile" maxlength="11" type="number" v-model="mobile" />
					</view>
					<view class="form-item">
						<input class="input" placeholder="短信验证码" name="code" maxlength="6" type="number" />
						<view class="btn-send" :class="{'disabled': sendCode.disabled}" @click="sendSMSCode">{{sendCode.text}}</view>
					</view>
					<view class="form-item">
						<input class="input" placeholder="请输入密码" name="password" maxlength="20" password />
					</view>
					<view class="form-item">
						<input class="input" placeholder="再次输入密码" name="passwordRepeat" maxlength="20" password />
					</view>
					<view class="form-item border-none agreement">
						<label>
							<checkbox-group @change="agreeChange">
								<checkbox color="#FF6700" value="agree"></checkbox>
							</checkbox-group>
							<text>已阅读并同意</text>
						</label>
						<a class="link" href="/pages/user/register/agreement" target="_blank">《注册协议》</a>
					</view>
					<view class="form-item border-none" :title="!agreed ? '请阅读并同意注册协议' : ''">
						<button :class="['btn-primary', {'disabled': !agreed}]" form-type="submit">立即注册</button>
					</view>
				</form>
				<view class="card-footer">
					<text class="question">已有账号？</text>
					<navigator class="link" url="/pages/user/login/index">去登录</navigator>
				</view>
			</view>
		</view>


	</view>
</template>

<script>
	import { mapMutations, mapActions, mapState } from 'vuex';
	export default {
		data() {
			return {
				mobile: '',
				sendCode: {
					text: '获取验证码',
					disabled: false
				},
				agreed: false
			}
		},
		methods: {
			...mapActions(['getUserInfo','setTokenAndBack']),
			sendSMSCode() {
				if (this.sendCode.disabled) return;
				if (!this.$regular.phoneNumber.test(this.mobile)) {
					return this.$util.showErrorMsg('请输入正确的手机号');
				}
			
				this.sendCode.disabled = true;
				this.sendCode.text = '发送中...';
			
				new Promise((resolve, reject) => {
					this.$http('user.send', {
						mobile: this.mobile,
						event: 'register'
					}, '').then(res => {
						if (res.code === 1) {
							resolve();
							this.$util.showErrorMsg(res.msg);
						} else{
							reject(res.msg);
						}
					});
					
				}).then(() => {
					let seconds = 60;
					const timer = setInterval(() => {
						if (seconds <= 0) {
							clearInterval(timer);
							this.sendCode.disabled = false;
							this.sendCode.text = '重新发送';
						} else {
							this.sendCode.text = `重新发送（${seconds}）`;
							seconds--;
						}
					}, 1000);
				}).catch(e => {
					this.$util.showErrorMsg(e);
			
					this.sendCode.disabled = false;
					this.sendCode.text = '重新发送';
				});
			},
			agreeChange(e) {
				this.agreed = e.detail.value.length > 0;
			},
			register(e) {
				if (!this.agreed) return;
				const data = e.detail.value;
				if (!this.checkForm(data)) return;
				
				uni.showLoading({
					title: '处理中...',
					mask: true
				});
				
				this.$http('user.register', data, '').then(res => {
					uni.hideLoading();
					if (res.code === 1) {
						this.getUserInfo(res.data.userinfo.token);
						this.setTokenAndBack()
					} else{
							this.$util.showErrorMsg(res.msg);
					}
				});
				
				
			},
			checkForm(e) {
				if (!this.$regular.phoneNumber.test(e.mobile)) {
					return this.$util.showErrorMsg('手机号格式错误');
				}
				if (!this.$regular.captcha.test(e.code)) {
					return this.$util.showErrorMsg('验证码格式错误');
				}
				if (!this.$regular.password.test(e.password)) {
					return this.$util.showErrorMsg('密码格式错误');
				}
				if (e.passwordRepeat != e.password) {
					return this.$util.showErrorMsg('密码输入不一致');
				}

				return true;
			}
		}
	}
</script>

<style lang="scss">
	.bgBox{
		background-image: url(../../../static/image/common/loginBg.png);
		background-size: 1920px 1080px;
		width: 100%;
		height: 100vh;
		overflow: hidden;
		display: flex;
		align-items: center;
	}
	

	.card-wrapper {
		background-color: $bg-color;
		width: 470px;
		margin-left: 230px;
		overflow: hidden;
		border-radius: 15px;
		.card-wrap {
			width: 332px;
			margin: 40px auto;
			padding-bottom: 20px;

			.card-header {
				text-align: center;

				.logo {
					width: 60px;
					height: 60px;
					margin-bottom: 40px;
				}

				.title {
					font-size: 30px;
					color: #333;
					line-height: 1.5;
				}
			}

			.card-body {
				display: block;
				margin-top: 22px;

				.form-item {
					@extend %flex-align-center;
					height: 45px;
					line-height: 45px;
					margin-bottom: 14px;
					border: 1px solid $border-color;

					.input {
						flex: 1;
						height: 45px;
						line-height: 45px;
						padding: 0 14px;
						color: $text-color;
					}

					.country-code {
						width: 60px;
						height: 45px;
						line-height: 45px;
						color: $text-color;
						text-align: center;
						border-right: 1px solid $border-color;
					}

					.btn-send {
						height: 45px;
						line-height: 45px;
						padding: 0 15px;
						color: #003AB5;
						cursor: pointer;
						text-align: center;
						border-left: 1px solid $border-color;

						&.disabled {
							cursor: default;
							color: #757575;
						}
					}

					.btn-primary {
						background-color: $color-primary;
						height: 45px;
						line-height: 45px;
						margin-bottom: 14px;
						color: #fff;
						cursor: pointer;
						width: 100%;

						&.disabled {
							opacity: .5;
							cursor: not-allowed;
						}
					}

					&.border-none {
						border: none;
					}

					&.agreement {
						height: 20px;
						line-height: 20px;
						margin-bottom: 18px;
						margin-top: 24px;

						label {
							@extend %flex-align-center;
							color: $text-color-grey;

							checkbox {
								transform: scale(.65);
								margin-left: -3px;
							}
						}

						.link {
							color: #003AB5;
						}
					}
				}
			}

			.card-footer {
				@extend %flex-align-center;
				justify-content: flex-end;
				font-size: 12px;

				.question {
					color: $text-color-grey;
				}

				.link {
					color: $color-primary;
				}
			}
		}
	}

	.copyright {
		position: fixed;
		bottom: 20px;
		left: 0;
		right: 0;
		padding: 10px;
		color: #757575;
		text-align: center;
	}
</style>
