import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//Vue Vuex i kullansın


export const store = new Vuex.Store({
  state : {
      title : 'message'
  },
  getters : {
      getTitle : (state)=>{
        return state.title
      }
  }
})