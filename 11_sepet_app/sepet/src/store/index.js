import Vue from 'vue'
import Vuex from 'vuex'
import { productList } from '../assets/productData'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        cart : [],
        products : productList,
    },
    mutations : {
        addToCart({cart}, product){
            //state deki sadece cart ı alıyoruz demek
            const itemIndex = cart.findIndex(item => item.id === product.id)
            //product ın id si hazırdaki cart [] da var mı?, yni sepette daha önceden aynı üründen eklenmiş mi
            if(itemIndex === -1){
                //sepette daha önceden aynı üründen eklenmediyse product u sepete ekle
                cart.push(product)
            } else {
                //daha önceden sepette varsa miktarını arttıracağız, sepetteki ürünün id si ile ürüne erişip onun count unu; count seçilen ürünün id sinin value siydi, önceki product ın countunu alıp üstüne yeni count ekleyeceğiz,
                // parseInt gelen değeri integer a çevirir
                cart[itemIndex].count = cart[itemIndex].count + parseInt(product.count)
            }
        }
    }
})