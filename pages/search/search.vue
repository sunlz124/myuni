<template>
    <view>
        我是搜索页面,我要搜索的关键词是:
        <text>{{keyWord}}</text>
        <button @click="back">返回</button>
    </view>
</template>

<script setup>
    import { ref, defineProps } from 'vue'
    const text = ref('')
    const props = defineProps({
        keyWord:{
            default:''
        }
    })
    // text.value = options.keyWord
    // export default {
    //     data() {
    //     	return {
    //     		text:'没人给我传参数'
    //     	}
    //     },
    //     onLoad(options) {
    //       this.text = options.keyWord
    //     },
    //     methods: {
    //         back:function(){
    //         	uni.navigateBack()
    //         }
    //     }
    // }
</script>

<style>

</style>
