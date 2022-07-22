<template>
	<view>
		Details:
		<text>{{text}}</text>
		<button @click="back">返回</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text:'没人给我传参数'
			}
		},
		onLoad(options) {
		  this.text = options.data
		},
		methods: {
			back:function(){
				uni.navigateBack()
			}
		}
	}
</script>

<style>

</style>
