import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state : {
        carInfo : null
    },
    mutations : {
        setInformation(state, value){
            state.carInfo = value
        }
    }
})