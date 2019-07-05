<template>
	<view class="m">
		<view class="m-tt">
			<view class="m-tt-user">
				<image src="/static/assests/home/home-head.jpg"></image>
				<view class="m-tt-user-info">
					<view class="name">森巴兔-lucker</view>
					<view class="profession">
						<view>高级茶艺师</view>
					</view>
					<view class="side">
						<view class="right-bold">湖南-长沙</view>
						<view class="right-bold">女</view>
						<view class="right-bold">白羊座</view>
						<view>165cm</view>
					</view>
				</view>
			</view>
		</view>
		<view class="m-nav">
			<view>摄影</view>
			<view>绘画</view>
			<view>电影</view>
			<view>美食</view>
			<view>时尚达人</view>
		</view>
		<view class="m-info">
			<view class="m-info-left">
				<view class="tag">
					<view class="tag-num">28</view>
					<view>关注</view>
				</view>
				<view class="tag center-tag">
					<view class="tag-num">55</view>
					<view>粉丝</view>
				</view>
				<view class="tag">
					<view class="tag-num">902</view>
					<view>点赞</view>
				</view>
			</view>
			<view class="m-info-right">
				<view class="iconfont icon-add">关注</view>
			</view>
		</view>
		<view class="m-banner">
			<view class="m-banner-tt">
				<view class="head">个人认证</view>
				<view class="info">
					<view class="iconfont icon-truth-role"></view>
					<view class="text">个人信息</view>
				</view>
			</view>
			<view class="m-banner-ct">
				<view class="m-banner-ct-li">
					<view class="iconfont icon-dot"></view>
					<view>2013年考取高级茶艺师证书</view>
				</view>
				<view class="m-banner-ct-li">
					<view class="iconfont icon-dot"></view>
					<view>2017年考取高级茶艺师证书</view>
				</view>
				<view class="m-banner-ct-li">
					<view class="iconfont icon-dot"></view>
					<view>2013-2017年在海堤茶馆担任差异培训师</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import Topic from '@/components/home/Topic'
	import Store from '@/components/home/Store'
	import Chapter from '@/components/home/Chapter'
	import Video from '@/components/home/Video'
	import Appointment from '@/components/home/Appointment'
	export default {
		components: {
			Topic,
			Store,
			Chapter,
			Video,
			Appointment,
		},
		data() {
			return {

			}
		},
		onLoad(opitons) {

		},
		methods: {

		},
	}
</script>
<style lang="less" scoped>
	@import "../../../static/config.less";
	.m {
		padding: 0 20upx;
		color: @c3;
		border-top: 2upx solid #ddd;
		&-banner {
			padding: 28upx 0;
			&-tt {
				display: flex;
				@{ai}: baseline;
				.head {
					@{fs}: 30upx;
				}
				.info {
					display: flex;
					@{fs}: 20upx;
					margin-left: 4upx;
				}
				.text {
					@{bgc}: #ed9510;
					@{bdra}: 0 4upx 4upx 0;
					padding-left: 20upx;
				}
				.iconfont {
					color: #ed9510;
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
					color: #fff;
					@{fs}: 20upx;
					@{bdra}: 22upx;
					@{bgc}: @baseColor;
					display: flex;
					@{jc}: center;
					@{ai}: baseline;
					line-height: 44upx;
					&::before {
						margin-right: 4upx;
						@{fs}: 16upx;
					}
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
</style>
