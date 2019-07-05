<template>
	<view class="g">
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
					<view class="iconfont icon-add" v-if="true">关注</view>
					<view class="focused" v-else>已关注</view>
				</view>
			</view>
			<view class="m-banner">
				<view class="m-banner-tt">
					<view class="head">个人认证</view>
					<image src="/static/assests/home/truth-role.png"></image>
				</view>
				<view class="m-banner-ct">
					<view class="m-banner-ct-li">
						<view class="iconfont icon-dot"></view>
						<view class="text">2013年考取高级茶艺师证书</view>
					</view>
					<view class="m-banner-ct-li">
						<view class="iconfont icon-dot"></view>
						<view class="text">2017年考取高级茶艺师证书</view>
					</view>
					<view class="m-banner-ct-li">
						<view class="iconfont icon-dot"></view>
						<view class="text">2013-2017年在海堤茶馆担任差异培训师</view>
					</view>
				</view>
			</view>
		</view>
		<view class="nav"></view>
		<view class="n">
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
				<topic-element />
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
		<view class="f">
			<view>写信</view>
		</view>
	</view>
</template>
<script>
	import TopicElement from '@/components/home/Topic'
	import StoreElement from '@/components/home/Store'
	import ChapterElement from '@/components/home/Chapter'
	import VideoElement from '@/components/home/Video'
	import AppointmentElement from '@/components/home/Appointment'
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
				nIndex: 4,
			}
		},
		onLoad(opitons) {
			
		},
		methods: {
			checkThis(value, index) {
				this.nIndex = index
			},
		},
	}
</script>
<style lang="less" scoped>
	@import "../../../static/config.less";
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
		scroll-view {
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
			padding: 28upx 0;
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
