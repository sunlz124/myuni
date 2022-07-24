<template>
    <text class="line">{{text}}</text>
</template>

<script setup>
    // import { ref } from 'vue'
    const props = defineProps({
        text:{
            default:''
        }
    })
    // const text = ref('')
</script>

<style scoped>
    .line{
        display: flex;
        width: 100%;
        height: 40px;
        margin-bottom: 8px;
        text-align: center;
        position: relative;
        justify-content:center;
        align-items:center;
        font-size: 14px;
        font-weight: 600;
        color: #333;
    }
    .line::before{
        content: '';
        position: absolute;
        left: 10px;
        top: 50%;
        width: calc(50% - 60px);
        border-bottom: 1px solid red;
        height: 1px;
    }
    .line::after{
        content: '';
        position: absolute;
        right: 10px;
        top: 50%;
        width: calc(50% - 60px);
        border-bottom: 1px solid red;
        height: 1px;
    }
</style>