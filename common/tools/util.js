
import store from '@/shopro/store/index.js'
import {API_URL} from '@/env'
export default {
	/**
	 * 获取随机数
	 */
	getRandomStr(range = 32) {
		let str = '',
			arr = [];
		// 生成字符数组
		for (let i = 48; i <= 57; i++) arr.push(String.fromCharCode(i));
		for (let i = 97; i <= 122; i++) arr.push(String.fromCharCode(i));
		for (let i = 65; i <= 90; i++) arr.push(String.fromCharCode(i));
		// 生成随机数
		for (let i = 0; i < range; i++) {
			const index = Math.round(Math.random() * (arr.length - 1));
			str += arr[index];
		}
		return str;
	},
	/**
	 * 计算时间差
	 */
	timeDiff(startTime, endTime) {
		// 计算相差的时间
		const timeDiff = endTime.getTime() - startTime.getTime();
		if (timeDiff <= 0) return false;

		const totalSeconds = Math.floor(timeDiff / 1000);
		const hours = Math.floor(totalSeconds / 60 / 60);
		const minutes = Math.floor((totalSeconds - hours * 60 * 60) / 60);
		const seconds = Math.floor(totalSeconds - hours * 60 * 60 - minutes * 60);
		const timeDiffArray = [hours, minutes, seconds].map(e => {
			return e < 10 ? '0' + e : e;
		});
		return timeDiffArray;
	},
	/**
	 * 提示错误信息
	 */
	showErrorMsg(msg) {
		uni.showToast({
			title: msg,
			icon: 'none'
		});
		return false;
	},
	/**
	 * 判断textarea有效行数
	 */
	textareaLength(val){
		let list = val.split(/\r?\n|\r/);
		let str = []
		list.forEach((item,index)=>{
			if(item){
				str.push(item)
			}
		})
		return str.length;
	},
	/**
	 * 转换多行输入
	 */
	 textareaList(val){
		let list = val.split(/\r?\n|\r/);
		let str = []
		list.forEach((item,index)=>{
			if(item){
				str.push(item)
			}
		})
		return str;
	},
	/**
	 * 
	 */
	formPath(val){
		let route = '/'+(getCurrentPages()[getCurrentPages().length - 1]).route
		let url = window.location.href;
		let options = ''
		let w = ''
		if (url.indexOf("?") != -1) {
			options = url.split("?")[1]
			w = '?'
		}

		let path = route +w+ options 
		uni.setStorageSync('fromLogin',path);
		return ;
	},
	/** 
	 * 登录提示
	*/
	loginPopup(){
		store.dispatch('showAuthModal');
	},
	/**
	 * 图片处理-上传图片
	 */
		uploadImage(api, url) {
			console.log(api, url);
			let config_url = API_URL;
			uni.showLoading({
				title: '上传中'
			});
			let header = {}
			let token = uni.getStorageSync('token');
			header.token = token
			return new Promise((resolve, reject) => {
				uni.uploadFile({
					url: config_url + api,
					filePath: url,
					name: 'file',
					header: header,
					success: res => {
						res = JSON.parse(res.data);
						console.log(JSON.stringify(res) + "意见反馈ONE");
						if (res.code === 1) {
							uni.hideLoading()
							uni.showToast({
								title: '上传成功',
								icon: 'none'
							});
							resolve(res.data)
						} else {
							uni.hideLoading()
							uni.showModal({
								title: '上传失败',
								content: res.msg
							});
						}
					}
				});
			}).catch(e => {
				reject(e)
			})
		},
	/**
		 * 剩余时间格式化
		 * @param {Number} t - 剩余多少秒
		 * @return {Object}  format - 格式后的天时分秒对象
		 */
		format(t) {
			let format = {
				d: '00',
				h: '00',
				m: '00',
				s: '00'
			};
			if (t > 0) {
				let d = Math.floor(t / 86400);
				let h = Math.floor((t / 3600) % 24);
				let m = Math.floor((t / 60) % 60);
				let s = Math.floor(t % 60);
				format.d = d < 10 ? '0' + d : d;
				format.h = h < 10 ? '0' + h : h;
				format.m = m < 10 ? '0' + m : m;
				format.s = s < 10 ? '0' + s : s;
			}
			return format;
		},
		formatsym(t) {
			let format = {
				d: '00',
				h: '00',
				m: '00',
				s: '00'
			};
			if (t > 0) {
				let d = Math.floor(t / 86400);
				let h = Math.floor((t / 3600) % 24);
				let m = Math.floor((t / 60) % 60);
				let s = Math.floor(t % 60);
				format.d = d < 10 ?  d : d;
				format.h = h < 10 ? '0' + h : h;
				format.m = m < 10 ? '0' + m : m;
				format.s = s < 10 ? '0' + s : s;
			}
			return format.d + '天' + format.h+ '时' + format.m + '分' ;
		},
}
