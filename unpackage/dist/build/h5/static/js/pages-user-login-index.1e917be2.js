(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-login-index"],{"140c":function(a,t,e){"use strict";e.r(t);var r=e("fb04"),o=e("164f");for(var i in o)"default"!==i&&function(a){e.d(t,a,(function(){return o[a]}))}(i);e("46cc");var n,c=e("f0c5"),s=Object(c["a"])(o["default"],r["b"],r["c"],!1,null,"3bceb27b",null,!1,r["a"],n);t["default"]=s.exports},"164f":function(a,t,e){"use strict";e.r(t);var r=e("ec02"),o=e.n(r);for(var i in r)"default"!==i&&function(a){e.d(t,a,(function(){return r[a]}))}(i);t["default"]=o.a},1836:function(a,t,e){var r=e("24fb"),o=e("1de5"),i=e("ffa4");t=r(!1);var n=o(i);t.push([a.i,'@charset "UTF-8";\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 页面宽度 */.card-wrapper .card-wrap .form .form-item[data-v-3bceb27b], .card-wrapper .card-wrap .card-footer[data-v-3bceb27b], .card-wrapper .card-wrap .card-footer .links[data-v-3bceb27b]{display:flex;align-items:center}.bgBox[data-v-3bceb27b]{background-image:url('+n+");background-size:100% 100%;background-repeat:no-repeat;background-position:50%;width:100%;height:100vh;overflow:hidden;display:flex;align-items:center}.card-wrapper[data-v-3bceb27b]{background-color:#fff;width:470px;margin-left:230px;overflow:hidden;border-radius:15px}.card-wrapper .card-wrap[data-v-3bceb27b]{width:356px;margin:40px auto 80px}.card-wrapper .card-wrap .card-header[data-v-3bceb27b]{text-align:center}.card-wrapper .card-wrap .card-header .logo[data-v-3bceb27b]{width:60px;height:60px;border-radius:2px}.card-wrapper .card-wrap .card-header .title[data-v-3bceb27b]{font-size:30px;color:#333;padding-top:22px}.card-wrapper .card-wrap .form[data-v-3bceb27b]{display:block;margin:22px auto}.card-wrapper .card-wrap .form .form-item[data-v-3bceb27b]{height:50px;line-height:50px;margin-bottom:14px;border:1px solid #e0e0e0}.card-wrapper .card-wrap .form .form-item .input[data-v-3bceb27b]{flex:1;height:50px;line-height:50px;padding:0 14px;color:#333}.card-wrapper .card-wrap .form.form-smscode .country-code[data-v-3bceb27b]{width:60px;height:50px;line-height:50px;color:#333;text-align:center;border-right:1px solid #e0e0e0}.card-wrapper .card-wrap .form.form-smscode .btn-send[data-v-3bceb27b]{height:50px;line-height:50px;padding:0 15px;color:#003ab5;cursor:pointer;text-align:center;border-left:1px solid #e0e0e0}.card-wrapper .card-wrap .form.form-smscode .btn-send.disabled[data-v-3bceb27b]{cursor:default;color:#757575}.card-wrapper .card-wrap .form .btn-primary[data-v-3bceb27b]{background-color:#4088ff;height:50px;line-height:50px;margin-bottom:14px;color:#fff;cursor:pointer}.card-wrapper .card-wrap .card-footer[data-v-3bceb27b]{justify-content:space-between}.card-wrapper .card-wrap .card-footer .login-mode[data-v-3bceb27b]{color:#4088ff;cursor:pointer}.card-wrapper .card-wrap .card-footer .links .link[data-v-3bceb27b]{color:#757575;cursor:pointer}.card-wrapper .card-wrap .card-footer .links .link[data-v-3bceb27b]:hover{color:#4088ff}.card-wrapper .card-wrap .card-footer .links .separator[data-v-3bceb27b]{margin:0 5px;color:#e0e0e0}.copyright[data-v-3bceb27b]{position:fixed;bottom:20px;left:0;right:0;padding:10px;color:#757575;text-align:center}",""]),a.exports=t},"46cc":function(a,t,e){"use strict";var r=e("7688"),o=e.n(r);o.a},7688:function(a,t,e){var r=e("1836");"string"===typeof r&&(r=[[a.i,r,""]]),r.locals&&(a.exports=r.locals);var o=e("4f06").default;o("427737ae",r,!0,{sourceMap:!1,shadowMode:!1})},ec02:function(a,t,e){"use strict";var r=e("4ea4");e("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(e("5530")),i=e("26cb"),n={data:function(){return{loginMode:0,formData:{account:"",password:"",mobile:"",captcha:""},sendCode:{text:"获取验证码",disabled:!1}}},onLoad:function(a){a.callbackUrl&&(this.callbackUrl=a.callbackUrl)},methods:(0,o.default)((0,o.default)({},(0,i.mapActions)(["getUserInfo","setTokenAndBack"])),{},{accountLogin:function(){var a=this,t=this.formData,e=t.account,r=t.password;return this.$regular.phoneNumber.test(e)||this.$regular.email.test(e)?this.$regular.password.test(r)?(uni.showLoading({title:"登录中...",mask:!0}),void this.$http("user.login",{account:e,password:r},"").then((function(t){uni.hideLoading(),1===t.code&&(a.getUserInfo(t.data.userinfo.token),a.setTokenAndBack())}))):this.$util.showErrorMsg("请输入正确的密码"):this.$util.showErrorMsg("请输入正确的账号")},sendSMSCode:function(){var a=this,t=this.formData.mobile;if(!this.sendCode.disabled){if(!this.$regular.phoneNumber.test(t))return this.$util.showErrorMsg("请输入正确的手机号");this.sendCode.disabled=!0,this.sendCode.text="发送中...",new Promise((function(e,r){a.$http("user.send",{mobile:t,event:"mobilelogin"},"").then((function(t){1===t.code?a.$util.showErrorMsg(t.msg):r(t.msg)}))})).then((function(){var t=60,e=setInterval((function(){t<=0?(clearInterval(e),a.sendCode.disabled=!1,a.sendCode.text="重新发送"):(a.sendCode.text="重新发送（".concat(t,"）"),t--)}),1e3)})).catch((function(t){a.$util.showErrorMsg(t),a.sendCode.disabled=!1,a.sendCode.text="重新发送"}))}},captchaLogin:function(a){var t=this,e=this.formData,r=e.mobile,o=e.captcha;return this.$regular.phoneNumber.test(r)?this.$regular.captcha.test(o)?(uni.showLoading({title:"登录中...",mask:!0}),void this.$http("user.mobilelogin",{mobile:r,captcha:o},"").then((function(a){1===a.code&&(t.getUserInfo(a.data.userinfo.token),t.setTokenAndBack())}))):this.$util.showErrorMsg("请输入正确的验证码"):this.$util.showErrorMsg("请输入正确的手机号")}})};t.default=n},fb04:function(a,t,e){"use strict";var r;e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return r}));var o=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-uni-view",{staticClass:"bgBox"},[e("v-uni-view",{staticClass:"card-wrapper"},[e("v-uni-view",{staticClass:"card-wrap"},[e("v-uni-view",{staticClass:"card-header"},[e("v-uni-navigator",{staticStyle:{cursor:"pointer"},attrs:{url:"/pages/index"}},[e("v-uni-image",{staticClass:"logo",attrs:{src:"/static/image/common/logo.png"}})],1),e("v-uni-view",{staticClass:"title"},[a._v("账号登录")])],1),0==a.loginMode?[e("v-uni-form",{staticClass:"form form-password",on:{submit:function(t){arguments[0]=t=a.$handleEvent(t),a.accountLogin.apply(void 0,arguments)},keydown:function(t){if(!t.type.indexOf("key")&&a._k(t.keyCode,"enter",13,t.key,"Enter"))return null;arguments[0]=t=a.$handleEvent(t),a.accountLogin.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"form-item"},[e("v-uni-input",{staticClass:"input",attrs:{placeholder:"手机号码",maxlength:"30"},model:{value:a.formData.account,callback:function(t){a.$set(a.formData,"account",t)},expression:"formData.account"}})],1),e("v-uni-view",{staticClass:"form-item"},[e("v-uni-input",{staticClass:"input",attrs:{placeholder:"密码",maxlength:"20",password:!0},model:{value:a.formData.password,callback:function(t){a.$set(a.formData,"password",t)},expression:"formData.password"}})],1),e("v-uni-button",{staticClass:"btn-primary",attrs:{"form-type":"submit"}},[a._v("登录")])],1),e("v-uni-view",{staticClass:"card-footer"},[e("v-uni-view",{staticClass:"login-mode",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.loginMode=1}}},[a._v("手机短信登录")]),e("v-uni-view",{staticClass:"links"},[e("v-uni-navigator",{staticClass:"link",attrs:{url:"../register/index"}},[a._v("立即注册")]),e("v-uni-text",{staticClass:"separator"},[a._v("|")]),e("v-uni-navigator",{staticClass:"link",attrs:{url:"../password/retrieve"}},[a._v("找回密码")])],1)],1)]:[e("v-uni-form",{staticClass:"form form-smscode",on:{submit:function(t){arguments[0]=t=a.$handleEvent(t),a.captchaLogin.apply(void 0,arguments)},keydown:function(t){if(!t.type.indexOf("key")&&a._k(t.keyCode,"enter",13,t.key,"Enter"))return null;arguments[0]=t=a.$handleEvent(t),a.captchaLogin.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"form-item"},[e("v-uni-view",{staticClass:"country-code"},[a._v("+86")]),e("v-uni-input",{staticClass:"input",attrs:{placeholder:"手机号码",maxlength:"11",type:"number"},model:{value:a.formData.mobile,callback:function(t){a.$set(a.formData,"mobile",t)},expression:"formData.mobile"}})],1),e("v-uni-view",{staticClass:"form-item"},[e("v-uni-input",{staticClass:"input",attrs:{placeholder:"短信验证码",maxlength:"6",type:"number"},model:{value:a.formData.captcha,callback:function(t){a.$set(a.formData,"captcha",t)},expression:"formData.captcha"}}),e("v-uni-view",{staticClass:"btn-send",class:{disabled:a.sendCode.disabled},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.sendSMSCode.apply(void 0,arguments)}}},[a._v(a._s(a.sendCode.text))])],1),e("v-uni-button",{staticClass:"btn-primary",attrs:{"form-type":"submit"}},[a._v("立即登录")])],1),e("v-uni-view",{staticClass:"card-footer"},[e("v-uni-view",{staticClass:"login-mode",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.loginMode=0}}},[a._v("账号密码登录")])],1)]],2)],1)],1)},i=[]},ffa4:function(a,t,e){a.exports=e.p+"static/img/loginBg.2e6dc352.png"}}]);