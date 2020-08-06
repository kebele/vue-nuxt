import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//vue başladığında production ipuçları kapanır
Vue.config.silent = true
//tüm vue log ve uyarıları kapanır
Vue.config.devtools = true
//development tools production da kapatılır defaultta 
Vue.config.performance = true
//kodun neresinde ne kadarlık perf alınıyor o örülür

Vue.config.Vue.config.keyCodes = {
  // camelCase won`t work
  // mediaplaypause : 179
  "media-play-pause" : 179
  //bu yazım tarsıda üsttekiyle aynıdır
  // App.vue da bu tuşa bir func. bağladık, buna basıldığında o func çalışır
}

Vue.set()
//bir şeyleri farklı ayarlamak için veya reactif ...
Vue.delete()
//reactif dilmek ...
Vue.directive()
//
Vue.filter()
//
Vue.mixin()
//
let componentA = Vue.component('my-comp', Vue.extend({}))
//comp tanımlaması yapabiliriz

Vue.use()
//içine yazdığımız eklenti bir sefer çalışır, tekrar tekrar yüklememiz gerekmez,
// Vue.version = ...
// versiyon şuysa şöyle yap vb...


new Vue({
  render: h => h(App),
}).$mount('#app')
