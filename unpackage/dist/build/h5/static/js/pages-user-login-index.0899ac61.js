(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-login-index"],{"1e4b":function(a,t,r){"use strict";var e=r("e8b9"),o=r.n(e);o.a},2124:function(a,t,r){"use strict";r.r(t);var e=r("843c"),o=r("3fe6");for(var i in o)"default"!==i&&function(a){r.d(t,a,(function(){return o[a]}))}(i);r("1e4b");var n,s=r("f0c5"),c=Object(s["a"])(o["default"],e["b"],e["c"],!1,null,"6c9a1785",null,!1,e["a"],n);t["default"]=c.exports},"3fe6":function(a,t,r){"use strict";r.r(t);var e=r("5d9e"),o=r.n(e);for(var i in e)"default"!==i&&function(a){r.d(t,a,(function(){return e[a]}))}(i);t["default"]=o.a},"59a6":function(a,t,r){var e=r("24fb");t=e(!1),t.push([a.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 页面宽度 */.card-wrapper .card-wrap .form .form-item[data-v-6c9a1785], .card-wrapper .card-wrap .card-footer[data-v-6c9a1785], .card-wrapper .card-wrap .card-footer .links[data-v-6c9a1785]{display:flex;align-items:center}uni-page-body[data-v-6c9a1785]{background-color:#f5f5f5}.card-wrapper[data-v-6c9a1785]{background-color:#fff;width:660px;margin:80px auto;overflow:hidden}.card-wrapper .card-wrap[data-v-6c9a1785]{width:356px;margin:40px auto 80px}.card-wrapper .card-wrap .card-header[data-v-6c9a1785]{text-align:center}.card-wrapper .card-wrap .card-header .logo[data-v-6c9a1785]{width:60px;height:60px;border-radius:2px}.card-wrapper .card-wrap .card-header .title[data-v-6c9a1785]{font-size:30px;color:#333;padding-top:22px}.card-wrapper .card-wrap .form[data-v-6c9a1785]{display:block;margin:22px auto}.card-wrapper .card-wrap .form .form-item[data-v-6c9a1785]{height:50px;line-height:50px;margin-bottom:14px;border:1px solid #e0e0e0}.card-wrapper .card-wrap .form .form-item .input[data-v-6c9a1785]{flex:1;height:50px;line-height:50px;padding:0 14px;color:#333}.card-wrapper .card-wrap .form.form-smscode .country-code[data-v-6c9a1785]{width:60px;height:50px;line-height:50px;color:#333;text-align:center;border-right:1px solid #e0e0e0}.card-wrapper .card-wrap .form.form-smscode .btn-send[data-v-6c9a1785]{height:50px;line-height:50px;padding:0 15px;color:#003ab5;cursor:pointer;text-align:center;border-left:1px solid #e0e0e0}.card-wrapper .card-wrap .form.form-smscode .btn-send.disabled[data-v-6c9a1785]{cursor:default;color:#757575}.card-wrapper .card-wrap .form .btn-primary[data-v-6c9a1785]{background-color:#ff6700;height:50px;line-height:50px;margin-bottom:14px;color:#fff;cursor:pointer}.card-wrapper .card-wrap .card-footer[data-v-6c9a1785]{justify-content:space-between}.card-wrapper .card-wrap .card-footer .login-mode[data-v-6c9a1785]{color:#ff6700;cursor:pointer}.card-wrapper .card-wrap .card-footer .links .link[data-v-6c9a1785]{color:#757575;cursor:pointer}.card-wrapper .card-wrap .card-footer .links .link[data-v-6c9a1785]:hover{color:#ff6700}.card-wrapper .card-wrap .card-footer .links .separator[data-v-6c9a1785]{margin:0 5px;color:#e0e0e0}.copyright[data-v-6c9a1785]{position:fixed;bottom:20px;left:0;right:0;padding:10px;color:#757575;text-align:center}body.?%PAGE?%[data-v-6c9a1785]{background-color:#f5f5f5}',""]),a.exports=t},"5d9e":function(a,t,r){"use strict";r("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{loginMode:0,formData:{account:"",password:"",phone:"",captcha:""},sendCode:{text:"获取验证码",disabled:!1}}},onLoad:function(a){a.callbackUrl&&(this.callbackUrl=a.callbackUrl)},methods:{accountLogin:function(){var a=this,t=this.formData,r=t.account,e=t.password;return this.$regular.phoneNumber.test(r)||this.$regular.email.test(r)?this.$regular.password.test(e)?(uni.showLoading({title:"登录中...",mask:!0}),void this.$util.request("/login",{account:r,password:e},(function(t){uni.hideLoading(),"ok"==t.state?a.loginSuccess(t.loginUser):a.$util.showErrorMsg(t.msg)}))):this.$util.showErrorMsg("请输入正确的密码"):this.$util.showErrorMsg("请输入正确的账号")},sendSMSCode:function(){var a=this;if(!this.sendCode.disabled){if(!this.$regular.phoneNumber.test(this.formData.phone))return this.$util.showErrorMsg("请输入正确的手机号");this.sendCode.disabled=!0,this.sendCode.text="发送中...",new Promise((function(t,r){a.$util.request("/login/sendSMSCaptcha",{phone:a.formData.phone},(function(a){"ok"==a.state?t():r(a.msg)}))})).then((function(){var t=60,r=setInterval((function(){t<=0?(clearInterval(r),a.sendCode.disabled=!1,a.sendCode.text="重新发送"):(a.sendCode.text="重新发送（".concat(t,"）"),t--)}),1e3)})).catch((function(t){a.$util.showErrorMsg(t),a.sendCode.disabled=!1,a.sendCode.text="重新发送"}))}},captchaLogin:function(a){var t=this,r=this.formData,e=r.phone,o=r.captcha;return this.$regular.phoneNumber.test(e)?this.$regular.captcha.test(o)?(uni.showLoading({title:"登录中...",mask:!0}),void this.$util.request("/login/captchaLogin",{phone:e,captcha:o},(function(a){uni.hideLoading(),"ok"==a.state?t.loginSuccess(a.loginUser):t.$util.showErrorMsg(a.msg)}))):this.$util.showErrorMsg("请输入正确的验证码"):this.$util.showErrorMsg("请输入正确的手机号")},loginSuccess:function(a){this.$store.commit("login",a),this.$cart.syncCart(),uni.redirectTo({url:this.callbackUrl||"/pages/index"})}}};t.default=e},"843c":function(a,t,r){"use strict";var e;r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return e}));var o=function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("v-uni-view",[r("v-uni-view",{staticClass:"card-wrapper"},[r("v-uni-view",{staticClass:"card-wrap"},[r("v-uni-view",{staticClass:"card-header"},[r("v-uni-navigator",{staticStyle:{cursor:"pointer"},attrs:{url:"/pages/index"}},[r("img",{staticClass:"logo",attrs:{src:"/static/image/common/logo.png"}})]),r("v-uni-view",{staticClass:"title"},[a._v("账号登录")])],1),0==a.loginMode?[r("v-uni-form",{staticClass:"form form-password",on:{submit:function(t){arguments[0]=t=a.$handleEvent(t),a.accountLogin.apply(void 0,arguments)},keydown:function(t){if(!t.type.indexOf("key")&&a._k(t.keyCode,"enter",13,t.key,"Enter"))return null;arguments[0]=t=a.$handleEvent(t),a.accountLogin.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"form-item"},[r("v-uni-input",{staticClass:"input",attrs:{placeholder:"邮箱/手机号码",maxlength:"30"},model:{value:a.formData.account,callback:function(t){a.$set(a.formData,"account",t)},expression:"formData.account"}})],1),r("v-uni-view",{staticClass:"form-item"},[r("v-uni-input",{staticClass:"input",attrs:{placeholder:"密码",maxlength:"20",password:!0},model:{value:a.formData.password,callback:function(t){a.$set(a.formData,"password",t)},expression:"formData.password"}})],1),r("v-uni-button",{staticClass:"btn-primary",attrs:{"form-type":"submit"}},[a._v("登录")])],1),r("v-uni-view",{staticClass:"card-footer"},[r("v-uni-view",{staticClass:"login-mode",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.loginMode=1}}},[a._v("手机短信登录/注册")]),r("v-uni-view",{staticClass:"links"},[r("v-uni-navigator",{staticClass:"link",attrs:{url:"../register/index"}},[a._v("立即注册")]),r("v-uni-text",{staticClass:"separator"},[a._v("|")]),r("v-uni-navigator",{staticClass:"link",attrs:{url:"../password/retrieve"}},[a._v("找回密码")])],1)],1)]:[r("v-uni-form",{staticClass:"form form-smscode",on:{submit:function(t){arguments[0]=t=a.$handleEvent(t),a.captchaLogin.apply(void 0,arguments)},keydown:function(t){if(!t.type.indexOf("key")&&a._k(t.keyCode,"enter",13,t.key,"Enter"))return null;arguments[0]=t=a.$handleEvent(t),a.captchaLogin.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"form-item"},[r("v-uni-view",{staticClass:"country-code"},[a._v("+86")]),r("v-uni-input",{staticClass:"input",attrs:{placeholder:"手机号码",maxlength:"11",type:"number"},model:{value:a.formData.phone,callback:function(t){a.$set(a.formData,"phone",t)},expression:"formData.phone"}})],1),r("v-uni-view",{staticClass:"form-item"},[r("v-uni-input",{staticClass:"input",attrs:{placeholder:"短信验证码",maxlength:"6",type:"number"},model:{value:a.formData.captcha,callback:function(t){a.$set(a.formData,"captcha",t)},expression:"formData.captcha"}}),r("v-uni-view",{staticClass:"btn-send",class:{disabled:a.sendCode.disabled},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.sendSMSCode.apply(void 0,arguments)}}},[a._v(a._s(a.sendCode.text))])],1),r("v-uni-button",{staticClass:"btn-primary",attrs:{"form-type":"submit"}},[a._v("立即登录/注册")])],1),r("v-uni-view",{staticClass:"card-footer"},[r("v-uni-view",{staticClass:"login-mode",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.loginMode=0}}},[a._v("账号密码登录")])],1)]],2)],1),r("v-uni-view",{staticClass:"copyright"},[a._v("小米公司版权所有-京公网安备xxxxxxxxx号")])],1)},i=[]},e8b9:function(a,t,r){var e=r("59a6");"string"===typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);var o=r("4f06").default;o("1778bc08",e,!0,{sourceMap:!1,shadowMode:!1})}}]);