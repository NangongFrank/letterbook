<template>
	<view class="m">
		<view class="m-banner">
			<image src="/static/assests/home/store/banner-cover.jpg" mode="widthFix"></image>
		</view>
		<viwe class="m-nav">
			<view class="m-nav-info">
				<view class="text">
					<view class="token">
						<view>门店</view>
					</view>
					<view class="title">白沙溪黑茶体验馆</view>
				</view>
				<view class="side">开福区北辰三角洲凤凰海购物公园三楼</view>
			</view>
			<view class="m-nav-action">
				<view class="iconfont icon-add" v-if="true">关注</view>
				<view v-else>已关注</view>
			</view>
		</viwe>
		<view class="m-info">
			<view class="m-info-li">
				<view class="label">员工人数:</view>
				<view>3</view>
			</view>
			<view class="m-info-li">
				<view class="label">门店规模:</view>
				<view>80平</view>
			</view>
			<view class="m-info-li">
				<view class="label">成立时间:</view>
				<view>2019.06</view>
			</view>
		</view>
		<view class="m-check">
			<view class="m-check-li">
				<view>商家认证</view>
				<view class="iconfont icon-gou-circle"></view>
			</view>
			<view class="m-check-li">
				<view>商家认证</view>
				<view class="iconfont icon-gou-circle"></view>
			</view>
			<view class="m-check-li">
				<view>商家认证</view>
				<view class="iconfont icon-gou-circle"></view>
			</view>
		</view>
		<view class="m-active">
			<view class="m-active-li">
				<view class="tip">
					<view class="iconfont icon-public-topic"></view>
					<view>活动</view>
				</view>
				<navigator url="javascript:;" class="icon-arrow-right iconfont"></navigator>
			</view>
			<view class="m-active-li bdt">
				<view class="tip">
					<view class="iconfont icon-recruit"></view>
					<view>招聘</view>
				</view>
				<navigator url="javascript:;" class="icon-arrow-right iconfont"></navigator>
			</view>
		</view>
		<view class="m-env">
			<view class="m-env-tt">环境展示</view>
			<scroll-view scroll-x>
				<view v-for="(value, index) in storePhoto" :key="index">
					<image :src="value" mode="aspectFill"></image>
				</view>
			</scroll-view>
		</view>
		<view class="m-tip">
			<view class="m-tip-tt">品牌故事</view>
			<view>抗战岁月，一个日本九州大学毕业的农学士中国黑茶理论之父/白沙溪创始人---彭先泽。回到祖国，以实业报国的现实行为，向湖南政府提议在安化建立砖茶厂，这就是白沙溪的前身。</view>
		</view>
		<view class="m-tip">
			<view class="m-tip-tt">服务理念</view>
			<view>抗战岁月，一个日本九州大学毕业的农学士中国黑茶理论之父/白沙溪创始人---彭先泽。回到祖国，以实业报国的现实行为，向湖南政府提议在安化建立砖茶厂，这就是白沙溪的前身。</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				storePhoto: ['/static/assests/home/store/store01.jpg', 
							 '/static/assests/home/store/store02.jpg', 
							 '/static/assests/home/store/store03.jpg',
							 '/static/assests/home/store/store02.jpg',
							 '/static/assests/home/store/store01.jpg'
							],
			}
		},
		onLoad(opitons) {

		},
		methods: {

		},
	}
</script>
<style lang="less" scoped>
	@import "../../../../static/config.less";
	.bdt {
		border-top: 2upx solid #f6f6f6;
	}
	.m {
		color: @c3;
		&-env {
			padding: 24upx 20upx;
			@{fs}: 32upx;
			&-tt {
				padding-bottom: 20upx;
			}
			scroll-view {
				white-space: nowrap;
				view {
					display: inline-block;
					margin-right: 12upx;
				}
				image {
					width: 230upx;
					height: 184upx;
				}
			}
		}
		&-active {
			padding: 0 20upx;
			border-top: 6upx solid #f6f6f6;
			border-bottom: 6upx solid #f6f6f6;
			@{fs}: 28upx;
			&-li {
				padding: 12upx 0;
				display: flex;
				@{ai}: center;
				@{jc}: space-between;
				navigator {
					color: @c6;
					padding: 12upx 10upx;
					&:active {
						opacity: .7;
					}
				}
				.tip {
					display: flex;
					@{ai}: center;
					.iconfont {
						color: @baseColor;
						margin-right: 8upx;
					}
				}
			}
		}
		&-check {
			padding: 12upx 20upx;
			display: flex;
			@{jc}: space-between;
			@{fs}: 20upx;
			.iconfont {
				@{fs}: 30upx;
				color: @baseColor;
				margin-left: 10upx;
			}
			&-li {
				display: flex;
			}
		}
		&-info {
			padding: 12upx 20upx;
			border-top: 2upx solid #f6f6f6;
			border-bottom: 2upx solid #f6f6f6;
			@{fs}: 20upx;
			display: flex;
			@{jc}: space-between;
			&-li {
				display: flex;
				@{ai}: center;
			}
			.label {
				color: @c9;
				margin-right: 6upx;
			}
		}
		&-nav {
			padding: 30upx 20upx 20upx;
			@{fs}: 32upx;
			display: flex;
			@{jc}: space-between;
			&-action {
				display: flex;
				@{ai}: center;
				view {
					color: @c6;
					@{bgc}: #f6f6f6;
					width: 120upx;
					height: 44upx;
					@{bdra}: 22upx;
					display: flex;
					@{ai}: center;
					@{jc}: center;
					@{fs}: 22upx;
				}
				.iconfont {
					color: #fff;
					@{bgc}: @baseColor;
				}
			}
			&-info {
				.side {
					@{fs}: 24upx;
				}
				.text {
					display: flex;
					@{ai}: center;
					.token {
						@{fs}: 20upx;
						color: #fff;
						margin-right: 8upx;
						view {
							@{bgc}: @baseColor;
							@{bdra}: 6upx;
							padding: 2upx 6upx;
						}
					}
				}
			}
		}
		&-banner {
			image {
				width: 750upx;
			}
		}
	}
</style>
