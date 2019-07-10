<template>
	<view class="m">
		<view class="wrapper"
		@tap="jumpTopicInfo(value)"
		v-for="(value, index) in dataList"
		:key="index">
			<view class="m-tt">
				<view class="m-tt-t">
					<view>话题</view>
				</view>
				<view class="m-tt-c" v-text="value.title"></view>
			</view>
			<!-- <view class="m-ct">
				<view v-for="(val, ind) in value.imgs"
				:key="ind">
					<image class="long-img" :src="val.url" v-if="val.long" mode="widthFix"></image>
					<image class="simple-img" :src="val.url" v-else mode="aspectFill"></image>
				</view>
			</view> -->
			<view class="m-ct">
				<view>
					<image class="simple-img" :src="value.img" mode="aspectFill"></image>
				</view>
			</view>
			<view class="m-ft">
				<view class="m-ft-time" v-text="$date('YmdHis',value.createTime)">2019-06-25</view>
				<view class="m-ft-info">
					<view v-text="value.baseLikeCount + '点赞'"></view>
					<view v-text="value.baseConsultantCount + '评论'"></view>
				</view>
				<view class="m-ft-author">
					来自
					<view class="name" v-text="value.sysUserName">茶大师</view>
				</view>
			</view>
		</view>
		<view class="add-more" v-if="isMore" @tap="loadMore">
			<view>加载更多</view>
		</view>
	</view>
</template>
<script>
	import {getUserTopicList, imgHost} from '@/extends/hosts'
	export default {
		name: 'Topic',
		data() {
			return {
				userId: '',
				pageNo: 1,
				pageSize: 5,
				topicList: [],
				isMore: false,
				dataList: [/* {
					tt: '为什么茶店永远没人??',
					imgs: [{
						url: "/static/assests/home/topic/long-img.jpg",
						long: true,
					}],
					time: '2019-06-25',
					good: 25,
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
					tip: 58,
					author: '茶大师',
				} */],
			}
		},
		methods: {
			getTopicList() {
				let vm = this,
					userId = vm.userId,
					pageNo = vm.pageNo,
					pageSize = vm.pageSize
				uni.request({
					url: getUserTopicList,
					method: 'POST',
					header: {
						"Content-type": 'application/x-www-form-urlencoded',
					},
					data: {
						userId,
						pageNo,
						pageSize,
					},
				}).then(([err, {data}]) => {
					if(data.result == 0) {
						data = data.data
						if(data.total > pageNo * pageSize) {
							this.isMore = true
						} else {
							this.isMore = false
						}
						let r = data.list.map(value => {
							value.img = imgHost + value.img
							return value
						})
						this.dataList = this.dataList.concat(r)
					}
				})
			},
			loadMore() {
				this.pageNo ++
				this.getTopicList()
			},
			jumpTopicInfo({themeId, id}) {
				uni.navigateTo({
					url: '/pages/children/home/children/topic?themeId=' + themeId
				})
			},
		},
		created() {
			uni.getStorage({
				key: 'userId'
			}).then(([err, {data}]) => {
				this.userId = data
				this.getTopicList()
			})
		},
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
	.long-img {
		width: 710upx;
	}
	.simple-img {
		width: 220upx;
		height: 220upx;
	}
</style>
