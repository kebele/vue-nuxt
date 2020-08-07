import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//Vue Vuex i kullansın


export const store = new Vuex.Store({
//state in kendisi
  state : {
      title : 'message'
  },
//state i getirmek ve küçük değişiklikler, state e erişiyoruz
  getters : {
      getTitle : (state)=>{
        return state.title
      }
  },
// hem state e erişiyoruz hemde dışarıdan bir değer alabiliyoruz
//basit işlemler için
// state deki verileri değiştirmek

  mutations : {
      setTitle : (state, value) => {
        return state.title = value
      }
  },
  // yüklü, işlemler için actions kullanılır, async çalışabilir,
  //mutations lar tek başına kullnaılması önerilmiyor, actions ile tetiklenmesi öneriliyor  
  actions : {
      setTitleActions : (context, value) => {
        return context.commit('setTitle', value)
      }
  }
})