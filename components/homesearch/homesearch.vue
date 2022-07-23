<template>
    <view class="content">
        <view class="left">
            <i class="Hui-iconfont">&#xe665;</i>
            <text>推荐购买的商品</text>
        </view>
        <view class="right">
            <i class="Hui-iconfont">&#xe640;</i>
            <i class="Hui-iconfont">&#xe640;</i>
        </view>
        
    </view>
</template>

<script setup>
    
</script>

<style scoped>
    *{
        box-sizing: border-box;
    }
    .content{
        height: 32px;
        width: calc(100vw - 20px);
        border: 1px solid #000;
        border-radius: 20px;
        margin-bottom: 10px;
        padding:0 15px;
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        align-items:center;
    }
</style>