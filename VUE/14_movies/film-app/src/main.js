import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import { store } from './store'


Vue.config.productionTip = false
Vue.prototype.$http = axios
//http yazdığımızda direkt axios çalışsın

Vue.use(VueRouter)
import SearchByTitle from './components/SearchByTitle.vue'
import FavoriteMovies from './components/FavoriteMovies.vue'
import MovieDetail from './components/MovieDetail.vue'
import ReviewPage from './components/ReviewPage.vue'

const router = new VueRouter({
  mode : 'history',
  routes : [
    { path : '/search', component : SearchByTitle },
    { path : '/favorite', component : FavoriteMovies },
    { path : '/detail', component : MovieDetail },
    { path : '/review', component : ReviewPage },
  ]
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
