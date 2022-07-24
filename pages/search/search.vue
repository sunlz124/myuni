<template>
    <view>
        我是搜索页面,我要搜索的关键词是:
        <text>{{keyWord}}</text>
        <button @click="back">返回</button>
    </view>
</template>

<script setup>
    const props = defineProps({
        keyWord:{
            default:''
        }
    })
    const back = () => uni.navigateBack()
    
</script>

<style>

</style>
