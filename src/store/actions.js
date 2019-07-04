import { RECEIVE_LIST, MOVIE_ARR } from './mutation-type'
import listData from '../datas/list-data'
export default {
    getList({ commit }) {
        //触发对应的mutation
        commit(RECEIVE_LIST, listData)
    },
    getMovie({ commit }, data) {
        //触发对应的mutation
        commit(MOVIE_ARR, data)
    }
}