<template>
	<view class="content">
        <homesearch></homesearch>
        <homeswiper></homeswiper>
		<view class="text-area">
			<button @click="say">跳转到details</button>
		</view>
        123
	</view>
    
</template>

<script setup>
    const say = ()=>{
        uni.navigateTo({
        	url: '../details/details' + "?data='我是从 index 页面传过来的值'",
        })
        console.log('1111')
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
