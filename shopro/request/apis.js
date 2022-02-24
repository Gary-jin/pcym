/**
 * 接口列表文件
 */
export default {


	/** 用户 ↓ **/
	user: {
		register: {
			url: "user/register",
			auth: false,
			method: "POST",
			// desc: '注册',end
		},
		send: {
			url: "sms/send",
			auth: false,
			method: "POST",
			// desc: '发验证码',end
		},
		login: {
			url: "user/login",
			auth: false,
			method: "POST",
			// desc: '账号密码',end
		},
		mobilelogin: {
			url: "user/mobilelogin",
			auth: false,
			method: "POST",
			// desc: '账号密码',end
		},
		resetpwd: {
			url: "user/resetpwd",
			auth: false,
			method: "POST",
			// desc: '重置密码',end
		},
		info: {
			url: "user",
			auth: true,
			method: "GET",
			// desc: '用户信息',end
		},
		logout: {
			url: "user/logout",
			auth: true,
			method: "POST",
			// desc: '退出登录',end
		},

	},

	order: {
		index: {
			url: "order/index",
			auth: true,
			method: "GET",
			// desc: '订单列表',
		},
	},
	// 域名预定
	ym:{
		ydhot: {
			url: "expires/hot",
			auth: false,
			method: "GET",
			// desc: ' 热门过期域名',
		},
		bidhot: {
			url: "domains_bidding/hot",
			auth: false,
			method: "GET",
			// desc: ' 热门过期域名',
		},
	}

};
