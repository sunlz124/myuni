<template>
    <view class="page">
        <homesearch></homesearch>
        <view class="content">
            <homeswiper></homeswiper>
            <topten></topten>
            <seckill></seckill>
            <textline text="热门推荐"></textline>
            <productlist></productlist>
        </view>
    </view>
	
    
</template>

<script setup>
    import homesearch from "./components/homesearch.vue"
    import homeswiper from "./components/homeswiper.vue"
    import topten from "./components/topten.vue"
    import seckill from "./components/seckill.vue"
    const say = ()=>{
        uni.navigateTo({
        	url: '../details/details' + "?data='我是从 index 页面传过来的值'",
        })
    }
</script>

<style>
    *{
        box-sizing: border-box;
    }
    .page{
        display: flex;
        flex-direction: column;
        background-color: #f6f6f6;
        padding-top: calc(var(--status-bar-height) + 50px);
    }
	.content {
        flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	
</style>
