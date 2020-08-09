import Vue from 'vue'
import Vuex from 'vuex'
import { productList } from '../assets/productData'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        card : [],
        products : productList,
    }
})