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
        },
        //...mapMutations(['deductItemCount', 'removeItem', 'clearAll'])
        //Cart.vue dan getirdim, hangi func ları burada tanımlayacağımızı görmek için
        deductItemCount({cart}, product){
            //bir tane eksiltme işi yapacak func
            //öncelikle gelen elemanın indexini bulup oradan sayısına ulaşıp 1 tane azaltacağız
            const itemIndex = cart.findIndex(item => item.id === product.id)
            //eğer gelen elemanın sayısı 1 den büyükse sayısından 1 eksilt değilse kendisini sil
            cart[itemIndex].count > 1 ? cart[itemIndex].count -- : cart.splice(itemIndex,1)
        },

        removeItem({cart}, product){
            //ürünü tamamen kaldırmak
            const itemIndex = cart.findIndex(item => item.id === product.id)
            cart.splice(itemIndex,1)
        },
        clearAll({state}){
            //hepsini sileceğiz, state de yazabilirdik, ama anlam karmaşası olmasın diye üsttede cart kullanıkd hep
            state.cart = []
        },
    },
    //getters methodlarını yazalım, getters daki tek methodumuz totalAmount 
    getters : {
        totalAmount(state){
            let amount = 0
            state.cart.map(item => {
                amount += item.price * item.count
            })
            return amount
        }
    }
})

//burada bir actions yazmadık sebebi bir async işlem yok, herhangibir api kullanımı yok