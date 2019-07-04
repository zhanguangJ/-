<template>
    <div class="detailContail">
        <img class="detail_img" :src="isMusicPlay? detailObj.music.coverImgUrl:detailObj.detail_img" alt="">
        <img 
            @tap="handleMusicPlay" 
            class="music_img" 
            :src=" isMusicPlay? '/static/images/music/music-start.png':'/static/images/music/music-stop.png'" 
            alt="">
        <div class="avatar_data">
            <img :src="detailObj.avatar" alt="">
            <span>{{detailObj.author}}</span>
            <span>发布于</span>
            <span>{{detailObj.date}}</span>
        </div>
        <p class="company">{{detailObj.title}}</p>
        <div class="collection_share_container">
            <div class="collection_share">
                <img @tap='handelCollected' :src="isCollected?'/static/images/icon/collection.png':'/static/images/icon/collection-anti.png'" alt="">
                <img @tap="handelShare" src="/static/images/icon/share-anti.png" alt="">
            </div>
            <div class="line"></div>
        </div>
        <Button open-type="share">转发此文章</Button>
        <p class="contents">{{detailObj.detail_content}}</p>
    </div>
</template>
<script>
import {mapState} from 'vuex'
import isPlayObj from '../../datas/isPlay.js'
export default {
    data(){
        return{
            detailObj : {},
            isCollected : false,
            isMusicPlay : false 
        }
    },
    beforeMount(){
        this.index = this.$mp.query.index
        let oldStorage = wx.getStorageSync('isCollected')
        //判断是否存在
        if(!oldStorage){
            //不存在就创建一个空的
            wx.setStorage({
                key :'isCollected',
                data : {}
            })
        }else{
            //存在就判断当前是否收藏 
            this.isCollected = (oldStorage[this.index]?true:false)
        }
        //判断当前页面加载的时候音乐是否在播放
        isPlayObj.pageIndex === this.index && isPlayObj.isPlay ? this.isMusicPlay = true : this.isMusicPlay = false
        //监听音乐的播放和暂停
        wx.onBackgroundAudioPlay(()=>{
            this.isMusicPlay = true;
            isPlayObj.pageIndex = this.index
            isPlayObj.isPlay = true
        })
        wx.onBackgroundAudioPause(()=>{
            this.isMusicPlay = false
            isPlayObj.isPlay = false
        })
    },
    mounted(){
        this.detailObj = this.listTmp[this.$mp.query.index]        
    },
    computed:{
        //映射到本组件
        ...mapState(['listTmp'])
    },
    methods:{
        handelCollected(){
            let isCollected = !this.isCollected
            this.isCollected = isCollected
            let title = isCollected?'收藏成功':'取消收藏'
            wx.showToast({
                title,
                icon:'success'
            })
            //读取本地缓存
            let oldStorage = wx.getStorageSync('isCollected')
            oldStorage[this.index] = isCollected
            //缓存到本地
            wx.setStorage({
                key : 'isCollected',
                data:oldStorage
            })
        },
        handleMusicPlay(){
            let isMusicPlay = !this.isMusicPlay
            this.isMusicPlay = isMusicPlay
            let {dataUrl,title} = this.detailObj.music
            if(isMusicPlay){
                wx.playBackgroundAudio({
                    dataUrl,
                    title
                })
            }else{
                wx.pauseBackgroundAudio()
            }
        },
        handelShare(){
            wx.showActionSheet({
                itemList:[
                    '分享到朋友圈',"分享到微博","分享给微信朋友"
                ]
            })
        }
    }
}
</script>
<style>
.detailContail{
    display: flex;
    flex-direction: column;
}
.detail_img{
    width: 100%;
    height: 460rpx;
}
.avatar_data{
    padding: 10rpx;
}
.avatar_data img{
    width: 64rpx;
    height: 64rpx;
    vertical-align: middle;
}
.avatar_data span{
    font-size: 28rpx;
    margin-left: 6rpx; 
}
.company{
    font-size: 32rpx;
    font-weight: bold;
    padding: 10rpx;
}
.collection_share_container{
    position: relative;
}
.collection_share{
    float: right;
    margin-right: 30rpx;
}
.collection_share img{
    width: 90rpx;
    height: 90rpx;
    margin-right: 20rpx;
}
.line{
    position: absolute;
    top: 45rpx;
    left: 5%;
    width: 99%;
    height: 2rpx;
    background: #f0f;
}
.contents{
    font-size: 32rpx;
    text-indent : 32rpx;
    letter-spacing: 3rpx;
    line-height: 50rpx;
}
Button{
    width: 227rpx;
    height: 54rpx;
    font-size: 32rpx;
    line-height: 54rpx;
}
.music_img{
    width: 60rpx;
    height: 60rpx;
    position: absolute;
    top: 200rpx;
    left: 50%;
    margin-left: -30rpx;
}
</style>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  