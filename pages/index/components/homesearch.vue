<template>
    <view class="content">
        <view class="status_bar"/>
        <view class="search">
            <view class="left">
                    <i class="Hui-iconfont">&#xe665;</i>
                    <swiper class="swiper" circular vertical autoplay disableTouch>
                        <swiper-item class="swiper-item" v-for="(item,index) in list" :key="index">
                            <text @click="clickSearchKey(item)">{{item}}</text>
                        </swiper-item>
                    </swiper>
                </view>
                <view class="right">
                    <i class="Hui-iconfont">&#xe650;</i> 
                    <i class="Hui-iconfont">&#xe682;</i>
                </view>
            </view>
        </view>
       
</template>

<script setup>
    const list = [
        '华为荣耀华为耀华为荣耀',
        '小米78',
        'oppo56',
        'iPhone99'
    ]
    const clickSearchKey = (keyword) => {
        uni.navigateTo({
        	url: '../search/search' + `?keyWord=${keyword}`,
        })
        // console.log(keyWord)
    }
</script>

<style scoped>
    .content{
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        background-color: #fff;
    }
    .status_bar {
        height: var(--status-bar-height);
        width: 100%;
        display: block;
    }
    .search{
        /* height: 32px; */
        width: calc(100vw - 20px);
        border: 1px solid #000;
        border-radius: 20px;
        margin-bottom: 10px;
        padding:0 10px;
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        align-items:center;
    }
    .left{
        flex: 1;
        display: flex;
        flex-direction: row;
        justify-content:flex-start;
        align-items:center;
    }
    .right{
        width: 60px;
        display: flex;
        flex-direction: row;
        justify-content:space-around ;
        align-items:center;
    }
    .swiper{
        flex: 1;
        height: 32px;
        padding: 0 10px;
    }
    .swiper-item{
        white-space: nowrap; 
        width: 100%; 
        overflow: hidden;
        text-overflow:ellipsis;
    }
    .swiper-item text{
        white-space: nowrap; 
        width: 100%; 
        overflow: hidden;
        text-overflow:ellipsis;
        font-size: 14px;
        color: #666;
        line-height: 32px;
    }
</style>