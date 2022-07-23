<template>
	<view class="content">
        <homesearch></homesearch>
        <homeswiper></homeswiper>
		<view class="text-area">
			<text class="title">{{title}}</text>
			<button @click="say">跳转到details</button>
		</view>
	</view>
    
</template>

<script setup>
    const title='hello'
    const say = ()=>{
        uni.navigateTo({
        	url: '/pages/details/details' + "?data='我是从 index 页面传过来的值'",
        })
    }
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
