import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Products from './components/Products.vue'
import Cart from './components/Cart.vue'

export default new VueRouter ({
    mode : 'history',
    routes: [
        {
            component : Products,
            path : '/products'
        },
        {
            component : Cart,
            path : '/cart'
        },
    ]
})