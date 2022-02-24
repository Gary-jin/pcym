// 用户数据模块
import http from '@/shopro/request/index'
import store from '@/shopro/store'

const state = {
	token: uni.getStorageSync("token") || "",
	isLogin: uni.getStorageSync("isLogin") || false, // 是否登陆
	userInfo: uni.getStorageSync("userInfo") || {}, // 用户信息
}

const getters = {
	token: state => state.token,
	isLogin: state => state.isLogin,
	userInfo: state => state.userInfo,
}

const actions = {
	// 获取用户信息
	getUserInfo({
		commit,
		dispatch,
		getters,
		state
	}, token = '') {
		return new Promise((resolve, reject) => {
			token && uni.setStorageSync('token', token);
			http('user.info').then(res => {
					if (res.code === 1) {
						let lastLoginStatus = getters.isLogin;
						commit('userInfo', res.data);
						commit('isLogin', true);
						resolve(res.data)
					}

				}).then(() => {
					// 只有在登录的时候请求购物车信息，订单信息，获取登录信息之后。
				})
				.catch(e => {
					reject(e)
				})
		})
	},
	// 用户其他相关信息
	getUserData({
		commit
	}) {
		return new Promise((resolve, reject) => {
			// http('user.userData').then(res => {
			// 	commit('USER_DATA', res.data);
			// 	resolve(res)
			// }).catch(e => {
			// 	reject(e)
			// })
		})
	},




	// 自动登录
	async autoLogin({
		getters,
		dispatch
	}) {
		
		
	},

	// 登录弹窗控制
	showAuthModal({
		commit
	}, type = 'accountLogin') {
		let callbackUrl = '/'+(getCurrentPages()[getCurrentPages().length - 1]).route;
		return
		
		uni.showModal({
			title: '提示',
			content: '您还未登录，请登录后再试！',
			success: function (res) {
				if (res.confirm) {
					uni.navigateTo({
						url: `/pages/user/login/index?callbackUrl=${callbackUrl}`
					});
				} else if (res.cancel) {
						console.log('用户点击取消');
				}
			}
		});
		
	},

	// 退出登录
	logout({
		commit,
		dispatch
	}) {
		uni.getStorageSync('token') && http('user.logout');
		commit('token', "");
		uni.removeStorageSync('chatSessionId');
		commit('isLogin', false);
		commit('userInfo', {});
	},


}

const mutations = {
	token(state, payload) {
		state.token = payload;
		uni.setStorageSync("token", payload);
	},
	// 登录态
	isLogin(state, data) {
		state.isLogin = data;
		uni.setStorageSync('isLogin', data);
	},
	// 用户信息
	userInfo(state, data) {
		state.userInfo = data;
		uni.setStorageSync("userInfo", data);
	},
}



export default {
	state,
	mutations,
	actions,
	getters
}
