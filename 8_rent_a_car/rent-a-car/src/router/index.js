import Vue from 'vue'
import VueRouter from 'vue-router'
import MainContent from '../components/MainContent.vue';
import Cars from '../views/Cars.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainContent
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: '/rent',
    name: 'Rent',
    component: Cars,
    props : true
  },
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
