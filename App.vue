<script>
	export default {
		/* onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		} */
	}
</script>

<style>
	* {
		color: #333;
	}
	.add-more {
		padding: 14upx 20upx;
		font-size: 32upx;
		color: #555;
		display: flex;
		justify-content: center;
		background-color: #fff;
	}
	.add-more view {
		position: relative;
	}
	.add-more view::before,
	.add-more view::after {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		content: "-------";
		color: #999;
	}
	.add-more view::before {
		left: -100upx;
	}
	.add-more view::after {
		right: -100upx;
	}
</style>
