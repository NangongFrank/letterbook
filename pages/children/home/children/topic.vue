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
		<view class="m-info">
			<view class="m-info-tt">
				<view class="m-info-tt-t">
					<view>话题</view>
				</view>
				<view class="m-info-tt-c">为什么茶店永远没有人？</view>
			</view>
			<view class="m-info-ct">
				<view v-for="(val, ind) in imgs"
				:key="ind">
					<image class="long-img" :src="val.url" v-if="val.long" mode="widthFix"></image>
					<image class="simple-img" :src="val.url" v-else mode="aspectFill"></image>
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
		<view class="m-answer">
			<view>更多问答</view>
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
					<view class="img" v-if="!index">
						<image src="/static/assests/home/topic/cover-discuss.jpg" mode="widthFix"></image>
					</view>
					<view class="action">
						<view class="token" v-if="!index">
							<view class="iconfont icon-heart-fill"></view>
							<view>125</view>
						</view>
						<view class="token" v-if="index">
							<view class="iconfont icon-heart-unfill"></view>
							<view>125</view>
						</view>
						<view class="token">
							<view class="iconfont icon-heart-wound"></view>
							<view>8</view>
						</view>
						<view class="token">
							<view class="iconfont icon-msg"></view>
							<view>26</view>
						</view>
					</view>
				</view>
				
			</view>
			<view class="m-f-tip">查看全部</view>
		</view>
	</view>
</template>
<script>
	import {getTopicInfo} from '@/extends/hosts'
	export default {
		data() {
			return {
				imgs: [{
					url: "/static/assests/home/topic/long-img.jpg",
					long: true,
				}],
			}
		},
		onLoad({themeId}) {
			/* uni.request({
				method: 'POST',
				header: {
					'Content-type': 'application/x-www-form-urlencoded'
				},
				url: getTopicInfo,
				data: {
					topicId: themeId,
				}
			}).then(([err, {data}]) => {
				console.log(data)
			}) */
		},
		methods: {

		},
	}
</script>
<style lang="less" scoped>
	@import "../../../../static/config.less";
	.m {
		&-f {
			@{bgc}: #fff;
			padding: 0 20upx;
			.action {
				display: flex;
				padding: 12upx 0;
			}
			.token {
				display: flex;
				@{fs}: 20upx;
				color: @c6;
				margin-right: 20upx;
				.iconfont {
					@{fs}: 32upx;
					margin-right: 20upx;
				}
				.icon-heart-fill {
					color: #ec3737;
				}
			}
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
				.img {
					padding: 10upx 0;
					image {
						width: 610upx;
					}
				}
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
			.cover {
				image {
					width: 74upx;
					height: 74upx;
					@{bdra}: 50%;
					margin-right: 12upx;
				}
			}
		}
		&-answer {
			padding: 10upx 20upx 30upx;
			border-bottom: 6upx solid #f4f4f4;
			view {
				display: flex;
				@{ai}: center;
				@{jc}: center;
				color: #fff;
				@{bgc}: @baseColor;
				@{fs}: 22upx;
				height: 80upx;
				@{bdra}: 40upx;
			}
		}
		&-tip {
			display: flex;
			padding: 12upx 20upx 24upx;
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
		&-info {
			padding: 0 20upx;
			&-tt {
				display: flex;
				@{ai}: center;
				padding: 28upx 0 14upx;
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
	.long-img {
		width: 710upx;
	}
	.simple-img {
		width: 220upx;
		height: 220upx;
	}
</style>
