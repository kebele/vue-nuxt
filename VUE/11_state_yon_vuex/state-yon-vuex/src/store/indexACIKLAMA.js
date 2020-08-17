import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './gettersACIKLAMA'
//* içindeki herşeye ulaş demek

Vue.use(Vuex)
//Vue Vuex i kullansın


export const store = new Vuex.Store({
//state in kendisi
  state : {
      title : 'message'
  },

//state i getirmek ve küçük değişiklikler, state e erişiyoruz
//getters ı ayrı dosya yaptık ve buraya import ettik
  getters,

// hem state e erişiyoruz hemde dışarıdan bir değer alabiliyoruz
//basit işlemler için
// state deki verileri değiştirmek, sync işlemler mutations da
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