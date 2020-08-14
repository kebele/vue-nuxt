import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state : {
        searchRes : [],
        favoriteMovies : [],
    },
    mutations : {
        setSearchRes(state, payload){
            state.searchRes = payload
        },
        setFavoriteMovies(state, payload){
            state.favoriteMovies.unshift(payload)
        },

    }
})