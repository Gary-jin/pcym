(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-nav3-n1_buy-detailBuySingle"],{"132c":function(t,e,a){"use strict";a.r(e);var i=a("754e"),n=a("d9cb");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("f943");var c,o=a("f0c5"),l=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"779ddfbf",null,!1,i["a"],c);e["default"]=l.exports},4028:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={components:{},data:function(){return{datalist:[]}},mounted:function(){this.getList()},methods:{getList:function(){var t=this;t.$http("ym.ykjhot",{pagesize:8},"").then((function(e){1===e.code&&(t.datalist=e.data.data)}))},deleteRow:function(t,e){uni.navigateTo({url:"/pages/nav3/n1_buy/detailBuySingle?id=".concat(e.id)})}}};e.default=i},"4d7f":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 页面宽度 */.leftBox[data-v-779ddfbf]{width:283px}.leftBox .titleBox[data-v-779ddfbf]{height:50px;background-color:#4088ff}.leftBox .titleBox .titleL[data-v-779ddfbf]{display:flex}.leftBox .titleBox .titleL .l1[data-v-779ddfbf]{width:4px;height:25px;background:linear-gradient(317deg,#4088ff,#fff);margin:0 12px 0 20px}.leftBox .titleBox .titleL .l2[data-v-779ddfbf]{font-size:18px;font-weight:600;color:#fff}.leftBox .titleBox .titleR[data-v-779ddfbf]{font-size:14px;font-weight:400;color:#fff;margin-right:20px}.ruleBox[data-v-779ddfbf]{padding:20px;background-color:#fff}',""]),t.exports=e},"51c1":function(t,e,a){"use strict";(function(t){var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("132c")),s=i(a("d45c")),c={components:{resLeft:n.default,resRight:s.default},data:function(){return{}},onLoad:function(e){t.log("竞价id",e),this.goodsId=e.id},onShow:function(){},onHide:function(){},methods:{}};e.default=c}).call(this,a("5a52")["default"])},"754e":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"leftBox"},[a("v-uni-view",{staticClass:"titleBox f_bc"},[a("v-uni-view",{staticClass:"titleL"},[a("v-uni-view",{staticClass:"l1"}),a("v-uni-view",{staticClass:"l2"},[t._v("一口价推荐")])],1),a("v-uni-view",{staticClass:"titleR"})],1),a("v-uni-view",{staticClass:"tableBox"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.datalist}},[a("el-table-column",{attrs:{type:"index"}}),a("el-table-column",{attrs:{prop:"domain",label:"域名"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){return a.preventDefault(),t.deleteRow(e.$index,t.datalist[e.$index])}}},[t._v("购买")])]}}])})],1)],1),a("v-uni-view",{staticStyle:{height:"20px"}}),a("v-uni-view",{staticClass:"titleBox f_bc"},[a("v-uni-view",{staticClass:"titleL"},[a("v-uni-view",{staticClass:"l1"}),a("v-uni-view",{staticClass:"l2"},[t._v("一口价购买须知")])],1),a("v-uni-view",{staticClass:"titleR"})],1),a("v-uni-view",{staticClass:"ruleBox"},[t._v("如有多人预订同一个域名(且预订价格相同)，抢注成功后则需要进行竞价，竞价结束价高者得；\n\t\t如有多人预订同一个域名(且预订价格相同)，抢注成功后则需要进行竞价，竞价结束价高者得；")])],1)},s=[]},"883d":function(t,e,a){"use strict";a.r(e);var i=a("d12e"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"8fbc":function(t,e,a){var i=a("e31f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("162ecf5f",i,!0,{sourceMap:!1,shadowMode:!1})},"9a0a":function(t,e,a){"use strict";a.r(e);var i=a("51c1"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"9f76":function(t,e,a){"use strict";var i=a("8fbc"),n=a.n(i);n.a},aaa7:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"rightBox"},[a("v-uni-view",{staticClass:"detail"},[a("v-uni-view",{staticClass:"ymBox"},[t._v(t._s(t.goodsDetail.domain))]),a("v-uni-view",{staticClass:"ymBox1"},[t._v(t._s(t.goodsDetail.desc))]),a("v-uni-view",{staticClass:"ymCen "},[a("v-uni-view",{staticClass:"card"},[a("v-uni-view",{staticClass:"t1"},[t._v("当前价格：")]),a("v-uni-view",{staticClass:"t2 t22"},[t._v(t._s(t.goodsDetail.price))])],1),a("v-uni-view",{staticClass:"card"},[a("v-uni-view",{staticClass:"t1"},[t._v("过期时间：")]),a("v-uni-view",{staticClass:"t2"},[t._v(t._s(t.goodsDetail.delete_date))])],1),a("v-uni-view",{staticClass:"card"},[a("v-uni-view",{staticClass:"t1"},[t._v("域名有效期：")]),a("v-uni-view",{staticClass:"t2"},[t._v(t._s(t.goodsDetail.desc))])],1),a("v-uni-view",{staticClass:"card"},[a("v-uni-view",{staticClass:"t1"},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Bottom Center 提示文字",placement:"top"}},[a("i",{staticClass:"el-icon-warning-outline"})]),t._v("手机号码：")],1),a("v-uni-view",{staticClass:"t2"},[a("v-uni-text",{staticClass:"pho"},[t._v(t._s(t.userInfo.mobile))]),a("el-button",{attrs:{type:"primary",loading:!0,plain:!0,size:"mini"}},[t._v("获取验证码")])],1)],1),a("v-uni-view",{staticClass:"card"},[a("v-uni-view",{staticClass:"t1"},[t._v("验证码：")]),a("v-uni-view",{staticClass:"t2",staticStyle:{width:"150px"}},[a("el-input",{attrs:{size:"mini",placeholder:"请输入验证码"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}})],1)],1),a("v-uni-view",{staticClass:"card"},[a("v-uni-view",{staticClass:"t1"}),a("v-uni-view",{staticClass:"t2"},[a("el-checkbox",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleSelection(t.checked)}},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}}),a("v-uni-text",[t._v("勾选后，在60分钟内相同业务类型，不需要再次验证。")])],1)],1),a("v-uni-view",{staticClass:"card"},[a("v-uni-view",{staticClass:"t1"}),a("v-uni-view",{staticClass:"t2"},[a("el-button",{attrs:{type:"warning",size:"mini"}},[t._v("立即购买")]),a("v-uni-text",{staticClass:"x1"},[t._v("可用余额：")]),a("v-uni-text",{staticClass:"x2"},[t._v("￥0.00")]),a("v-uni-text",{staticClass:"x3"},[t._v("充值")])],1)],1)],1)],1)],1)},s=[]},b5de:function(t,e,a){"use strict";a.r(e);var i=a("d049"),n=a("9a0a");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);var c,o=a("f0c5"),l=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"a5861752",null,!1,i["a"],c);e["default"]=l.exports},c68d:function(t,e,a){var i=a("4d7f");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("4d03278a",i,!0,{sourceMap:!1,shadowMode:!1})},d049:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("qj-header"),a("qj-nav",{attrs:{navVal:"nav3"}}),a("bread-crumb",{attrs:{pages:[{name:"一口价",linkUrl:"/pages/nav3/n1_buy/index"},{name:"域名详情"}],separator:">"}}),a("v-uni-view",{staticClass:"f_cc_ls"},[a("v-uni-view",{staticClass:"core f_b"},[a("res-left"),a("res-right",{attrs:{goodsId:t.goodsId}})],1)],1),a("qj-footer")],1)},s=[]},d12e:function(t,e,a){"use strict";(function(t){var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("5530")),s=a("26cb"),c={components:{},props:{goodsId:{type:String,default:""}},computed:(0,n.default)({},(0,s.mapState)({userInfo:function(t){var e=t.user;return e.userInfo}})),data:function(){return{code:"",checked:!0,goodsDetail:{}}},mounted:function(){this.getDetail()},methods:{getDetail:function(){var t=this;t.$http("ym.ykjDetail",{id:t.goodsId}).then((function(e){1===e.code&&(t.goodsDetail=e.data)}))},toggleSelection:function(e){t.log(e)}}};e.default=c}).call(this,a("5a52")["default"])},d45c:function(t,e,a){"use strict";a.r(e);var i=a("aaa7"),n=a("883d");for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("9f76");var c,o=a("f0c5"),l=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"442000b8",null,!1,i["a"],c);e["default"]=l.exports},d9cb:function(t,e,a){"use strict";a.r(e);var i=a("4028"),n=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},e31f:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 页面宽度 */.rightBox[data-v-442000b8]{width:887px;background-color:#fff}.detail[data-v-442000b8]{padding:15px}.ymBox[data-v-442000b8]{font-size:22px;font-weight:700}.ymBox1[data-v-442000b8]{margin-top:10px}.ymCen[data-v-442000b8]{background-color:#f1f6ff;margin-top:20px}.ymCen .card[data-v-442000b8]{display:flex;align-items:center;font-size:14px;padding:10px 0}.ymCen .card .t1[data-v-442000b8]{width:25%;text-align:right;font-weight:700}.ymCen .card .t2[data-v-442000b8]{width:75%}.ymCen .card .t2 .pho[data-v-442000b8]{margin-right:30px}.ymCen .card .t2 .x1[data-v-442000b8]{margin-left:10px}.ymCen .card .t2 .x3[data-v-442000b8]{margin-left:20px;color:#488cff}.ymCen .card .t22[data-v-442000b8]{color:#fe2626}',""]),t.exports=e},f943:function(t,e,a){"use strict";var i=a("c68d"),n=a.n(i);n.a}}]);