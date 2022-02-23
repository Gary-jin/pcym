/**
 * 接口列表文件
 */
export default {


	/** 用户 ↓ **/
	user: {
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

	api: {
		list: {
			url: "Material/list",
			auth: true,
			method: "GET",
			// desc: '分销身份鉴权',
		},
		
	}

};
