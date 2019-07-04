<template>
    <div>
        <div class="moviesContainer" v-for="(item,index) in moviesArr" :key="index" @tap="ToMovieDetail(index)" >
            <img class="movies_img" :src="item.images.large" alt="">
            <div class="movies_info">
                <p class="movies_name">{{item.original_title}}</p>
                <p class="movies_year">年份：{{item.year}}</p>
                <p class="movies_dir">导演：{{item.directors[0].name}}</p>
            </div>
            <p class="movies_rating">{{item.rating.average}}</p>
        </div>
    </div>
</template>
<script>
const MOVIE_URL = "http://t.yushu.im/v2/movie/top250";
export default {
    data(){
        return {
            moviesArr : []
        }
    },
    beforeMount(){
        this.$fly.get(MOVIE_URL)
        .then((response) =>{
            let moviesArr = response.data.subjects
            this.moviesArr = moviesArr
            this.$store.dispatch('getMovie',moviesArr)
        })
        .catch( (error) => {
            console.log(error);
        });
    },
    methods:{
        ToMovieDetail(index){
            wx.navigateTo({
                url:"/pages/movie_detail/main?index="+index
            })
        }
    }
}
</script>
<style>
.moviesContainer{
    display: flex;
    padding:10rpx;
}
.movies_img{
    width: 128rpx;
    height: 128rpx;
    margin-right: 20rpx;
}
.movies_info{
    width: 70%;
}
.movies_name{
    font-size: 32rpx;
    color:#333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.movies_year{
    font-size:28rpx;
    color:#999;
    margin: 5rpx 0;
}
.movies_dir{
    font-size: 30rpx;
    color: #666;
}
.movies_rating{
    font-size: 36rpx;
    font-weight: bold;
    color: red;
}
</style>
