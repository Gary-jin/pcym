import Vue from 'vue';
// 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App';

import util from './common/tools/util.js';
import regular from './common/tools/regular.js';

import shopro from "@/shopro";
import store from "@/shopro/store";

// 初始化全局JS弹窗
import './components/common/alert';

Vue.use(ElementUI);
Vue.use(shopro);

// 全局组件
Vue.component('qj-header', () => import('@/components/common/header.vue'));
Vue.component('qj-nav', () => import('@/components/common/topNav.vue'));
Vue.component('qj-footer', () => import('@/components/common/footer.vue'));
// 弹窗
Vue.component('qj-dialog', () => import('@/components/common/dialog.vue'));
// 面包屑 
Vue.component('bread-crumb', () => import('@/components/common/bread-crumb.vue'));

// 全局变量
Vue.prototype.$util = util;
Vue.prototype.$regular = regular;

Vue.config.productionTip = false;

App.mpType = 'app';

new Vue({
	store,
	...App
}).$mount();
