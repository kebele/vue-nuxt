import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state : {
        title : 'message'
    },
    getters : {
        getTitle: (state)=> {
            return state.title
        }
    },
    mutations : {
        setTitle : (state, value) => {
            state.title = value
        }
    },
    actions : {
        setTitleActions : (context, value) => {
            setTimeout(() => {
                context.commit('setTitle', value)
            }, 2500);
        }
    }
})