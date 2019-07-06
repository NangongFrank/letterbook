<template>
	<view class="m">
		<view class="m-tt">
			<image src="/static/assests/home/chapter/user-head.png"></image>
			<view class="m-tt-info">
				<view class="name">我是达人</view>
				<view class="time">2019-06-25 12:18:22</view>
			</view>
			<view class="m-tt-action" @tap="focusEvent">
				<view class="iconfont icon-add" data-tag="focus" v-if="!isFocus">关注</view>
				<view v-else data-tag="focused">已关注</view>
			</view>
		</view>
		<view class="m-nav">
			<view class="m-nav-token">文章</view>
			乱套了！国际女排转会市场疯抢优秀二传！可以放丁霞出去试试吗？
		</view>
		<view class="m-ct">
			<image src="/static/assests/home/chapter/ct-img01.jpg" mode="widthFix"></image>
			<view>新一季各国的女排联赛还有几个月才会开战，但国际转会市场上的“抢人”行动一直没有停止，最近各国联赛争夺优秀二传的抓马此起彼伏，十分精彩。</view>
			<view>最开始的抓马发生在美国二传洛伊德身上，洛伊德在结束了巴西的赛季后，下赛季打算回到意大利联赛加盟卡萨尔马焦雷，她曾经帮助过这支队伍拿到欧冠的冠军，算是再次联手，然而，在这个时候，半路杀出个程咬金，土超豪门伊萨其巴希挥舞金元大棒，活活把人家给拆散了！洛伊德下赛季改而加盟伊萨！卡萨尔马焦雷只得退而求其次签了上赛季费内巴切的二传安东尼耶维奇。</view>
			<image src="/static/assests/home/chapter/ct-img02.jpg" mode="widthFix"></image>
			<view>接着同样是土超豪门拿着钱继续拆散别人，这次轮到瓦基弗银行，没错，就是朱婷效力了三年的俱乐部。他们把目标对准了莫斯科迪纳摩队的二传奥杰年诺维奇，这位新科世锦赛冠军上赛季刚刚帮助球队卫冕俄超冠军，并且已经早在二月就跟球队续约。瓦基弗银行在放走朱婷后，显然钱包足够涨鼓鼓，硬是拿着大合同把塞尔维亚二传给掳了过来！奥杰年诺维奇已经36岁了，处于职业生涯的暮年，面对高额的合同显然无法拒绝。</view>
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
		<view class="f">
			<view class="f-li"
			v-for="(value, index) in 4"
			:key="index">
				<view class="cover">
					<image src="/static/assests/home/chapter/tip-cover.png"></image>
				</view>
				<view class="f-li-info">
					<view class="name">流浪地球</view>
					<view class="time">8分钟前</view>
					<view class="tip">世界太大，想去哪儿？世界太大，想去哪儿？世界登记表
	把爱丁堡垃圾筐太大，想去哪儿？</view>
				</view>
			</view>
			<view class="f-tip">查看全部</view>
		</view>
	</view>
	
</template>
<script>
	export default {
		data() {
			return {
				isFocus: false,
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
 		},
	}
</script>
<style lang="less" scoped>
	@import "../../../../static/config.less";
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
				}
			}
		}
		image {
			width: 74upx;
			height: 74upx;
			@{bdra}: 50%;
			margin-right: 12upx;
		}
	}
	.m {
		color: @c3;
		border-top: 2upx solid #ddd;
		padding: 0 20upx;
		@{bgc}: #fff;
		&-tip {
			display: flex;
			padding: 20upx 0 36upx;
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
		&-ct {
			image {
				width: 710upx;
				margin: 12upx 0;
			}
			view {
				line-height: 50upx;
				@{fs}: 24upx;
				color: @c6;
				text-align: justify;
			}
		}
		&-nav {
			position: relative;
			@{fs}: 32upx;
			&::before {
				content: "";
				display: inline-block;
				width: 70upx;
				height: 40upx;
			}
			&-token {
				position: absolute;
				left: 0;
				top: 10upx;
				color: #fff;
				@{bgc}: @baseColor;
				@{bdra}: 6upx;
				padding: 4upx 8upx;
				@{fs}: 20upx;
			}
		}
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
</style>
