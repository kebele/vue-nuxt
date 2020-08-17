import Vue from 'vue'
import App from './App.vue'

import One from './components/One';
    
Vue.component( 'first', One)

export const eventBus = new Vue();

Vue.config.productionTip = false

Vue.directive('underline', 
(el => {
  el.style.textDecoration = 'underline'
}))

new Vue({
  render: h => h(App),
}).$mount('#app')
