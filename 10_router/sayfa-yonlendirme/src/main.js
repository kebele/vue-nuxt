import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import CompA from './components/CompA.vue'
import CompB from './components/CompB.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode : 'history', //# işaretinden kurtulmak için
  routes : [
    {
      path : '/compa/:id',
      component : CompA
    },
    {
      path : '/compb',
      component : CompB
    },
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
