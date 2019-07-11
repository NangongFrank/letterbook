<template>
	<view class="m" :style="{height: pageHeight}">
		<!-- <view class="m-way">
			<view class="m-way-tt">一键授权手机号</view>
			<view class="m-way-nav">使用你在微信授权的手机号</view>
			<button open-type="getPhoneNumber" @getphonenumber="phoneEvent">立即授权</button>
		</view> -->
		<view class="m-free">
			<!-- <view class="free-hr"></view> -->
			<view style="height: 300upx;"></view>
			<view class="m-free-tt">手动输入手机号</view>
			<view class="m-free-nav">密码为手机号后六位</view>
			<view class="m-free-phone">
				<view class="label" @tap="showList">
					<view v-text="phoneSide"></view>
					<view class="iconfont icon-arrow-right"></view>
				</view>
				<view class="value">
					<input type="number" v-model="phone" placeholder="手机号码"/>
					<view>
						<view class="btn send" @tap="sendShortMsg" v-if="cacheStatus && numStatus">发送验证码</view>
						<view class="btn" v-else>发送验证码</view>
					</view>
				</view>
			</view>
			<view class="m-free-check">
				<view class="label" style="visibility: hidden;"></view>
				<view class="value">
					<input type="number" v-model="checkNum" placeholder="输入验证码"/>
				</view>
				<view class="to-time" v-if="reduceTime" v-text="reduceTime"></view>
			</view>
			<view class="my-btn done" @tap="login" v-if="status">立即登录</view>
			<view class="my-btn" v-else>立即登录</view>
			
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				openid: '',
				phoneSide: '+86',
				phone: '',
				checkNum: '',
				cacheStatus: true,
				pageHeight: '603px',
				reduceTime: 0,
			}
		},
		onLoad({openid}) {
			uni.getSystemInfo().then(([err, {windowHeight}]) => {
				this.pageHeight = windowHeight + 'px'
			})
			// uni.login({provider: 'weixin'})
		},
		methods: {
			getOpenId() {
				// 获取用户的openid
				uni.login({
					provider: 'weixin',
				}).then(([err, {code}]) => {
					let appid = 'wx132b20834f422e55',
						secret = '40cd2c8443bb04808df2d5404f79e83e'
					uni.request({
						url: 'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code',
						data: {
							appid,
							js_code: code,
							secret,
							grant_type: 'authorization_code',
						}
					}).then(([err, {data}]) => {
						this.openid = data.openid
					})
				})
			},
			phoneEvent({detail}) {
				let {encryptedData, iv, errMsg} = detail
				if(errMsg == 'getPhoneNumber:ok') {
					// 成功获取有关签证信息
				} else {
					// getPhoneNumber:fail:user deny
					// 用户拒绝
				}
			},
			login() {
				uni.navigateTo({
					// 直接走个人主页
					url: '/pages/children/home/index',
				})
			},
			sendShortMsg() {
				let vm = this
				vm.cacheStatus = false
				vm.reduceTime = 60
				let timer = setInterval(e => {
					vm.reduceTime --
					if(!vm.reduceTime) {
						vm.cacheStatus = true
						clearInterval(timer)
						return
					}
				}, 1000)
				setTimeout(e => {
					vm.cacheStatus = true
				}, 60000)
			},
			showList() {
				uni.showActionSheet({
					itemList: ['+86', '+886', '+852', '+853'],
				}).then(([err, {tapIndex}]) => {
					switch(tapIndex) {
						case 0:
						this.phoneSide = '+86'
						break
						case 1:
						this.phoneSide = '+886'
						break
						case 2:
						this.phoneSide = '+852'
						break
						case 3:
						this.phoneSide = '+853'
						break
					}
				})
			},
		},
		computed: {
			status() {
				let vm = this,
					phone = vm.phone,
					check = vm.checkNum
				if(/^1\d{10}/.test(phone) && check) {
					return true
				} else {
					return false
				}
			},
			numStatus() {
				let vm = this
				if(/^1\d{10}/.test(vm.phone)) {
					return true
				} else {
					return false
				}
			},
		},
	}
</script>
<style lang="less" scoped>
	@import "../../static/config.less";
	.to-time {
		position: absolute;
		right: 10upx;
		top: 50%;
		transform: translateY(-50%);
		width: 60upx;
		height: 30upx;
		@{fs}: 24upx;
		color: @c6;
		display: flex;
		@{ai}: center;
		@{jc}: center;
	}
	.m {
		display: flex;
		@{fd}: column;
		@{jc}: space-between;
		&-free {
			padding: 20upx 120upx 0;
			@{fs}: 30upx;
			&-phone,
			&-check {
				display: flex;
				padding: 12upx 0;
				position: relative;
			}
			.value,
			.label {
				display: flex;
				position: relative;
				@{ai}: center;
				border-bottom: 2upx solid #999;
			}
			.label {
				padding-right: 32upx;
				width: 64upx;
				margin-right: 30upx;
			}
			.value {
				flex: 1;
			}
			.iconfont {
				@{fs}: 24upx;
				position: absolute;
				right: 0;
				top: 50%;
				transform: translateY(-50%) rotate(90deg);
			}
			input {
				flex: 1;
			}
			.btn {
				@{fs}: 22upx;
				padding: 4upx 8upx;
				@{bdra}: 10upx;
			}
			&-tt {
				@{fs}: 48upx;
				padding-top: 30upx;
			}
			&-nav {
				@{fs}: 18upx;
				color: @c9;
				margin-top: 12upx;
			}
		}
		&-way {
			margin-top: 120upx;
			padding: 0 120upx;
			&-tt {
				@{fs}: 48upx;
			}
			&-nav {
				@{fs}: 18upx;
				color: @c9;
				margin-top: 12upx;
			}
			button {
				margin-top: 94upx;
				@{bgi}: linear-gradient(to right, #6fd6e7, #6dbcc9);
				@{bdra}: 40upx;
				height: 80upx;
				color: #fff;
				@{fs}: 30upx;
			}
		}
	}
	.btn {
		border: 2upx solid #f3f3f3;
		color: @c9;
	}
	.send {
		@{bgc}: @baseColor;
		color: #fff;
	}
	.my-btn {
		@{bgc}: #999;
		@{bdra}: 40upx;
		height: 80upx;
		width: 520upx;
		color: #fff;
		display: flex;
		@{ai}: center;
		@{jc}: center;
		margin: 20upx 0 80upx;
	}
	.done {
		@{bgc}: @baseColor;
	}
	.free-hr {
		height: 2upx;
		@{bgc}: #999;
		position: relative;
		@{fs}: 24upx;
		color: @c6;
		&::before {
			content: "&";
			position: absolute;
			left: -48upx;
			top: 50%;
			transform: translateY(-50%) rotate(-10deg);
		}
	}
</style>
