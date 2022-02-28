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
	// 域名
	ym:{
		filtrate: {
			url: "index/getFilter",
			auth: false,
			method: "GET",
			// desc: ' 筛选项',
		},

		
		bidhot: {
			url: "domains_bidding/hot",
			auth: false,
			method: "GET",
			// desc: ' 热门竞价域名',
		},
		bidList: {
			url: "domains_bidding/domainsList",
			auth: false,
			method: "GET",
			// desc: '  竞价域名列表',
		},
		bidDetail: {
			url: "domains_bidding/domainsDetail",
			auth: true,
			method: "GET",
			// desc: '  竞价域名详情',
		},
		

		ydhot: {
			url: "expires/hot",
			auth: false,
			method: "GET",
			// desc: ' 热门过期域名',
		},
		domainsList: {
			url: "expires/domainsList",
			auth: false,
			method: "GET",
			// desc: '  过期域名列表',
		},
		ydDetail: {
			url: "expires/domainsDetail",
			auth: true,
			method: "GET",
			// desc: '  过期域名详情',
		},
		ydChannel: {
			url: "expires/channel",
			auth: true,
			method: "GET",
			// desc: '预定通道',
		},


		ykjhot: {
			url: "domains/hot",
			auth: false,
			method: "GET",
			// desc: ' 热门一口价域名',
		},
		ykjList: {
			url: "domains/domainsList",
			auth: false,
			method: "GET",
			// desc: '  一口价域名列表',
		},
		ykjDetail: {
			url: "domains/domainsDetail",
			auth: true,
			method: "GET",
			// desc: '  一口价域名详情',
		},
		
	}

};
