<template>
    <div class="listContainer">
        <swiper 
            indicator-dots 
            indicator-color="#1ABC9C" 
            indicator-active-color="#34495E"
            autoplay
            interval="2500"
            circular
        >
            <swiper-item>
                <img src="/static/images/detail/carousel/01.jpg" alt="">
            </swiper-item>
            <swiper-item>
                <img src="/static/images/detail/carousel/02.jpg" alt="">
            </swiper-item>
            <swiper-item>
                <img src="/static/images/detail/carousel/03.jpg" alt="">
            </swiper-item>
            <swiper-item>
                <img src="/static/images/detail/carousel/04.jpg" alt="">
            </swiper-item>
        </swiper>
        <div>
            <ListTmp v-for="(item,index) in listTmp"  :key="index" :item="item" :index="index"/>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import ListTmp from '../list_tmp/list_tmp.vue'
export default {
    components:{
        ListTmp
    },
    beforeMount(){
        //分发action修改状态
        this.$store.dispatch('getList')
    },
    computed:{
        //映射状态到本组件
        ...mapState(['listTmp'])
    }
}
</script>
<style>
    .listContainer swiper{
        width: 100%;
        height: 400rpx;
    }
    .listContainer swiper img{
        width: 100%;
        height: 100%;
    }
</style>
