<template>
	<view class="m">
		<view class="m-tt">
			<view class="m-tt-nav" @tap="activeEvent">
				<view data-act="write" :class="{active: current == 0}">我写的</view>
				<view data-act="get" :class="{active: current == 1}">我收的</view>
			</view>
			<view>管理</view>
		</view>
		<scroll-view  class="m-ct" scroll-y
		@scrolltolower="nowEnd"
		:style="{height: viewHeight}">
			<view class="m-ct-li"
			v-for="(value, index) in 10"
			:key="index">
				<view class="m-ct-li-user">
					<image src="/static/assests/home/chapter/tip-cover.png"></image>
					<view class="info">
						<view class="name">茶大师</view>
						<view class="tip">嗨，我们交个朋友吧~</view>
					</view>
				</view>
				<view class="m-ct-li-state">
					<image src="/static/assests/mail-logo.png" style="width: 58upx;height: 46upx;"></image>
					<view class="time">07-06</view>
				</view>
			</view>
			<view class="m-ft" v-if="isAll">
				<view>已显示全部</view>
			</view>
		</scroll-view>
		
	</view>
</template>
<script>
	export default {
		data() {
			return {
				current: 0,
				viewHeight: '558px',
				isAll: false,
			}
		},
		onLoad(opitons) {
			uni.getSystemInfo().then(([err, {windowHeight}]) => {
				this.viewHeight = windowHeight - 44 + 'px'
			})
		},
		methods: {
			activeEvent({target}) {
				let {act} = target.dataset
				if(act == 'write') {
					this.current = 0
				} else if(act == 'get'){
					this.current = 1
				}
			},
			nowEnd() {
				this.isAll = true
			},
		},
		watch: {
			current(value) {
				this.isAll = false
			}
		},
	}
</script>
<style lang="less" scoped>
	@import "../../../../static/config.less";
	.m {
		color: @c3;
		&-ft {
			padding: 40upx 0;
			display: flex;
			@{ai}: center;
			@{jc}: center;
			position: relative;
			@{fs}: 20upx;
			color: @c9;
			view {
				&::before,
				&::after {
					content: "";
					position: absolute;
					top: 50%;
					transform: translateY(-50%);
					width: 40upx;
					height: 4upx;
					@{bgc}: #000;
				}
				&::before {
					left: -48upx;
				}
				&::after {
					right: -48upx;
				}
			}
		}
		&-tt {
			padding: 0 20upx;
		}
		&-ct {
			&-li {
				display: flex;
				padding: 0 20upx;
				border-bottom: 2upx solid #ddd;
				&-user {
					flex: 1;
					display: flex;
					@{ai}: center;
					padding: 32upx 0;
					.name {
						@{fs}:32upx;
					}
					.tip {
						@{fs}: 24upx;
						color: @c9;
					}
					image {
						 width: 80upx;
						 height: 80upx; 
						 @{bdra}: 50%;
					}
					.info {
						padding-left: 12upx;
						flex: 1;
						display: flex;
						@{fd}: column;
						@{jc}: space-between;
					}
				}
				&-state {
					width: 90upx;
					display: flex;
					@{fd}: column;
					@{ai}: center;
					@{jc}: center;
					color: @c9;
					@{fs}: 24upx;
				}
			}
		}
		&-tt {
			display: flex;
			@{jc}: space-between;
			color: @baseColor;
			@{fs}: 36upx;
			&-nav {
				display: flex;
				margin-bottom: 16upx;
				view {
					margin-right: 20upx;
					padding: 12upx 0;
					position: relative;
					&::after {
						content: "";
						position: absolute;
						bottom: 0;
						left: 0;
						height: 6upx;
						width: 100%;
					}
				}
				.active::after {
					@{bgc}: @baseColor;
				}
			}
		}
	}
</style>
