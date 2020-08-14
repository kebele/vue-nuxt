import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios
//http yazdığımızda direkt axios çalışsın


new Vue({
  render: h => h(App),
}).$mount('#app')
