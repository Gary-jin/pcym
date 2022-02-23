<template>
	<view class="breadcrumb-wrapper" v-if="breadcrumbs.length > 0">
		<view class="wrap">
			<text>位置：</text>
			<block v-for="(item, index) in breadcrumbs" :key="index">
				<text :class="['breadcrumb', {'enabled': item.linkUrl}]" @click="goPage(item.linkUrl)">
					{{item.name}}
				</text>
				<text v-if="index < breadcrumbs.length - 1" class="separator">{{separator}}</text>
			</block>

		</view>
	</view>
</template>

<script>
	export default {
		props: {
			pages: {
				type: Array | String,
				default () {
					return [];
				}
			},
			separator: {
				type: String,
				default: '>'
			}
		},
		data() {
			return {
				breadcrumbs: this.pages
			}
		},
		created() {
			if (typeof this.breadcrumbs === 'string') {
				this.breadcrumbs = [{
					name: this.breadcrumbs
				}];
			}
			this.breadcrumbs.unshift({
				name: '首页',
				linkUrl: '/pages/index'
			});
		},
		methods: {
			goPage(url) {
				if (url) {
					uni.navigateTo({
						url: url
					});
				}
			}
		}
	}
</script>

<style lang="scss">
	.breadcrumb-wrapper {

		.wrap {
			width: $page-width;
			margin: 0 auto;
			font-size: 12px;

			.breadcrumb {
				color: #757575;
				line-height: 40px;

				&.enabled {
					cursor: pointer;

					&:hover {
						color: #1EA0FF;
					}
				}
			}
			

			.separator {
				margin: 0 .5em;
				color: #b0b0b0;
				line-height: 40px;
			}
		}
	}
</style>
