<template>
	<view class="m">
		<view class="wrapper"
		v-for="(value, index) in list"
		:key="index">
			<view>
				<image :src="value.cover" mode="aspectFill"></image>
			</view>
			<view class="right">
				<view class="m-tt" v-text="value.tt"></view>
				<view class="m-ct">
					<view class="m-ct-li">
						<view class="tip">成员数量：</view>
						<view v-text="value.people + '人'"></view>
					</view>
					<view class="m-ct-li">
						<view class="tip">占地面积：</view>
						<view v-text="value.area + 'm'"></view>
					</view>
					<view class="m-ct-li">
						<view class="tip">成立时间：</view>
						<view v-text="value.time"></view>
					</view>
					<view class="m-ct-li">
						<view class="tip">
							<view>门店地址：</view>
						</view>
						<view>
							<view v-text="value.address"></view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		name: 'Store',
		data() {
			return {
				list: [{
					cover: '/static/assests/home/store/cover.jpg',
					tt: '白沙溪黑茶体验馆',
					people: 3,
					area: 80,
					time: '2018-04',
					address: '开福区湘江北路1200号北辰三角洲E3区',
					}, {
					cover: '/static/assests/home/store/cover.jpg',
					tt: '白沙溪黑茶体验馆',
					people: 3,
					area: 80,
					time: '2018-04',
					address: '开福区湘江北路1200号北辰三角洲E3区',
					}, {
					cover: '/static/assests/home/store/cover.jpg',
					tt: '白沙溪黑茶体验馆',
					people: 3,
					area: 80,
					time: '2018-04',
					address: '开福区湘江北路1200号北辰三角洲E3区',
					}, {
					cover: '/static/assests/home/store/cover.jpg',
					tt: '白沙溪黑茶体验馆',
					people: 3,
					area: 80,
					time: '2018-04',
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
			&-li {
				display: flex;
				margin: 6upx 0;
			}
		}
		&-tt {
			@{fs}: 32upx;
		}
	}
	image {
		width: 210upx;
		height: 210upx;
	}
	.right {
		flex: 1;
		padding-left: 10upx;
		display: flex;
		@{fd}: column;
		@{jc}: space-between;
		.tip {
			color: @c9;
			width: 110upx;
		}
	}
</style>
