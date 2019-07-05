<template>
	<view class="m">
		<view class="wrapper"
		v-for="(value, index) in list"
		:key="index">
			<view class="m-tt">
				<image :src="value.cover" mode="aspectFill"></image>
			</view>
			<view class="m-ct">
				<view class="m-ct-li">
					<view class="tip">邀约主题：</view>
					<view v-text="value.topic"></view>
				</view>
				<view class="m-ct-li">
					<view class="tip">
						<view>赴约地址：</view>
					</view>
					<view>
						<view v-text="value.address"></view>
					</view>
				</view>
				<view class="m-ct-li">
					<view class="tip">赴约时间：</view>
					<view v-text="value.time"></view>
				</view>
				<view class="m-ct-li">
					<view class="tip">已约人数：</view>
					<view v-text="value.ready + '/' + value.allUser + '人'"></view>
				</view>
			</view>
			<view class="m-ft">
				<view class="doing" v-if="value.status">进行中</view>
				<view class="done" v-else>已过期</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		name: 'Appointment',
		data() {
			return {
				list: [{
					cover: '/static/assests/home/appointment/cover.jpg',
					topic: '以茶会友',
					time: '2018-04 14:00',
					ready: 8,
					allUser: 10,
					status: 1,
					address: '开福区湘江北路1200号北辰三角洲E3区',
					}, {
					cover: '/static/assests/home/appointment/cover.jpg',
					topic: '以茶会友',
					time: '2018-04 14:00',
					ready: 8,
					allUser: 10,
					status: 0,
					address: '开福区湘江北路1200号北辰三角洲E3区',
					}, {
					cover: '/static/assests/home/appointment/cover.jpg',
					topic: '以茶会友',
					time: '2018-04 14:00',
					ready: 8,
					allUser: 10,
					status: 0,
					address: '开福区湘江北路1200号北辰三角洲E3区',
					}, {
					cover: '/static/assests/home/appointment/cover.jpg',
					topic: '以茶会友',
					time: '2018-04 14:00',
					ready: 8,
					allUser: 10,
					status: 0,
					address: '开福区湘江北路1200号北辰三角洲E3区',
				}],
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
		padding: 36upx 0;
		display: flex;
	}
	.m {
		color: @c3;
		&-ct {
			@{fs}: 20upx;
			padding-left: 10upx;
			display: flex;
			@{fd}: column;
			@{jc}: space-between;
			.tip {
				color: @c9;
				width: 110upx;
			}
			&-li {
				display: flex;
			}
		}
	}
	.doing,
	.done {
		@{fs}: 22upx;
		width: 120upx;
		height: 44upx;
		display: flex;
		@{ai}: center;
		@{jc}: center;
		@{bdra}: 22upx;
	}
	.doing {
		color: @baseColor;
		border: 2upx solid @baseColor;
	}
	.done {
		color: @c9;
		border: 2upx solid @c9;
	}
	image {
		width: 120upx;
		height: 120upx;
		@{bdra}: 50%;
	}
</style>
