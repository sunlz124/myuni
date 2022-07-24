<template>
    <view class="content Hui-iconfont">
        <view class="header">
            <text class="title">
                秒杀
                {{tips}}
                <text v-show="isShow">{{h}}:{{m}}:{{s}}</text>
            </text>
            <text class="subTitle">进入专场&#xe6d7;</text>
        </view>
        <view class="body">
            <view v-for="(item,index) in list" :key="index" class="item">
                <image :src="item" />
                <text class="price">¥999</text>
            </view>
        </view>
    </view>
</template>

<script setup>
    import { ref } from 'vue'
    const list = [
        'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/117696/37/26850/439895/62da4c07E0e4c4d9a/3647cc2eb98d74d0.jpg!q80.dpg',
        'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/117696/37/26850/439895/62da4c07E0e4c4d9a/3647cc2eb98d74d0.jpg!q80.dpg',
        'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/117696/37/26850/439895/62da4c07E0e4c4d9a/3647cc2eb98d74d0.jpg!q80.dpg',
        'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/117696/37/26850/439895/62da4c07E0e4c4d9a/3647cc2eb98d74d0.jpg!q80.dpg',
        'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/117696/37/26850/439895/62da4c07E0e4c4d9a/3647cc2eb98d74d0.jpg!q80.dpg',
    ]
    const isShow = ref(false)
    const tips = ref('')
    const h = ref('00')
    const m = ref('00')
    const s = ref('00')
    setInterval(()=>{
        const date = new Date()
        // 活动开始时间
        const timeStart = new Date(`
            ${new Date().getFullYear()}/
            ${date.getMonth()+1}/
            ${new Date().getDate()}
            12:
            00:
            00
        `)
        // 活动结束时间
        const timeEnd = new Date(`
            ${new Date().getFullYear()}/
            ${date.getMonth()+1}/
            ${new Date().getDate()}
            14:
            00:
            00
        `)
        if( date.getHours() < timeStart.getHours()){
            isShow.value = true
            tips.value = '距离活动开始还有'
            const diff = timeStart - date
            h.value = parseInt(diff/1000/60/60%24)
            m.value = parseInt(diff/1000/60%60)
            s.value = parseInt(diff/1000%60)
        }else if(date.getHours() >= timeStart.getHours() && date.getHours() < timeEnd.getHours()){
            isShow.value = true
            tips.value = '距离活动结束还有'
            const diff = timeEnd - date
            h.value = parseInt(diff/1000/60/60%24)
            m.value = parseInt(diff/1000/60%60)
            s.value = parseInt(diff/1000%60)
            
        }else if( date.getHours() >= timeEnd.getHours()){
            isShow.value= false
            tips.value = '活动已结束'
        }
    },1000)
</script>

<style scoped>
    .content{
        width: calc(100% - 20px);
        margin:8px 10px;
        padding: 10px;
        border-radius: 12px;
        background-color: #fff;
    }
    .header{
        display: flex;
        width: 100%;
        height: 36px;
        flex-direction: row;
        justify-content:space-between;
        align-items:center;
    }
    .title{
        font-size: 14px;
        font-weight: 600;
        color: #333;
    }
    .subTitle{
        font-size: 14px;
        font-weight: 400;
        color: #666;
    }
    .body{
        width: 100%;
        height: 100px;
        display: flex;
        flex-direction: row;
        overflow-x: scroll;
    }
    .body::-webkit-scrollbar {
        display:none
    }
    .body .item:first-child{
        margin-left: 0;
    }
    .item{
        margin-left: 10px;
        width: 80px;
        display: flex;
        flex-direction: column;
        justify-content:center;
    }
    .item image{
        width: 80px;
        height: 80px;
        border-radius: 8px;
    }
    .item .price{
        color: red;
        font-size: 14px;
        text-align: center;
    }
</style>