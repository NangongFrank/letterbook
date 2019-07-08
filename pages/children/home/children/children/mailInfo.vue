<template>
	<view class="m" 
	:style="{'min-height': pageMinHeight}">
		<view class="m-ct" >
			<image src="/static/assests/letterbook-logo.png" class="logo"></image>
			<image src="/static/assests/mail-bg.jpg" class="bg" mode="widthFix"></image>
			<view class="m-paper">
				<view class="deal">亲爱的啾啾:</view>
				<view class="content">您好，很荣幸与你认识，我是某某公司副总经理，想与贵公司某某项目达成一个合作，我们公司业务能力，刚好适合贵公司，盼望回信。</view>
				<view class="author">
					<view class="cover">
						<image src="/static/assests/home/chapter/user-head.png"></image>
						<view>我心飞翔</view>
					</view>
					<view class="time">2019-06-15</view>
					<view class="action">回复TA</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				pageMinHeight: '603px',
			}
		},
		onLoad(opitons) {
			uni.getSystemInfo().then(([err, {windowHeight}]) => {
				this.pageMinHeight = windowHeight - 140 + 'px'
			})
		},
		methods: {
			
		},
	}
</script>
<style lang="less" scoped>
	@import "../../../../../static/config.less";
	.m {
		@{bgc}: @baseColor;	
		padding: 140upx 0;
		&-paper {
			width: 590upx;
			@{bgc}: #fff;
			padding: 0 20upx 300upx;
			display: flex;
			@{fd}: column;
			.author {
				margin-top: 60upx;
				align-self: flex-end;
				display: flex;
				@{fd}: column;
				@{ai}: center;
				.cover {
					display: flex;
					@{ai}: center;
				}
			}
			.time {
				@{fs}: 24upx;
				margin: 8upx 0 12upx;
			}
			.action {
				@{fs}: 22upx;
				width: 120upx;
				height: 44upx;
				@{bdra}: 22upx;
				@{bgc}: #f22c3f;
				color: #fff;
				display: flex;
				@{ai}: center;
				@{jc}: center;
			}
			.content {
				text-indent: 56upx;
				line-height: 36upx;
				text-align: justify;
			}
			.deal {
				margin: 80upx 0 30upx;
			}
			view {
				@{fs}: 28upx;
			}
			image {
				width: 60upx;
				height: 60upx;
				@{bdra}: 50%;
				margin-right: 12upx;
			}
		}
		&-ct {
			position: relative;
			display: flex;
			@{fd}: column;
			@{ai}: center;
		}
	}
	.logo {
		width: 160upx;
		height: 160upx;
		@{bdra}: 50%;
		position: absolute;
		left: 50%;
		top: 0;
		transform: translate(-50%, -50%);
		z-index: 10;
	}
	.bg {
		width: 660upx;
		position: absolute;
		left: 50%;
		bottom: 0;
		transform: translateX(-50%);
		z-index: 0;
	}
</style>
