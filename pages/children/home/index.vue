<template>
	<view class="g">
		<view style="height: 44upx;" v-if="navStatus"></view>
		<view class="show-info" v-if="isMyself">
			<view @tap="showSheet">发布</view>
		</view>
		<view class="m">
			<view class="m-tt">
				<view class="m-tt-user">
					<image :src="userInfo.cover"></image>
					<view class="m-tt-user-info">
						<view class="name" v-text="userInfo.nickname"></view>
						<view class="profession">
							<view v-for="(value, index) in userExtraInfo.typeList" 
							:key="index" 
							v-text="value"></view>
						</view>
						<view class="side">
							<view class="right-bold" v-text="userInfo.side"></view>
							<view class="right-bold" v-text="userInfo.gender == 1 ? '男' : '女'"></view>
							<view class="right-bold" v-text="userInfo.constellatory"></view>
							<view v-text="userInfo.height + 'cm'"></view>
						</view>
					</view>
				</view>
			</view>
			<view class="m-nav">
				<view v-for="(value, index) in userInfo.tagList" 
				:key="index" 
				v-text="value.name"></view>
			</view>
			<view class="m-info">
				<view class="m-info-left">
					<view class="tag">
						<view class="tag-num" v-text="userExtraInfo.focusCount"></view>
						<view>关注</view>
					</view>
					<view class="tag center-tag">
						<view class="tag-num" v-text="userExtraInfo.fansCount"></view>
						<view>粉丝</view>
					</view>
					<view class="tag">
						<view class="tag-num" v-text="userExtraInfo.goodCount"></view>
						<view>点赞</view>
					</view>
				</view>
				<view class="m-info-right" @tap="focusEvent">
					<view class="iconfont icon-add" data-tag="focus" v-if="!isFocus">关注</view>
					<view class="focused" data-tag="focused" v-else>已关注</view>
				</view>
			</view>
			<view class="m-banner">
				<view class="m-banner-tt">
					<view class="head">个人认证</view>
					<image src="/static/assests/home/truth-role.png"></image>
				</view>
				<view class="m-banner-ct">
					<view class="m-banner-ct-li"
					v-for="(value, index) in userExtraInfo.checkList"
					:key="index">
						<view class="iconfont icon-dot"></view>
						<view class="text" v-text="value.name + value.remark"></view>
					</view>
				</view>
			</view>
		</view>
		<view class="photo" v-if="photoList.length > 0">
			<view class="photo-tt">相册</view>
			<scroll-view scroll-x >
				<view v-for="(value, index) in photoList"
				@tap="previewImg(index)"
				:key="index">
					<image :src="value.imgUrl" mode="aspectFill"></image>
				</view>
			</scroll-view>
		</view>
		<view class="nav"></view>
		<view class="n" :class="{ps: navStatus}">
			<scroll-view scroll-x>
				<view v-for="(value, index) in nList"
				:key="index"
				@tap="checkThis(value, index)"
				:class="{active: index == nIndex}"
				:data-tag="index"
				v-text="value.name"></view>
			</scroll-view>
		</view>
		<view class="c">
			<view v-if="nIndex == 0">
				<topic-element/>
			</view>
			<view v-if="nIndex == 1">
				<video-element />
			</view>
			<view v-if="nIndex == 2">
				<chapter-element />
			</view>
			<view v-if="nIndex == 3">
				<store-element />
			</view>
			<view v-if="nIndex == 4">
				<appointment-element />
			</view>
		</view>
		<view style="height: 100upx; background: #fff;"></view>
		<view class="f" @tap="jumpEvent">
			<view v-if="!isMyself" data-tag="write">写信</view>
			<view v-else data-tag="read">我的信书</view>
		</view>
	</view>
</template>
<script>
	import TopicElement from '@/components/home/Topic'
	import StoreElement from '@/components/home/Store'
	import ChapterElement from '@/components/home/Chapter'
	import VideoElement from '@/components/home/Video'
	import AppointmentElement from '@/components/home/Appointment'
	import {getUserInfo, 
			imgHost, 
			getUserExtraInfo, 
			isFocused, 
			updateFocusState,
			} from '@/extends/hosts'
	export default {
		components: {
			TopicElement,
			StoreElement,
			ChapterElement,
			VideoElement,
			AppointmentElement,
		},
		data() {
			return {
				nList: [{
					name: '话题',
					}, {
					name: '视频',
					}, {
					name: '文章',
					}, {
					name: '门店',
					}, {
					name: '赴约',
				}],
				nIndex: 0,
				userId: 0,
				myId: 0,
				isFocus: false,
				isMyself: false,
				navStatus: false,
				photoList: [{
					imgUrl: '/static/assests/home/chapter/cover01.jpg',
					}, {
					imgUrl: '/static/assests/home/chapter/cover02.jpg',
					}, {
					imgUrl: '/static/assests/home/chapter/cover03.jpg',
					}, {
					imgUrl: '/static/assests/home/chapter/cover02.jpg',
					}, {
					imgUrl: '/static/assests/home/chapter/cover01.jpg',
				}],
				userInfo: {
					nickname: '森巴兔-lucker',
					cover: '/static/assests/home/home-head.jpg',
					side: '湖南-长沙',
					gender: 1,
					height: 165,
					constellatory: '白羊座',
					tagList: [{
						name: '摄影',
						}, {
						name: '绘画',
						}, {
						name: '电影',
						}, {
						name: '美食',
						}, {
						name: '时尚达人',
					}],
				},
				userExtraInfo: {
					checkList: [{
						name: '2013年考取高级茶艺师证书',
						remark: '',
						}, {
						name: '2017年考取高级茶艺师证书',
						remark: '',
						}, {
						name: '2013-2017年在海堤茶馆担任差异培训师',
						remark: '',
					}],
					typeList: ['高级茶艺师','高级茶艺师'],
					focusCount: 28,
					fansCount: 55,
					goodCount: 902,
					authenticationInformations: 1,
				},
			}
		},
		onLoad({userId, myId}) {
			this.userId = userId
			this.myId = myId
			uni.setStorage({
				key: 'userId',
				data: userId,
			})
			uni.request({
				header: {
					"Content-type": 'application/x-www-form-urlencoded'
				},
				method: 'post',
				url: getUserInfo,
				data: {userId},
			}).then(([err, {data}]) => {
				if(err) return
				if(data.result == 0) {
					data = data.data
					let userInfo = {
						nickname: data.nickName,
						side: data.province + '-' + data.city,
						gender: data.sex,
						cover: imgHost + data.userIcon,
						height: data.height,
						tagList: data.personalityInfoVo,
						constellatory: data.constellation,
					}
					this.userInfo = userInfo
					let arr = []
					if(data.userPhotoList.length > 0) {
						arr = data.userPhotoList.map(value => {
							value.imgUrl = imgHost + value.imgUrl
							return value
						})
					}					
					this.photoList = arr
				}
			})
			uni.request({
				header: {
					"Content-type": 'application/x-www-form-urlencoded'
				},
				method: 'post',
				url: getUserExtraInfo,
				data: {targetUserInfoId: userId},
			}).then(([err, {data}]) => {
				if(err) return
				if(data.result == 0) {
					data = data.data
					let userExtraInfo = {
						focusCount: data.followCount,  // 关注数量
						fansCount: data.fansCount,  // 粉丝数量
						goodCount: data.likeCount,  // 点赞数量
						checkList: data.authenticationInformations,
						typeList: [data.consultant.consultantName],// 个人认证
					}
					this.userExtraInfo = userExtraInfo
				}
			})
			if(myId) {
				this.checkUserState()
			}
		},
		onPageScroll({scrollTop}) {
			if(scrollTop > 400) {
				this.navStatus = true
			} else {
				this.navStatus = false
			}
		},
		methods: {
			checkThis(value, index) {
				this.nIndex = index
			},
			checkUserState() {
				let vm = this,
					userId = vm.userId,
					myId = vm.myId
				uni.request({
					url: isFocused,
					method: 'POST',
					data: {
						friendUserId: userId,
						userId: myId,
					},
					header: {
						"Content-type": 'application/x-www-form-urlencoded',
					},
				}).then(([err, {data}]) => {
					data = data.data
					if(data.concernsState == 2) {
						vm.isFocus = true
					} else {
						vm.isFocus = false
					}
				})
			},
			focusEvent({target}) {
				let {tag} = target.dataset,
					vm = this
				uni.showLoading({
					title: '操作中...'
				})
				uni.request({
					url: updateFocusState,
					method: 'POST',
					data: {
						userId: vm.myId,
						friendUserId: vm.userId,
						state: vm.isFocus ? 1 : 2
					}
				}).then((err, {data}) => {
					uni.hideLoading()
					if(tag == 'focus') {
						vm.isFocus = true
					} else if(tag == 'focused') {
						vm.isFocus = false
					}
				})
			},
			jumpEvent({target}) {
				let {tag} = target.dataset
				if(tag == 'write') {
					uni.navigateTo({
						url: '/pages/children/home/children/writeMail?userId=' + this.userId + '&myId=' + this.myId
					})
				} else if(tag == 'read') {
					uni.navigateTo({
						url: '/pages/children/home/children/myMail?userId=' + this.userId
					})
				}
			},
			previewImg(current) {
				let list = this.photoList
				let urls = list.map(value => {
					return value.imgUrl
				})
				uni.previewImage({current,urls})
			},
			showSheet() {
				uni.showActionSheet({
					itemList: ['文章', '视频'],
				}).then(([err, {tapIndex}]) => {
					let url = ''
					if(tapIndex == 0) {
						url = '/pages/children/home/children/writeChpter'
					} else if(tapIndex == 1){
						url = '/pages/children/home/children/writeVideo'
					}
					if(url) {
						uni.navigateTo({url})
					}
				})
			},
		},
	}
</script>
<style lang="less" scoped>
	@import "../../../static/config.less";
	.ps {
		position: fixed;
	}
	.show-info {
		position: fixed;
		right: 40upx;
		top: 320upx;
		width: 80upx;
		height: 80upx;
		color: #fff;
		view {
			width: 68upx;
			height: 68upx;
			@{fs}: 24upx;
			@{bgc}: #54c1f2;
			@{bdra}: 50%;
			border: 6upx solid #76cdf5;
			box-shadow: 2upx 2upx 10upx 2upx #f5f5f5;
			display: flex;
			@{ai}: center;
			@{jc}: center;
		}
	}
	.photo {
		padding: 0 20upx;
		@{bgc}: #fff;
		&-tt {
			@{fs}: 30upx;
			padding-bottom: 20upx;
		}
		scroll-view {
			width: 710upx;
			white-space: nowrap;
			view {
				display: inline-block;
			}
		}
		image {
			width: 230upx;
			height: 154upx;
			margin-right: 12upx;
		}
	}
	.f {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 750upx;
		height: 106upx;
		display: flex;
		@{ai}: center;
		@{jc}: center;
		@{bgc}: #fff;
		border-top: 2upx solid #ddd;
		view {
			@{bgc}: @baseColor;
			color: #fff;
			@{fs}:30upx;
			display: flex;
			@{ai}: center;
			@{jc}: center;
			height: 80upx;
			width: 690upx;
			@{bdra}: 40upx;
		}
	}
	.c {
		@{bgc}: #fff;
		padding: 0 20upx;
	}
	.n {
		@{bgc}: #fff;
		padding: 0 20upx;
		border-bottom: 2upx solid #ddd;
		width: 710upx;
		left: 0;
		top: 0;
		z-index: 100;
		scroll-view {
			white-space: nowrap;
			width: 710upx;
			view {
				display: inline-block;
				padding: 22upx 30upx;
				@{fs}: 32upx;
				color: @c9;
				position: relative;
			}
			.active {
				color: @c3;
				&::after {
					content: "";
					width: 100%;
					height: 6upx;
					@{bgc}: @baseColor;
					position: absolute;
					bottom: 0;
					left: 0;
				}
			}
		}
	}
	.p-fixed {
		position: fixed;
	}
	.nav {
		height: 10upx;
	}
	.m {
		padding: 0 20upx;
		color: @c3;
		border-top: 2upx solid #ddd;
		@{bgc}: #fff;
		&-banner {
			padding: 28upx 0 6upx;
			&-ct {
				padding: 18upx 0 24upx 96upx;
				&-li {
					display: flex;
					@{fs}: 24upx;
					color: @c6;
					.iconfont {
						color: @baseColor;
						@{fs}: 24upx;
						padding-top: 10upx;
					}
					.text {
						flex: 1;
						line-height: 44upx;
						text-align: justify;
					}
				}
			}
			&-tt {
				display: flex;
				@{ai}: center;
				.head {
					@{fs}: 30upx;
					margin-right: 10upx;
				}
				image {
					width: 120upx;
					height: 30upx;
				}
			}
		}
		&-info {
			padding: 28upx 0;
			border-bottom: 2upx solid #ddd;
			display: flex;
			@{jc}: space-between;
			@{ai}: center;
			&-left {
				flex: 1;
				display: flex;
				.tag {
					@{fs}: 20upx;
					color: @c9;
					display: flex;
					@{ai}: center;
					@{fd}: column;
					&-num {
						@{fs}: 32upx;
						color: @c3;
					}
				}
				.center-tag {
					margin: 0 72upx;
				}
			}
			&-right {
				view {
					width: 120upx;
					height: 44upx;
					@{fs}: 20upx;
					@{bdra}: 22upx;
					display: flex;
					@{jc}: center;
					@{ai}: baseline;
					line-height: 44upx;
					@{bgc}: #f2f2f2;
					color: @c3;
				}
				.iconfont {
					&::before {
						margin-right: 4upx;
						@{fs}: 16upx;
					}
					color: #fff;
					@{bgc}: @baseColor;
				}
			}
		}
		&-nav {
			border-top: 2upx solid #ddd;
			border-bottom: 2upx solid #ddd;
			padding: 32upx 0;
			display: flex;
			@{fw}: wrap;
			view {
				padding: 6upx 10upx;
				@{bgc}: #f5f5f5;
				color: @c6;
				@{fs}: 20upx;
				@{bdra}: 6upx;
				margin-right: 18upx;
			}
		}
		&-tt {
			padding: 46upx 0;
			&-user {
				display: flex;
				&-info {
					flex: 1;
					padding: 10upx 0;
					display: flex;
					@{fd}: column;
					@{jc}: space-between;
				}
				.name {
					@{fs}: 36upx;
					font-weight: 900;
				}
				.profession {
					display: flex;
					view {
						@{bdra}: 6upx;
						border: 2upx solid @baseColor;
						@{fs}: 20upx;
						padding: 4upx 8upx;
						color: @baseColor;
						margin-right: 8upx;
					}
				}
				.side {
					display: flex;
					@{fs}: 24upx;
					color: @c6;
					view {
						position: relative;
						padding-right: 36upx;
					}
					.right-bold {
						&::after {
							content: "";
							position: absolute;
							right: 18upx;
							top: 50%;
							transform: translateY(-50%);
							width: 2upx;
							height: 22upx;
							@{bgc}: #ddd;
						}
					}
				}
			}
			image {
				width: 164upx;
				height: 164upx;
				@{bdra}: 50%;
				margin-right: 10upx;
			}
		}
	}
	.g {
		@{bgc}: #f2f2f2;
	}
</style>
