<template>
	<view class="content">
		<view class="text-area">
			<text class="title">{{title}}</text>
			<button @click="say">跳转到user</button>
			<mytab></mytab>
			<!-- <uni-rate v-model="value" /> -->
		</view>
	</view>
</template>

<script>
	// import uniBadge from "@/components/uni-badge/uni-badge.vue"
	export default {
		data() {
			return {
				title: 'Hello1',
				value:2
			}
		},
		onLoad() {

		},
		methods: {
			say:function(){
				console.log('123',this.$Router)
				//通过name方式跳转
				this.$Router.push({
					name: 'user',
					params: {
						name: 'Joseph',
						age: 22
					}
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
