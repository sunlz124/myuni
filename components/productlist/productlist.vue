<template>
    <view class="content">
        <view v-for="(item,index) in list" :key="index" class="item" @click="click(item.title)">
            <image :src="item.url" />
            <view class="body">
                <text class="title">{{item.title}}</text>
                <view class="other">
                    <text class="price">¥{{item.price}}</text>
                    <text class="Hui-iconfont button">&#xe600;</text>
                </view>
            </view>
        </view>
    </view>
</template>

<script setup>
    const list = [{
            title:'空调，引领航天科技，空调，引领航天科技空调，引领航天科技空调，引领航天科技空调，引领航天科技空调，引领航天科技',
            url:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/117696/37/26850/439895/62da4c07E0e4c4d9a/3647cc2eb98d74d0.jpg!q80.dpg',
            price:'9999',
        },
        {
            title:'空调，引领航天科技',
            url:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/117696/37/26850/439895/62da4c07E0e4c4d9a/3647cc2eb98d74d0.jpg!q80.dpg',
            price:'9999',
        },
        {
            title:'空调，引领航天科技，空调，引领航天科技空调，引领航天科技空调，引领航天科技空调，引领航天科技空调，引领航天科技',
            url:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/117696/37/26850/439895/62da4c07E0e4c4d9a/3647cc2eb98d74d0.jpg!q80.dpg',
            price:'9999',
        },
        {
            title:'空调，引领航天科技，空调，引领航天科技空调，引领航天科技空调，引领航天科技空调，引领航天科技空调，引领航天科技',
            url:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/117696/37/26850/439895/62da4c07E0e4c4d9a/3647cc2eb98d74d0.jpg!q80.dpg',
            price:'9999',
        },
        {
            title:'空调，引领航天科技，空调，引领航天科技空调，引领航天科技空调，引领航天科技空调，引领航天科技空调，引领航天科技',
            url:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/117696/37/26850/439895/62da4c07E0e4c4d9a/3647cc2eb98d74d0.jpg!q80.dpg',
            price:'9999',
        },
        {
            title:'空调，引领航天科技，空调，引领航天科技空调，引领航天科技空调，引领航天科技空调，引领航天科技空调，引领航天科技',
            url:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/117696/37/26850/439895/62da4c07E0e4c4d9a/3647cc2eb98d74d0.jpg!q80.dpg',
            price:'9999',
        },
        {
            title:'空调，引领航天科技，空调，引领航天科技空调，引领航天科技空调，引领航天科技空调，引领航天科技空调，引领航天科技',
            url:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/117696/37/26850/439895/62da4c07E0e4c4d9a/3647cc2eb98d74d0.jpg!q80.dpg',
            price:'9999',
        },
        {
            title:'空调，引领航天科技，空调，引领航天科技空调，引领航天科技空调，引领航天科技空调，引领航天科技空调，引领航天科技',
            url:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/117696/37/26850/439895/62da4c07E0e4c4d9a/3647cc2eb98d74d0.jpg!q80.dpg',
            price:'9999',
        },
    ]
    const click = (text) => {
        uni.navigateTo({
        	url: '../details/details' + `?data=${text}`
        })
    }
</script>

<style scoped>
    .content{
        display: flex;
        width: 100%;
        flex-direction: row;
        align-items:flex-start;
        flex-wrap:wrap;
        overflow: hidden;
        padding: 0 5px;
    }
    .item{
        width: calc(50% - 15px);
        margin: 0 5px 10px;
        border-radius: 12px;
        overflow: hidden;
        background-color: #fff;
    }
    .item image{
        white-space: nowrap;
        width: 100%; 
        overflow: hidden;
        text-overflow:ellipsis;
        width: 100%;
    }
    .body{
        padding: 5px 10px;
    }
    .title{
        display: block;
        font-size: 14px;
        width: 100%; 
        overflow: hidden;
        text-overflow:ellipsis;
        line-clamp: 2;
        line-height: 24px;
        max-height: 28px;
    }
    .other{
        display: flex;
        justify-content:space-between;
        align-items:center;
    }
    .price{
        color: red;
        font-size: 16px;
    }
    .other .button{
        font-size: 16px;
        font-weight: 600;
        color: #fff;
        background-color: red;
        padding: 1px;
        border-radius: 50%;
    }
</style>