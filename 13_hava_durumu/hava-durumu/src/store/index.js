import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state : {
        weatherValues : []
    },
    mutations : {
        setWeatherValue(state, payload){
            state.weatherValues.unshift(payload)
        }
    }
})