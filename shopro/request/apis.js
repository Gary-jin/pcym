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
		domainBidding: {
			url: "domains_bidding/bidding",
			auth: true,
			method: "POST",
			// desc: '  竞价出价',
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
		bookDomain: {
			url: "expires/bookDomain",
			auth: true,
			method: "POST",
			// desc: ' 域名预定',
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
		
	},
	member :{
		addGroup: {
			url: "member_domains/addGroup",
			auth: true,
			method: "POST",
			// desc: '添加分组',
		},
		groupList: {
			url: "member_domains/groupList",
			auth: true,
			method: "GET",
			// desc: '分组列表',
		},
		domainGroup: {
			url: "member_domains/domainGroup",
			auth: true,
			method: "POST",
			// desc: '域名分组',
		},
		myDomains: {
			url: "member_domains/myDomains",
			auth: true,
			method: "GET",
			// desc: '我的域名',
		},
		identityList: {
			url: "member_domains/identityList",
			auth: true,
			method: "GET",
			// desc: '证件类型',
		},
		addMould: {
			url: "member_domains/addMould",
			auth: true,
			method: "POST",
			// desc: '创建模板',
		},
		mouldList: {
			url: "member_domains/mouldList",
			auth: true,
			method: "GET",
			// desc: '模板列表',
		},
		updateDns: {
			url: "member_domains/updateDns",
			auth: true,
			method: "POST",
			// desc: '修改dns ',
		},
		updateDnsLog: {
			url: "member_domains/updateDnsLog",
			auth: true,
			method: "GET",
			// desc: ' dns修改记录 ',
		},
		updateContact: {
			url: "member_domains/updateContact",
			auth: true,
			method: "POST",
			// desc: ' 域名过户 ',
		},
		updateContactLog: {
			url: "member_domains/updateContactLog",
			auth: true,
			method: "GET",
			// desc: ' 域名过户 list',
		},
		transferOut: {
			url: "member_domains/transferOut",
			auth: true,
			method: "POST",
			// desc: ' 域名转出',
		},

	},

	agent:{
		applyAgent: {
			url: "agent/applyAgent",
			auth: true,
			method: "POST",
			// desc: '申请经纪人',
		},
		serviceFee: {
			url: "agent/serviceFee",
			auth: true,
			method: "POST",
			// desc: '服务费',
		},
		applyAgentLogs: {
			url: "agent/applyAgentLogs",
			auth: true,
			method: "GET",
			// desc: '服务费',
		},

	},
	order:{
		domainRecharge: {
			url: "order/domainRecharge",
			auth: true,
			method: "POST",
			// desc: '域名续费 提交订单',
		},
		walletPay: {
			url: "pay/walletPay",
			auth: true,
			method: "GET",
			// desc: '域名续费 确定续费',
		},
		domainOrder: {
			url: "order/domainOrder",
			auth: true,
			method: "POST",
			// desc: '一口价购买',
		},

	}

};
