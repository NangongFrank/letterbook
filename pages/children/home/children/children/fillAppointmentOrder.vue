<template>
	<view class="m">
		<view class="m-li">
			<view class="label">我的赴约时间:</view>
			<view class="picker">
				<picker mode="date" :value="date"  @change="dateChangeEvent">
					<view class="uni-input">{{date}}</view>
				</picker>
				<picker mode="time" :value="time"  @change="timeChangeEvent">
					<view class="uni-input">{{time}}</view>
				</picker>
			</view>
		</view>
		<view class="m-li">
			<view class="label">我的赴约留言:</view>
			<view class="input">
				<input :value="inputValue" />
			</view>
		</view>
		<view class="m-li">
			<view class="label">赴约信息展示:</view>
            <radio-group @change="radioChange">
                <label v-for="(item, index) in items" :key="item.value">
                    <view>
                        <radio :value="item.value" style="transform: scale(.6);" color="#666" 
						:checked="index === defaultCurrent" />
                    </view>
                    <view>{{item.name}}</view>
                </label>
            </radio-group>
		</view>
		<view class="m-ct">
			<view class="m-ct-tt">《免责声明》</view>
			<view class="m-ct-ct">
				<view>（1）用户在信书APP注册为自愿行为，不确保注册信息的完全真实性；</view>
				<view>（2）邀约及赴约为用户间的自愿行为，赴约方需自行判断邀约的真实性，信书  运营主体对双方在邀约活动中发生的任何纠纷不承担任何法律责任。</view>
				<view>（3）不得利用信书APP发布损害国家利益的政治性言论邀约，亦不可发布涉嫌黄赌毒等法律明令禁止行为的邀约；</view>
				<view>（4）信书运营主体享有本APP的所有交友条款和声明的最终解释权。</view>
			</view>
			<checkbox-group @change="isKnownChange" class="m-ct-ft">
				<label>
                    <checkbox :checked="isKnown" value="kown" color="#666" style="transform:scale(0.7)" />我知道了
                </label>
			</checkbox-group>
		</view>
		<view class="submit">
			<view class="button" v-if="isKnown" @tap="confirmEvent">提交</view>
			<view v-else>提交</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				time: new Date().toLocaleTimeString().replace(/^\W{2}/, '').replace(/:\d{1,2}$/, ''),
				date: new Date().toLocaleDateString().replace(/\//g, '-'),
				inputValue: '我会准时赴约，期待与大家的见面!',
				items: [{
					value: 0,
					name: '公开'
					}, {
					value: 1,
					name: '隐藏'
				}],
				defaultCurrent: 0,
				current: 0,
				isKnown: true,
			}
		},
		onLoad(opitons) {

		},
		methods: {
			timeChangeEvent({detail}) {
				let {value} = detail
				this.time = value
			},
			dateChangeEvent({detail}) {
				let {value} = detail
				this.date = value
			},
			radioChange({detail}) {
				let {value} = detail
				this.current = value
				console.log(this.current)
			},
			isKnownChange({detail}) {
				let {value} = detail,
					tag = ''
				if(value.length > 0) {
					tag = true
				} else {
					tag = false
				}
				this.isKnown = tag
			},
			confirmEvent() {
				uni.showModal({
					title: '确定',
					content: '确定信息？'
				}).then(([err, {confirm, cancel}]) => {
					if(!cancel) {
						// 用户点击确定操作
						console.log('我点击了确定')
					} else {
						
					}
				})
			},
		},
	}
</script>
<style lang="less" scoped>
	@import "../../../../../static/config.less";
	.m {
		border-top: 2upx solid #ccc;
		padding: 0 20upx;
		color: @c3;
		.submit {
			position: fixed;
			left: 0;
			bottom: 0;
			padding: 10upx 20upx;
			width: 710upx;
			view {
				@{bdra}: 40upx;
				@{fs}: 30upx;
				height: 80upx;
				display: flex;
				@{ai}: center;
				@{jc}: center;
				@{bgc}: #f2f2f2;
			}
			.button {
				@{bgc}: @baseColor;
				color: #fff;
				&:active {
					opacity: .8;
				}
			}
		}
		&-ct {
			&-tt {
				@{fs}: 28upx;
				margin: 86upx 0 20upx;
				display: flex;
				@{jc}: center;
			}
			&-ct {
				line-height: 40upx;
				@{fs}: 20upx;
				view {
					text-align: justify;
					margin: 12upx 0;
				}
			}
			&-ft {
				@{fs}: 24upx;
				display: flex;
				@{jc}: center;
			}
		}
		&-li {
			padding: 26upx 0;
			display: flex;
			@{jc}: space-between;
			@{ai}: baseline;
			@{fs}: 24upx;
			border-bottom: 2upx solid #ddd;
		}
		picker {
			margin-left: 20upx;
		}
		.input {
			flex: 1;
			display: flex;
			input {
				flex: 1;
				text-align: right;
			}
		}
		radio-group {
			display: flex;
			label {
				display: flex;
				@{ai}: baseline;
				margin-left: 20upx;
			}
		}
		.picker {
			display: flex;
		}
	}
</style>
