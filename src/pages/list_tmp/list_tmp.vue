<template>
    <div class="tmpContainer" @tap="toDetail">
        <div class="avatar_date">
            <img :src="item.avatar" alt="">
            <span>{{item.date}}</span>
        </div>
        <p class="company">{{item.title}}</p>
        <img class="list_img" :src="item.headImgSrc" alt="">
        <p class="content">{{item.detail_content}}</p>
        <div class="view_star_container">
            <img src="/static/icon/star.png" alt="">
            <span>{{item.love_count}}</span>
            <img src="/static/icon/view.png" alt="">
            <span>{{item.attention_count}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props:[
        'item','index'
    ],
    methods:{
        toDetail(){
            wx.navigateTo({
                url : "/pages/detail/main?index="+this.index
            })
        }
    }
}
</script>
<style>
    .tmpContainer{
        display: flex;
        flex-direction: column;
        border : 1rpx solid #eee;
    }
    .avatar_date{
        padding:10rpx;
    }
    .avatar_date img{
        width: 60rpx;
        height: 60rpx;
        vertical-align: middle;
        margin-right: 10rpx; 
    }
    .avatar_date span{
        font-size: 28rpx;
        color: #333;
    }
    .company{
        font-size: 40rpx;
        font-weight: bold;
        padding: 10rpx;
    }
    .list_img{
        width: 100%;
        height: 460rpx;
    }
    .content{
        font-size: 32rpx;
        text-indent: 32rpx;
        line-height: 50rpx;
        letter-spacing: 10rpx;
    }
    .view_star_container img{
        width: 32rpx;
        height: 32rpx;
        vertical-align: middle;
        margin-left:10rpx;
    }
    .view_star_container span{
        font-size: 28rpx;
        color: #333;
        margin-left: 10rpx;
    }

</style>
