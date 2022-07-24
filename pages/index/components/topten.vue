<template>
    <view class="content">
        <view v-for="(item,index) in list" :key="index" class="item Hui-iconfont" @click="click(item)">
            <icon class="icon">&#xe669;</icon>
            <text class="text">{{item}}</text>
        </view>
    </view>
</template>

<script setup>
    const list = [
        '面包',
        '牛奶',
        '蔬菜',
        '生鲜',
        '水产',
        '水果',
        '手办',
        '母婴',
        '山货',
        '坚果'
    ]
    const click = (keyword) => {
        uni.navigateTo({
        	url: '../search/search' + `?keyWord=${keyword}`,
        })
    }
</script>

<style scoped>
    .content{
        margin:8px 10px;
        padding: 0 0 10px;
        border-radius: 12px;
        background-color: #fff;
        display: flex;
        flex-direction: row;
        flex-wrap:wrap;
        justify-content:space-around;
        align-items:center;
    }
    .item{
        width: 20%;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
        text-align: center;
        margin-top: 12px;
    }
    .icon{
        font-size: 32px;
        background-color: aqua;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        color: blueviolet;
    }
    .text{
        font-size: 14px;
        margin-top: 8px;
    }
</style>