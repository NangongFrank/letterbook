<template>
	<view class="g">
		<view class="m">
			<view class="m-receive">
				<view class="label">收件人:</view>
				<view class="value">森巴兔-lucker</view>
			</view>
			<view class="m-theme">
				<view class="label">主题:</view>
				<view class="value">
					<input v-model="theme" :placeholder="themePlaceholder"/>
				</view>
			</view>
			<view class="m-ct">
				<view class="m-ct-tt">
					<view class="label">内容:</view>
					<view class="action" @tap="showSheet">参考</view>
				</view>
				<view class="m-ct-ct">
					<textarea v-model="content" :placeholder="contentPlaceholder" />
				</view>
			</view>
		</view>
		<view class="i">
			<view class="img" @longpress="removeImg(index)"
			v-for="(value, index) in imgList"
			:key="index">
				<image mode="aspectFill"
				:src="value"></image>
			</view>
			<view @tap="addImg" class="add">
				<view class="iconfont icon-add"></view>
			</view>
		</view>
		<view style="height: 100upx;background-color: #fff;"></view>
		<view class="ft">
			<view class="btn" v-if="isSend" @tap="sendMailEvent">发送</view>
			<view v-else>发送</view>
		</view>
	</view>
</template>
<script>
	import {sendMail} from '@/extends/hosts'
	export default {
		data() {
			return {
				userId: '',
				myId: '',
				theme: '',
				content: '',
				imgList: [],
				isSend: true,
				themePlaceholder: '嗨,我们交个朋友吧~',
				contentPlaceholder: '我发现你的兴趣跟我蛮相似的，介不介意以后一块儿出来玩啊？',
			}
		},
		onLoad({userId, myId}) {
			this.userId = userId
			this.myId = myId
		},
		methods: {
			showSheet() {
				uni.showActionSheet({
					itemList: ['打招呼', '问候的话', '快捷短语'],
				}).then(([err, tag]) => {
					if(err) {
						return
					}
					let {tapIndex} = tag
					switch(tapIndex) {
						case 0:
						this.content = '往事随风，淡雅从容。置身昔日的海洋，拾起散落的贝壳，颗颗透彻轻盈。'
						break
						case 1:
						this.content = '没有人生来就有朋友，交朋友也都是从不认识到认识，再到相熟，只要能克服第一次拍出丑的心里，交朋友就不再是难事。因为你不能只想着和主动与自己打招呼的人做朋友，还要主动去结交朋友，踩能拓宽你的朋友圈子，交到更多的朋友。'
						break
						case 2:
						this.content = '人的一生要疯狂一次，无论是为一个人，一段情，一段旅途，或一个梦想。'
						break
					}
				})
			},
			addImg() {
				let vm = this
				if(vm.imgCount) {
					uni.chooseImage({
						count: vm.imgCount,					
					}).then(([err, e]) => {
						if(err) return
						let {tempFilePaths} = e
						vm.imgList = vm.imgList.concat(tempFilePaths)
					})
				}
				
			},
			removeImg(index) {
				this.imgList.splice(index, 1)
			},
			sendMailEvent() {
				let vm = this,
					content = vm.content ? vm.content : vm.contentPlaceholder,
					title = vm.theme ? vm.theme : vm.themePlaceholder
					receiverId = vm.userId,
					files = vm.imgList,
					senderId = vm.myId
				uni.showLoading({
					title: '发送中...'
				})
				uni.request({
					url: sendMail,
					method: 'post',
					header: {
						"Content-type": 'application/x-www-form-urlencoded',
					},
					data: {
						receiverId,
						senderId,
						title,
						content,
						files,
					}
				}).then(([err, {data}]) => {
					vm.imgList = []
					vm.content = ''
					vm.theme = ''
					uni.hideLoading()
				})
			}
		},
		computed: {
			imgCount() {
				let len = this.imgList.length
				return  2 - len > 0 ? 2 - len : 0
			}
		}
	}
</script>
<style lang="less" scoped>
	@import "../../../../static/config.less";
	.ft {
		position: fixed;
		left: 0;
		bottom: 0;
		@{bgc}: #fff;
		width: 710upx;
		padding: 10upx 20upx;
		view {
			width: 710upx;
			height: 80upx;
			@{fs}: 30upx;
			display: flex;
			@{ai}: center;
			@{jc}: center;
			@{bdra}: 40upx;
			@{bgc}: #f5f5f5;
		}
		.btn {
			color: #fff;
			@{bgc}: @baseColor;
		}
	}
	.i {
		margin-top: 6upx;
		@{bgc}: #fff;
		padding: 30upx 20upx;
		width: 710upx;
		display: flex;
		.img,
		.add {
			margin: 0 8upx;
		}
		.add {
			width: 178upx;
			height: 184upx;
			@{bgc}: #f6f6f6;
			display: flex;
			@{ai}: center;
			@{jc}: center;
		}
		image {
			width: 178upx;
			height: 184upx;
		}
		.iconfont {
			color: #8a8a8a;				
		}
	}
	.m {
		@{bgc}: #fff;
		padding: 0 20upx;
		@{fs}: 28upx;
		&-ct {
			&-ct {
				display: flex;
				@{jc}: flex-end;
				textarea {
					width: 660upx;
				}
			}
			&-tt {
				display: flex;
				@{jc}: space-between;
				padding: 16upx 0;
				.action {
					color: @baseColor;
				}
			}
		}
		.label {
			width: 114upx;
			display: flex;
			@{jc}: flex-end;
			margin-right: 12upx;
		}
		.value {
			flex: 1;
			text-align: left;
		}
		&-receive,
		&-theme {
			display: flex;
			@{ai}: baseline;
			padding: 16upx 0;
			border-bottom: 2upx solid #f5f5f5;
		}
	}
	.g {
		@{bgc}: #f5f5f5;
		color: @c3;
	}
</style>
