<template>
	<view class="m">
		<view class="m-tt">
			<image src="/static/assests/home/chapter/user-head.png"></image>
			<view class="m-tt-info">
				<view class="name">茶大师</view>
				<view class="time">2019-06-25 12:18:22</view>
			</view>
			<view class="m-tt-action" @tap="focusEvent">
				<view class="iconfont icon-add" data-tag="focus" v-if="!isFocus">关注</view>
				<view v-else data-tag="focused">已关注</view>
			</view>
		</view>
		<view class="m-video">
			<view class="m-video-tt">
				<view class="m-video-tt-t">
					<view>视频</view>
				</view>
				<view class="m-video-tt-c">喝茶有哪些讲究?</view>
			</view>
			<view class="m-video-ct">
				<view>
					<video src="https://www.ngfrankgl.cn/video/chick.mp4"
					controls poster="/static/assests/home/video/poster.jpg"></video>
				</view>
			</view>
		</view>
		<view class="m-tip">
			<view class="m-tip-box bdra-l">
				<view class="iconfont icon-heart-unfill"></view>
				<view>25</view>
			</view>
			<view style="width: 10upx;"></view>
			<view class="m-tip-box bdra-r">
				<view class="iconfont icon-msg"></view>
				<view>58</view>
			</view>
		</view>
		<view class="m-f">
			<view class="m-f-li"
			v-for="(value, index) in 4"
			:key="index">
				<view class="cover">
					<image src="/static/assests/home/chapter/tip-cover.png"></image>
				</view>
				<view class="m-f-li-info">
					<view class="name">流浪地球</view>
					<view class="time">8分钟前</view>
					<view class="tip">世界太大，想去哪儿？世界太大，想去哪儿？世界登记表
	把爱丁堡垃圾筐太大，想去哪儿？</view>
				</view>
			</view>
			<view class="m-f-tip">查看全部</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				isFocus: false,
			}
		},
		onLoad(opitons) {

		},
		methods: {
			focusEvent({target}) {
				let {tag} = target.dataset
				if(tag == 'focus') {
					this.isFocus = true
				} else if(tag == 'focused'){
					this.isFocus = false
				}
			},
		},
	}
</script>
<style lang="less" scoped>
	@import "../../../../static/config.less";
	.m {
		&-f {
			@{bgc}: #fff;
			padding: 0 20upx;
			&-tip {
				@{fs}: 22upx;
				color: @c6;
				height: 100upx;
				display: flex;
				@{ai}: center;
				@{jc}: center;
			}
			&-li {
				display: flex;
				padding: 20upx 0;
				border-bottom: 2upx solid #f4f4f4;
				&-info {
					flex: 1;
					display: flex;
					@{fd}: column;		
					.name {
						color: @baseColor;
						@{fs}: 28upx;
					}
					.time {
						color: @c6;
						@{fs}: 20upx;
					}
					.tip {
						@{fs}: 24upx;
						text-align: justify;
						line-height: 36upx;
					}
				}
			}
			image {
				width: 74upx;
				height: 74upx;
				@{bdra}: 50%;
				margin-right: 12upx;
			}
		}
		&-video {
			&-tt {
				display: flex;
				@{ai}: center;
				padding: 14upx 20upx;
				&-t {
					color: #fff;
					@{fs}: 20upx;
					margin-right: 12upx;
					view {
						@{bgc}: @baseColor;
						@{bdra}: 8upx;
						padding: 2upx 6upx;
					}
				}
				&-c {
					flex: 1;
					@{fs}: 32upx;
				}
			}
		}
		&-tip {
			display: flex;
			padding: 12upx 20upx 24upx;
			border-bottom: 6upx solid #f4f4f4;
			&-box {
				flex: 1;
				height: 70upx;
				display: flex;
				@{ai}: center;
				@{jc}: center;
				color: @baseColor;
				@{fs}: 24upx;
				border: 2upx solid @baseColor;
				.iconfont {
					color: 32upx;
					margin-right: 6upx;
				}
			}
			.bdra-l {
				@{bdra}: 35upx 0 0 35upx;
			}
			.bdra-r {
				@{bdra}: 0 35upx 35upx 0;
			}
		}
		&-tt {
			padding: 32upx 20upx 14upx;
			border-top: 2upx solid #f4f4f4;
			width: 710upx;
			display: flex;
			image {
				width: 100upx;
				height: 100upx;
				@{bdra}: 50%;
				margin-right: 12upx;
			}
			&-info {
				flex: 1;
				display: flex;
				@{fd}: column;
				@{jc}: space-around;
				.name {
					color: @baseColor;
					@{fs}: 36upx;
					font-weight: 900;
				}
				.time {
					@{fs}: 20upx;
					color: @c9;
				}
			}
			&-action {
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
	}
	video {
		width: 750upx;
	}
</style>
