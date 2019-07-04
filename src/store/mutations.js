import {RECEIVE_LIST,MOVIE_ARR} from './mutation-type'
export default{
    [RECEIVE_LIST](state,{list_data}){
        state.listTmp = list_data
    },
    [MOVIE_ARR](state,data){
        state.moviesArr = data
    }
}