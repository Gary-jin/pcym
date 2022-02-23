// 挂载变量
import {
	API_URL,
	IMG_URL
} from '../env.js';
import http from '@/shopro/request';

const install = Vue => {
	Vue.prototype.$API_URL = API_URL;
	Vue.prototype.$IMG_URL = IMG_URL;
	// 挂载请求
	Vue.prototype.$http = http;
}

export async function init(options) {
	
	
}

export default {
	install
}
