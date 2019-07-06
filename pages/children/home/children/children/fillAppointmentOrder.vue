<template>
	<view class="m">
		<view class="m-time">
			<view class="label">我的赴约时间:</view>
			<picker mode="time" :value="time" start="09:01" end="21:01" @change="timeChangeEvent">
                        <view class="uni-input">{{time}}</view>
                    </picker>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				time: '',
			}
		},
		onLoad(opitons) {

		},
		methods: {
			timeChangeEvent(e) {
				console.log(e)
			},
		},
	}
</script>
<style lang="less" scoped>
	@import "../../../../../static/config.less";
</style>
