<template>
    <div class='indexContainer'>
        <img class='index_img' :src="userInfo.avatarUrl" alt="">
        <Button class="btn" open-type="getUserInfo" @getuserinfo="getUserInfo" v-if="isShowButton">点击获取用户信息</Button>
        <p class="userName">hello {{userInfo.nickName}}</p>
        <div class="goStudy">
            <p @tap="toList">开启小程序之旅</p>
        </div>
    </div>    
</template>
<script>
export default {
    data(){
        return{
            userInfo : {},
            isShowButton : false
        }
    },
    beforeMount(){
        this.handleGetUserInfo();
    },
    methods:{
        handleGetUserInfo(){
            wx.getUserInfo({
                success : (data)=>{
                    this.userInfo = data.userInfo
                    this.isShowButton = false
                },
                fail:()=>{
                    this.isShowButton = true
                }
            })
        },
        getUserInfo(data){
            console.log(data)
            if(data.mp.detail.rawData){
                this.handleGetUserInfo()
            }
        },
        toList(){
            wx.switchTab({
                url: '/pages/list/main'
            })
        }
    }
}
</script>
<style>
page{
    background-color: #3498db;
}
    .indexContainer{
        display:flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }
    .index_img{
        width: 200rpx;
        height: 200rpx;
        border-radius:50%;
        margin:100rpx 0;
    }
    .userName{
        font-size:40rpx;
        font-weight: bold;
        margin:100rpx 0;
    }
    .goStudy{
        width: 220rpx;
        height: 80rpx;
        border:1rpx solid #eee;
        font-size: 24rpx;
        line-height: 80rpx;
        text-align: center;
        border-radius: 10rpx;
    }
    .btn{
        position: absolute;
        width: 300rpx;
        height: 300rpx;
        border-radius: 150rpx;
        margin: 50rpx 0;
        line-height: 300rpx;
        text-align: center;
        font-size: 26rpx;
    }
</style>
