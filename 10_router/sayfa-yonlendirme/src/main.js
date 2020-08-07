import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import CompA from './components/CompA.vue'
import CompB from './components/CompB.vue'
import Detail from './components/Detail.vue'
import Alert from './components/Alert.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

//yönlendirme kontrolleri içn
// router.beforeEach((to, from, next)=>{
//   //her route geçişinde bir kontrol yapabiliriz mesela authentication var mı yada başka bir şeyler
//   next()
// })

// router.afterEach((to,from)=>{
//   //yönlendirme sonrası işlemler için
// })

// router.beforeResolve((to,from,next)=>{
//   //bu bütün komponentler ve alt componentler yüklendikten sonra çalışır, 
//   //async bir durum varsa bunun kullanılması iyi olur
//   next()
// })

//yukarıdaki tanımlamaları routes array i içinde de yapabiliriz

const router = new VueRouter({
  mode : 'history', //# işaretinden kurtulmak için
  routes : [
    {
      path : '/compa/:id',
      component : CompA,
      beforeEnter : (to,from,next)=>{
        
        next()
      }
    },
    {
      // path : '/compb-*', //- den sonraki gelen her adresi kabul eder
      path : '/compb', //- den sonraki gelen her adresi kabul eder
      component : CompB,
      children : [
        {
          path:'detail',
          component : Detail
        },
        {
          path:'alert',
          component : Alert
        },
      ]
    },
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
