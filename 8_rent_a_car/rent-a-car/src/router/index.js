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
    props : true,
    // beforeEnter: (to, from, next) => {
    //   // ...
    //   // mesela kullanıcının buraya girme yetkisi var mı?    
    //     if(to.name !== 'login' && !isAuthentication) next('/login')
    //       //eğer loginden gelmiyorsa veya authentication yoksa 
    //       else next()
    // }
  },
]

const router = new VueRouter({
  routes,
  mode:'history'
})

//middleware kullanımı yani burada bir orta katman var, her route öncesi bunu yapar buna benzer bir kullanımı mesela rent içindede yapabiliriz, beforeEnter şeklinde koda bak
// router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  //her route değişimi öncesi belli kontrolleri buradan yapabiliriz daha kolay olur, 
  // if(to.name !== 'login' && !isAuthentication) next('/login')
  //   //eğer loginden gelmiyorsa veya authentication yoksa 
  //   else next()
  
// })

export default router
