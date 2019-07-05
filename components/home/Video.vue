<template>
	<view class="m">
		<view class="wrapper"
		v-for="(value, index) in list"
		:key="index">
			<view class="m-tt">
				<view class="m-tt-t">
					<view>视频</view>
				</view>
				<view class="m-tt-c" v-text="value.tt"></view>
			</view>
			<view class="m-ct">
				<view>
					<video :src="value.src" controls :poster="value.poster"></video>
				</view>
			</view>
			<view class="m-ft">
				<view class="m-ft-time" v-text="value.time">2019-06-25</view>
				<view class="m-ft-info">
					<view v-text="value.good + '点赞'"></view>
					<view v-text="value.tip + '评论'"></view>
				</view>
				<view class="m-ft-author">
					来自
					<view class="name">茶大师</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		name: 'Video',
		data() {
			return {
				list: [{
					tt: '为什么茶店永远没人??',
					src: 'https://www.ngfrankgl.cn/video/chick.mp4',
					poster: '/static/assests/home/video/poster.jpg',
					time: '2019-06-25',
					good: 25,
					tip: 58,
					author: '茶大师',
					}, {
					tt: '老白茶其实是最可信赖的茶.',
					src: '',
					poster: '/static/assests/home/video/poster.jpg',
					time: '2019-06-25',
					good: 25,
					tip: 58,
					author: '茶大师',
					}, {
					tt: '老白茶其实是最可信赖的茶.',
					src: '',
					poster: '/static/assests/home/video/poster.jpg',
					time: '2019-06-25',
					good: 25,
					tip: 58,
					author: '茶大师',
					}, {
					tt: '喝茶是一个好习惯.',
					src: '',
					poster: '/static/assests/home/video/poster.jpg',
					time: '2019-06-25',
					good: 25,
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
	
	video {
		width: 710upx;
	}
</style>
