export default {
	navList:[ 
		{
			title:'首页',
			val:'home',
			isEmpty: 0,
			linkUrl:'/pages/index',
			islogin:false,
			list:[]
		},
		{
			title:'域名抢注',
			val:'nav1',
			isEmpty: 1,
			linkUrl:'/pages/nav1/n1_expire/index',
			islogin:false,
			list:[
				{
					name:'过期域名',
					linkUrl:'/pages/nav1/n1_expire/index',
					islogin:false
				},
				// {
				// 	name:'域名预定',
				// 	linkUrl:'/pages/nav1/n2_ymYd/index',
				// islogin:false
				// },
				{
					name:'我的预定',
					linkUrl:'/pages/managementCenter/index?tab=4-1',
					islogin:true
				},
				{
					name:'竞价域名',
					linkUrl:'/pages/nav1/n4_auction/index',
					islogin:false
				}
			]
		},
		{
			title:'网站交易',
			val:'nav2',
			isEmpty: 1, 
			linkUrl:'/pages/nav2/n1_hotWz/index',
			islogin:false,
			list:[
				{
					name:'热门网站',
					linkUrl:'/pages/nav2/n1_hotWz/index',
					islogin:false
				}
			]
		},
		{
			title:'淘域名',
			val:'nav3',
			isEmpty: 1, 
			linkUrl:'/pages/nav3/n1_buy/index',
			islogin:false,
			list:[
				{
					name:'一口价',
					linkUrl:'/pages/nav3/n1_buy/index',
					islogin:false
				}
			]
		},
		{
			title:'商标交易',
			val:'nav4',
			isEmpty: 1, 
			linkUrl:'/pages/nav4/n1_brand/index',
			islogin:false,
			list:[
				{
					name:'热门商标',
					linkUrl:'/pages/nav4/n1_brand/index',
					islogin:false
				}
			]
		},
		{
			title:'新媒体交易',
			val:'nav5',
			isEmpty: 1, 
			linkUrl:'/pages/nav5/n1_mt/index',
			islogin:false,
			list:[
				{
					name:'热门新媒体',
					linkUrl:'/pages/nav5/n1_mt/index',
					islogin:false
				}
			]
		}
	],
	
	
	managementCenter:[ //管理中心
		{
			title:'账户管理',
			val:'1',
			icon:'iconfontAl icon-jurassic_user',
			list:[
				{
					name:'用户资料',
					itemVal:'1-1',
					linkUrl:''
				},
				{
					name:'基本资料',
					itemVal:'1-2',
					linkUrl:''
				},
				{
					name:'实名认证',
					itemVal:'1-3',
					linkUrl:''
				},
				{
					name:'站内短信',
					itemVal:'1-4',
					linkUrl:''
				}
			]
		},
		// {
		// 	title:'会员管理',
		// 	val:'2',
		// 	icon:'iconfontAl icon-huiyuan',
		// 	list:[
		// 		{
		// 			name:'过期域名',
		// 			itemVal:'2-1',
		// 			linkUrl:''
		// 		},
		// 	]
		// },
		{
			title:'我的财务',
			val:'3',
			icon:'iconfontAl icon-caiwuguanli',
			list:[
				{
					name:'在线充值',
					itemVal:'3-1',
					linkUrl:''
				},
				{
					name:'充值订单',
					itemVal:'3-2',
					linkUrl:''
				},
				{
					name:'资金明细',
					itemVal:'3-3',
					linkUrl:''
				},
				{
					name:'我要提现',
					itemVal:'3-4',
					linkUrl:''
				}
			]
		},
		{
			title:'域名抢注',
			val:'4',
			icon:'iconfontAl icon-hulianwangIT',
			list:[
				{
					name:'我的预定',
					itemVal:'4-1',
					linkUrl:''
				},
				{
					name:'我的竞价',
					itemVal:'4-2',
					linkUrl:''
				},
				{
					name:'我的一口价',
					itemVal:'4-3',
					linkUrl:''
				}
			]
		},
		{
			title:'域名管理',
			val:'5',
			icon:'iconfontAl icon-guanli',
			list:[
				{
					name:'我的域名',
					itemVal:'5-1',
					linkUrl:''
				},
				{
					name:'我的分组',
					itemVal:'5-2',
					linkUrl:''
				},
				{
					name:'我的模板',
					itemVal:'5-7',
					linkUrl:''
				},
				{
					name:'域名转出',
					itemVal:'5-3',
					linkUrl:''
				},
				{
					name:'域名转入',
					itemVal:'5-4',
					linkUrl:''
				},
				{
					name:'域名转回',
					itemVal:'5-5',
					linkUrl:''
				},
				{
					name:'外部域名入库',
					itemVal:'5-6',
					linkUrl:''
				}
			]
		},
		{
			title:'域名经纪',
			val:'6',
			icon:'iconfontAl icon-lingdai',
			list:[
				{
					name:'申请经纪',
					itemVal:'6-1',
					linkUrl:''
				},
				{
					name:'我的经纪记录',
					itemVal:'6-2',
					linkUrl:''
				}
			]
		},
		{
			title:'代理域名',
			val:'7',
			icon:'iconfontAl icon-dailishang',
			list:[
				{
					name:'过期域名',
					itemVal:'7-1',
					linkUrl:''
				}
			]
		},
		{
			title:'我是卖家',
			val:'8',
			icon:'iconfontAl icon-maijiadianpu',
			list:[
				{
					name:'过期域名',
					itemVal:'8-1',
					linkUrl:''
				}
			]
		},
		{
			title:'我是买家',
			val:'9',
			icon:'iconfontAl icon-24gl-cartFull',
			list:[
				{
					name:'过期域名',
					itemVal:'8-1',
					linkUrl:''
				}
			]
		},
		{
			title:'工单管理',
			val:'10',
			icon:'iconfontAl icon-guanliyuan_guanliyuanrizhi',
			list:[
				{
					name:'过期域名',
					itemVal:'10-1',
					linkUrl:''
				}
			]
		}
		
		
	]
}