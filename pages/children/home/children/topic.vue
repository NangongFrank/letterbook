<template>
	<view class="g">
		<view class="m">
			<view class="m-tt">
				<view class="m-tt-user">
					<image src="/static/assests/home/home-head.jpg"></image>
					<view class="m-tt-user-info">
						<view class="name">茶大师</view>
						<view class="side">
							<view class="date">2019-06-25</view>
							<view class="times">12:10:18</view>
						</view>
					</view>
					<view class="m-tt-user-right">
						<view class="iconfont icon-add" v-if="!isFocus">关注</view>
						<view class="focused" v-else>已关注</view>
					</view>
				</view>
			</view>
		</view>
		<view class="c">
			<topic-elements />
		</view>
		<view style="height: 100upx; background: #fff;"></view>
		<view class="f">
			<view class="btn-area">
                <navigator url="" hover-class="navigator-hover">
                    <view type="default">更多回答</view>
                </navigator>
            </view>
		</view>
	</view>
</template>
<script>
	//import TopicElement from '@/components/home/Topic'
	import TopicElements from '@/components/home/Topic1'
	export default {
		components: {
			//TopicElement,
			TopicElements,
		},
		data() {
			return {
				isFocus: false,
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
	@import "../../../../static/config.less";
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
		border-top: 1upx solid #f1f1f1;
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
			padding: 0 0 28upx;
			display: flex;
			@{jc}: space-between;
			@{ai}: center;
			&-left {
				padding:0 80upx;
				flex: 1;
				display: flex;
				.tag {
					padding:0 16upx;
					@{fs}: 26upx;
					color: @c9;
					display: flex;
					@{ai}: center;
					&-num {
						@{fs}: 32upx;
						color: @c3;
						margin-right:6upx;
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
		&-tt {
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
	}
	.g {
		@{bgc}: #f2f2f2;
	}
</style>
