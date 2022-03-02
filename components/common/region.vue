<template>
	<view class="regionBox">
		<el-select :value-key="'label'" @change="countryVal" v-model="form.country" size="small" >
			<el-option
				v-for="(item,index) in countryList"
				:key="index"
				:label="item"
				:value="index">
			</el-option>
		</el-select>
		<el-select @change="cityVal" v-model="form.city" size="small" >
			<el-option
				v-for="(item,index) in cityList"
				:key="index"
				:label="item"
				:value="index">
			</el-option>
		</el-select>
		<el-select @change="siteVal" v-model="form.site" size="small" >
			<el-option
				v-for="(item,index) in siteList"
				:key="index"
				:label="item"
				:value="index">
			</el-option>
		</el-select>
	</view>
</template>

<script>
	import area from '@/common/config/common/areas.js';
	export default {
		data() {
			return {
				address:area.address,
				countryList:[],
				cityList:[],
				siteList:[],
				form:{
					country:'中国',
					city:'北京',
					site:'北京市'
				},
				areN:'0',
				addressList:{
					country:'',
					city:'',
					site:''
				}
			}
		},
		mounted() {
			this.countryList = this.address['0'];
			this.cityList = this.address['0_0'];
			this.siteList = this.address['0_0_0'];
		},
		methods: {
			// 国家
			countryVal(e){
				let cc = '0_'+e;
				let ss = cc +'_0';
				this.areN = cc
				
				this.cityList = this.address[cc];
				this.siteList = this.address[ss];
				
				this.form.city = this.cityList[0];
				this.form.site = this.siteList[0];
				
				this.getAddress()
			},
			// 省
			cityVal(e){
				let ss = this.areN+'_'+ e.toString();
				this.siteList = this.address[ss];
				this.form.site = this.siteList[0];
				this.getAddress()
			},
			siteVal(e){
				this.getAddress()
			},
			getAddress(){
				let form = this.form;
				if(typeof form.country === 'number'){
					this.addressList.country = this.countryList[form.country]
				} else{
					this.addressList.country = form.country
				}
				
				if(typeof form.city === 'number'){
					this.addressList.city = this.cityList[form.city]
				} else{
					this.addressList.city = form.city
				}
				
				if(typeof form.site === 'number'){
					this.addressList.site = this.siteList[form.site]
				} else{
					this.addressList.site = form.site
				}
				
				
				this.$emit("getAddress",this.addressList)
			}
		}
	}
</script>
<style lang="scss" scoped>
	.regionBox{
		display: flex;
		justify-content: space-between;
		.el-select{
			width: 33%;
		}
	}
</style>