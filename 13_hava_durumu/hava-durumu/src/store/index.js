import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state : {
        weatherValues : [],
        hourlyWeather : [],
    },
    mutations : {
        setWeatherValue(state, payload){
            state.weatherValues.unshift(payload)
        },
        setHourlyWeather(state, payload){
            state.hourlyWeather.unshift(payload)
        }
    }
})