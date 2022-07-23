<template>
   <swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" >
        <swiper-item v-for="(item,index) in list" :key="index" class="swiper-item" mode="widthFix">
            <image :src="item" />
        </swiper-item>
    </swiper>
    <!-- <view class="content">
        <text>1212</text>
       <text>{{n}}</text>
        <button @click="add">加</button>
        <text>{{a}}11111</text>
    </view> -->
</template>

<script setup>
    const a = uni.screenWidth
    import { ref, reactive } from 'vue'
    const list = [
        "https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg",
        "https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg",
        "https://storage.360buyimg.com/jdc-article/welcomenutui.jpg",
        "https://storage.360buyimg.com/jdc-article/fristfabu.jpg"
    ]
    const background = ['color1', 'color2', 'color3']
    const indicatorDots = true
    const autoplay = true
    const n = ref(0)
    const add = () => {
        n.value++
    }
    
</script>

<style scoped>
    .uni-margin-wrap {
        width: 100%;
    }
    .swiper {
        width: 100%;
        overflow: hidden;
        display: block;
    }
    .swiper-item {
        width: 100vw;
        
    }
    .swiper-item image{
        border-radius: 12px;
        margin-left: 10px;
        width: calc(100vw - 20px);
        height: 100%; 
    }

</style>