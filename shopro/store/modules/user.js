// 用户数据模块
import http from '@/shopro/request/index'
import store from '@/shopro/store'

const state = {
	token: uni.getStorageSync("token") || "",
	isLogin: uni.getStorageSync("isLogin") || false, // 是否登陆
	userInfo: uni.getStorageSync("userInfo") || {}, // 用户信息
	filtraList: uni.getStorageSync("filtraList") || {}, //筛选选项
	domainList:{}, //域名
}

const getters = {
	token: state => state.token,
	isLogin: state => state.isLogin,
	userInfo: state => state.userInfo,
	filtraList: state => state.filtraList,
	domainList: state => state.domainList,
}

const actions = {
	// 获取用户信息
	getUserInfo({
		commit,
		dispatch,
		getters,
		state
	}, token = '',pathBack) {
		return new Promise((resolve, reject) => {
			token && uni.setStorageSync('token', token);
			http('user.info').then(res => {
					if (res.code === 1) {
						commit('userInfo', res.data);
						commit('isLogin', true);
						resolve(res.data)
					}

				}).then(() => {
					// 只有在登录的时候请求。
					store.dispatch('getFiltraList');
				})
				.catch(e => {
					reject(e)
				})
		})
	},
	//设置token并返回上次页面
		setTokenAndBack({
			commit
		}, token) {
			let fromLogin = uni.getStorageSync('fromLogin');
			console.log('fromLogin',fromLogin);
			if (fromLogin) {
				uni.redirectTo({
						url: fromLogin
				});
				uni.removeStorageSync('fromLogin')
			} else {
				//默认跳转首页S
				uni.redirectTo({
						url: '/pages/index'
				});
			}
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
	//获取筛选选项
	getFiltraList({
		commit
	}) {
		return new Promise((resolve, reject) => {
			http('ym.filtrate').then(res => {
				if(res.code === 1){
					commit('filtraList', res.data);
					resolve(res)
				}
			}).catch(e => {
					reject(e)
			})
		})
	},
		//存域名信息
	setdomainList({
		commit
	},data) {
		return new Promise((resolve, reject) => {
			commit('domainList', data);
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
		console.log('isLogin',state.isLogin)
		if(!state.isLogin){
			uni.showModal({
				title: '提示',
				content: '您还未登录请登录',
				success: function (res) {
						if (res.confirm) {
							uni.navigateTo({
								url: `/pages/user/login/index`
							});
						} 
				}
			});
		}
		
	},

	// 退出登录
	logout({
		commit,
		dispatch
	}) {
		uni.getStorageSync('token') && http('user.logout');
		commit('token', "");
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
	// 筛选信息
	filtraList(state, data) {
		state.filtraList = data;
		uni.setStorageSync("filtraList", data);
	},
	//域名
	domainList(state, data) {
		state.domainList = data;
	},
}



export default {
	state,
	mutations,
	actions,
	getters
}
