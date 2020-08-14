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
            console.log(state.searchRes)
        },
        setFavoriteMovies(state, payload){
            state.favoriteMovies.unshift(payload)
            // console.log(state.favoriteMovies)            
        },
        deleteFavoriteMovie(state, value){
            state.favoriteMovies.splice(value,1)
        }
    }
})