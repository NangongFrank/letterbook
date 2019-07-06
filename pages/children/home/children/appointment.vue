<template>
	<view class="g">
		<view class="m">
			<view class="m-tt">
				<image src="/static/assests/home/chapter/user-head.png"></image>
				<view class="m-tt-info">
					<view class="name">茶大师</view>
					<view class="time">
						<view>湖南-长沙</view>
						<view>男</view>
						<view>1980.02.18</view>
						<view>175cm</view>
					</view>
				</view>
				<view class="action" @tap="focusEvent">
					<view class="iconfont icon-add" data-tag="focus" v-if="!isFocus">关注</view>
					<view v-else data-tag="focused">已关注</view>
				</view>
			</view>
		</view>
		<view class="c">
			<view class="c-tt">
				<view class="c-tt-tt dotted-content">邀约主题</view>
				<view class="c-tt-ct">诚邀爱茶人士一起品茶！</view>
			</view>
			<view class="c-ct">
				<view class="c-ct-tt dotted-content">赴约详情</view>
				<view class="c-ct-ct">
					<view class="c-ct-ct-li">
						<view class="label">日期:</view>
						<view class="value">2019-06-24</view>
					</view>
					<view class="c-ct-ct-li">
						<view class="label">时间:</view>
						<view class="value">14:30-17:00</view>
					</view>
					<view class="c-ct-ct-li">
						<view class="label">地址:</view>
						<view class="value">湖南省长沙市开福区北辰三角洲凤凰海购物中心</view>
					</view>
					<view class="bdb"></view>
					<view class="c-ct-ct-li">
						<view class="label">人数:</view>
						<view class="value">10人</view>
					</view>
					<view class="c-ct-ct-li">
						<view class="label">性别:</view>
						<view class="value">不限</view>
					</view>
					<view class="c-ct-ct-li">
						<view class="label">年龄:</view>
						<view class="value">20~40岁</view>
					</view>
					<view class="bdb"></view>
					<view class="c-ct-ct-li">
						<view class="label">费用:</view>
						<view class="value">免费</view>
					</view>
					<view class="c-ct-ct-li">
						<view class="label">已约:</view>
						<view class="value">3人</view>
					</view>
				</view>
			</view>
		</view>
		<view class="n">
			<view class="n-tt">已接受邀约的人员(3/10)</view>
			<view class="n-ct">
				<view class="n-ct-li"
				v-for="(value, index) in joinList"
				:key="index">
					<image :src="value.cover"></image>
					<view class="info">
						<view class="tip">
							<view class="label">赴约时间:</view>
							<view class="value" v-text="value.time"></view>
						</view>
						<view class="tip">
							<view class="label">赴约宣言:</view>
							<view class="value" v-text="value.tip"></view>
						</view>
					</view>
					<view class="action" @tap="simpleFocusEvent($event, index)">
						<view class="iconfont icon-add" data-tag="focus" v-if="!value.isFocus">关注</view>
						<view v-else data-tag="focused">已关注</view>
					</view>
				</view>
			</view>
		</view>
		<view class="f">
			<view class="f-tt">留言区</view>
			<view class="f-li"
			v-for="(value, index) in 4"
			:key="index">
				<view class="cover">
					<image src="/static/assests/home/chapter/tip-cover.png"></image>
				</view>
				<view class="f-li-info">
					<view class="name">纯爷们儿，三哥</view>
					<view class="time">2019-06-25 12:1822</view>
					<view class="tip">世界太大，想去哪儿？世界太大，想去哪儿？世界登记表把爱丁堡垃圾筐太大，想去哪儿？</view>
					<view class="iconfont icon-msg">
						<view>28</view>
					</view>
				</view>
			</view>
			<view class="f-tip">查看全部</view>
		</view>
		<view style="height: 104upx;"></view>
		<view class="fixed">
			<input placeholder="我来说两句..." v-model="myTask" @confirm="myTaskEvent"/>
			<button open-type="getUserInfo" 
			@getuserinfo="userInfoEvent">我要赴约</button>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				isFocus: false,
				joinList: [{
					cover: '/static/assests/home/appointment/cover.jpg',
					time: '14:00',
					tip: '不见不散',
					isFocus: false,
					}, {
					cover: '/static/assests/home/appointment/cover01.jpg',
					time: '14:00',
					tip: '不见不散',
					isFocus: false,
					}, {
					cover: '/static/assests/home/appointment/cover02.jpg',
					time: '14:00',
					tip: '不见不散',
					isFocus: false,
				}],
				myTask: '',
			}
		},
		onLoad(opitons) {
		
		},
		methods: {
			focusEvent({target}) {
				let {tag} = target.dataset
				if(tag == 'focus') {
					this.isFocus = true
				} else if(tag == 'focused'){
					this.isFocus = false
				}
			},
			simpleFocusEvent({target}, index) {
				let {tag} = target.dataset,
					vm = this,
					bl = vm.joinList[index].isFocus
				if(tag == 'focus') {
					vm.$set(vm.joinList[index], 'isFocus', true)
				} else if(tag == 'focused'){
					vm.$set(vm.joinList[index], 'isFocus', false)
				}
			},
			myTaskEvent({detail}) {
				console.log(detail.value)
				let vm = this
				setTimeout(() => {
					vm.myTask = ''
				}, 1200)
			},
			userInfoEvent({detail}) {
				if(detail.iv) {
					console.log(detail)
					// 前往赴约信息填写页面
					uni.navigateTo({
						url: '/pages/children/home/children/children/fillAppointmentOrder',
					})
				} else {
					// 拒绝获取用户信息
				}
			},
		},
	}
</script>
<style lang="less" scoped>
	@import "../../../../static/config.less";
	.fixed {
		position: fixed;
		bottom: 0;
		left: 0;
		padding: 0 20upx;
		width: 710upx;
		@{bgc}: #fff;
		input {
			@{fs}: 28upx;
			@{bgc}: #f6f6f6;
			@{bdra}: 36upx;
			padding: 8upx 20upx;
			width: 670upx;
		}
		button {
			margin: 50upx 0 10upx;
			@{bgc}: @baseColor;
			@{bdra}: 40upx;
			color: #fff;
			width: 710upx;
			height: 80upx;
			@{fs}: 30upx;
		}
	}
	.f {
		border-top: 6upx solid #f4f4f4;
		@{bgc}: #fff;
		padding: 0 20upx;
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
					margin-top: 12upx;
				}
			}
		}
		&-tt {
			@{fs}: 28upx;
			padding: 32upx 0 12upx;
		}
		.iconfont {
			display: flex;
			@{ai}: center;
			margin-top: 20upx;
			view {
				color: @c6;
				@{fs}:20upx;
				margin-left: 6upx;
			}
		}
		image {
			width: 74upx;
			height: 74upx;
			@{bdra}: 50%;
			margin-right: 12upx;
		}
	}
	.n {
		padding: 0 20upx;
		&-ct {
			&-li {
				display: flex;
				border-bottom: 2upx solid #f2f2f2;
				padding: 16upx 0;
				.label {
					@{fs}: 20upx;
					color: @c9;
				}
				.value {
					@{fs}: 22upx;
				}
				.tip {
					display: flex;
					line-height: 36upx;
				}
				.info {
					flex: 1;
					display: flex;
					@{fd}: column;
					@{jc}: center;
				}
			}
		}
		&-tt {
			@{fs}: 28upx;
			padding: 32upx 0 10upx;
			font-weight: 900;
		}
		image {
			width: 97upx;
			height: 97upx;
			@{bdra}: 50%;
			margin-right: 12upx;
		}
	}
	.c {
		border-top: 6upx solid #f4f4f4;
		border-bottom: 6upx solid #f4f4f4;
		padding: 74upx 0 40upx;
		&-ct {
			display: flex;
			@{fd}: column;
			@{ai}: center;
			&-ct {
				border: 2upx solid #f2f2f2;
				@{bdra}: 20upx;
				padding: 36upx 32upx;
				width: 534upx;
				.bdb {
					border-bottom: 2upx solid #f4f4f4;
					padding-top: 14upx;
					margin-bottom: 14upx;
				}
				&-li {
					display: flex;
					@{ai}: baseline;
				}
				.label {
					@{fs}: 24upx;
					color: @c9;
					width: 68upx;
				}
				.value {
					@{fs}: 28upx;
					line-height: 42upx;
					text-align: justify;
				}
			}
			&-tt {
				@{fs}: 28upx;
				color: @c6;
				margin: 76upx 0 22upx;
			}
		}
		&-tt {
			display: flex;
			@{fd}: column;
			@{ai}: center;
			&-tt {
				@{fs}: 28upx;
				color: @c6;
				margin-bottom: 20upx;
			}
			&-ct {
				font-weight: 900;
				@{fs}: 36upx;
			}
		}
	}
	.m {
		@{bgc}: #fff;
		padding: 0 20upx;
		border-top: 2upx solid #f4f4f4;
		&-tt {
			padding: 32upx 0;
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
					display: flex;
					@{ai}: center;
					@{jc}: space-between;
				}
			}
		}
	}
	.g {
		color: @c3;
	}
	.dotted-content {
		position: relative;
		&::before,
		&::after {
			content: "";
			position: absolute;
			width: 70upx;
			border-top: 4upx dotted #f2f2f2;
			top: 50%;
			transform: translateY(-50%);
		}
		&::before {
			left: -80upx;
		}
		&::after {
			right: -80upx;
		}
	}
	.action {
		padding-left: 30upx;
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
</style>
