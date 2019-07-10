<template>
	<view class="m">
		<image src="/static/assests/start-page-bg.jpg" mode="widthFix"></image>
		<view class="m-box" :style="{height: footHeight}">
			<view class="btn">
				<button open-type="getUserInfo" @getuserinfo="userInfoEvent">微信授权登录</button>
				<view class="m-box-tip">您使用的信息不会向微信好友展示</view>
			</view>
			<view class="m-box-ft">
				<view>点击登录即可同意信书的</view>
				<navigator url="#">用户协议与隐私条款</navigator>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				footHeight: "500px",
			}
		},
		onLoad(opitons) {
			uni.getSystemInfo().then(([err, {windowHeight}]) => {
				this.footHeight = 428 * windowHeight / 1206 + 'px'
			})
		},
		methods: {
			userInfoEvent({detail}) {
				let {encryptedData, iv, rawData, signature, userInfo} = detail,
					vm = this
				uni.setStorage({
					key: 'userInfo',
					data: userInfo,
				}).then(([err, e]) => {
					uni.navigateTo({
						url: '/pages/index/registerAndLogin'
					})
				})
			},
		}
	}
</script>
<style lang="less" scoped>
	@import "../../static/config.less";
	.m {
		&-box {
			position: fixed;
			bottom: 0;
			left: 0;
			width: 750upx;
			@{bdra}: 50upx 50upx 0 0;
			@{bgc}: #fff;
			z-index: 10;
			@{fs}: 18upx;
			color: @c9;
			display: flex;
			@{fd}: column;
			@{jc}: space-between;
			&-ft {
				padding-bottom: 20upx;
				display: flex;
				@{jc}: center;
				navigator {
					text-decoration: underline;
					margin: 0 4upx;
				}
			}
			&-tip {
				text-align: center;
				margin-top: 20upx;
			}
			button {
				margin-top: 136upx;
				width: 520upx;
				height: 80upx;
				@{bdra}: 40upx;
				@{bgc}: @baseColor;
				color: #fff;
				@{fs}: 30upx;
			}
		}
	}
	image {
		width: 750upx;
		position: fixed;
		left: 0;
		top: 0;
		z-index: -1;
	}
</style>
