<template>
	<view class="m">
		<view class="wrapper"
		v-for="(value, index) in list"
		:key="index">
				<view class="m-yy">
					<view class="m-yy-user">
						<image src="/static/assests/home/home-head.jpg"></image>
						<view class="m-yy-user-info">
							<view class="name">茶大师</view>
							<view class="side">
								<view class="date">2019-06-25</view>
								<view class="times">12:10:18</view>
							</view>
						</view>
						<view class="m-yy-user-right">
							<view class="iconfont icon-add" v-if="!isFocus">关注</view>
							<view class="focused" v-else>已关注</view>
						</view>
					</view>
				</view>
			<view class="m-tt">
				<view class="m-tt-c" v-text="value.tt"></view>
			</view>
			<view class="m-ct">
				<view v-for="(val, ind) in value.imgs"
				:key="ind">
					<image class="long-img" :src="val.url" v-if="val.long" mode="widthFix"></image>
					<image class="simple-img" :src="val.url" v-else mode="aspectFill"></image>
				</view>
			</view>
			<view class="m-ft">
				<view class="m-ft-time" v-text="value.time">2019-06-25</view>
				<view class="m-ft-info">
					<view v-text="value.good + '点赞'"></view>
					<view v-text="value.bad + '差评'"></view>
					<view v-text="value.tip + '评论'"></view>
				</view>
				<view class="m-ft-author">
					留言
					<view class="name">茶大师</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		name: 'Topic',
		data() {
			return {
				list: [{
					tt: '线上购买不需要去店了吧??',
					imgs: [{
						url: "/static/assests/home/topic/long-img.jpg",
						long: true,
					}],
					time: '2019-06-25',
					good: 25,
					bad: 25,
					tip: 58,
					author: '茶大师',
					}, {
					tt: '老白茶其实是最可信赖的茶.',
					imgs: [{
						url: "/static/assests/home/topic/cover01.jpg",
						}, {
						url: "/static/assests/home/topic/cover02.jpg",
					}],
					time: '2019-06-25',
					good: 25,
					bad: 25,
					tip: 58,
					author: '茶大师',
					}, {
					tt: '老白茶其实是最可信赖的茶.',
					imgs: [{
						url: "/static/assests/home/topic/cover01.jpg",
						}, {
						url: "/static/assests/home/topic/cover02.jpg",
						}, {
						url: "/static/assests/home/topic/cover02.jpg",
					}],
					time: '2019-06-25',
					good: 25,
					bad: 25,
					tip: 58,
					author: '茶大师',
					}, {
					tt: '喝茶是一个好习惯.',
					imgs: [{
						url: "/static/assests/home/topic/cover01.jpg",
						}, {
						url: "/static/assests/home/topic/cover02.jpg",
						},  {
						url: "/static/assests/home/topic/cover02.jpg",
						},  {
						url: "/static/assests/home/topic/cover02.jpg",
						}, {
						url: "/static/assests/home/topic/cover02.jpg",
					}],
					time: '2019-06-25',
					good: 25,
					bad: 25,
					tip: 58,
					author: '茶大师',
				}]
			}
		},
		onLoad(opitons) {

		},
		methods: {

		}
	}
</script>
<style lang="less" scoped>
	@import "../../static/config.less";
	.wrapper {
		border-bottom: 2upx solid #ddd;
	}
	.m {
		color: @c3;
		&-yy {
			padding: 46upx 0 0;
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
					color:#6ebcc8;
				}
				.side {
					display: flex;
					@{fs}: 24upx;
					color: @c6;
					view {
						position: relative;
						padding-right: 36upx;
					}
				}
				&-right {
					view {
						margin-top: 20upx;
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
							margin-right: 1upx;
							@{fs}: 16upx;
						}
						color: #fff;
						@{bgc}: @baseColor;
					}
				}
			}
			image {
				width: 120upx;
				height: 120upx;
				@{bdra}: 50%;
				margin-right: 10upx;
			}
		}
		&-ct {
			display: flex;
			@{fw}: wrap;
			view {
				margin-right: 10upx;
			}
		}
		&-ft {
			display: flex;
			@{jc}: space-between;
			@{fs}: 20upx;
			color: @c6;
			padding: 10upx 0 20upx;
			.name {
				color: @baseColor;
				
			}
			&-info,
			&-author {
				display: flex;
				view {
					margin: 0 6upx;
				}
			}
		}
		&-tt {
			display: flex;
			@{ai}: center;
			padding: 38upx 0 14upx 0;
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
	.long-img {
		width: 710upx;
	}
	.simple-img {
		width: 220upx;
		height: 220upx;
	}
</style>
