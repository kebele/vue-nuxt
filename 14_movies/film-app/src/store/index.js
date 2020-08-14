import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state : {
        searchRes : [],
    },
    mutations : {
        setSearchRes(state, payload){
            state.searchRes = payload
        }
    }
})