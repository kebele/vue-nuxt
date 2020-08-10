<template>
    <div>
        <h2>Cart</h2>
        <ul>
            <li v-for="item in cart" :key="item.id">
            <span class="item-name">
                {{item.name}}
                <button @click="deductItemCount(item)"> -1 </button>
                <button @click="removeItem(item)"> X </button>
            </span>
            <span class="item-count">{{item.price}} * {{item.count}}</span>
            <span class="item.amount">{{ formatCurrency(item.count * item.count) }}</span>
        </li> 
        </ul>
        <div v-if="cart.length === 0">
            <h2>no item</h2>
        </div>
        <div v-else>
            <div class="total-amount">{{ formatCurrency(totalAmount) }}</div>
            <button @click="clearAll">clear all</button>
            <button>checkout</button>
        </div>
           
    </div>
</template>
<script>
import { mapState, mapMutations, mapGetters} from 'vuex'
//vuex den her şeyi değil bunları al demek için {} kullanılır

export default {
    computed: {
        ...mapState(['cart']),
        //spread olarak mapState den cart ı alacağız
        ...mapGetters(['totalAmount'])
        //getters içinden totalAmount u alacağız, bunları value gibi kullanabiliriz artık
    },
    methods: {
        formatCurrency(price){
            //gelen elemanın (cart ve cart a da productList ten geliyor) fiyatını bir formata sokmak, $25.34 gibi
            return '$' + price.toFixed(2)
        },
        ...mapMutations(['deductItemCount', 'removeItem', 'clearAll'])
        //yukarıda template de bulunan func ları bu şekilde yazdık, artık bunlar mutations da tanımlanmış gibiler, şimdi bunları index.js de yani store da oluşturalım, normalde methods olarak burada oluşturuyorduk ancak işlemleri state ile ilgili old. için index.js de oluşturmak daha mantıklı
    },
}
</script>
<style>
    ul{
        list-style: none;
    }
    li{
        display: flex;
        max-width: 700px;
        margin: auto;
        margin-top: 10px;
    }
    .item-name{
        text-align: left;
        font-size: 18px;
        flex: 2;
    }
    .item-count{
        font-size: 25px;
        margin-left: 10px;
        flex: 2;
    }
    .item-amount{
        text-align: left;
        flex : 1
    }
    .total-amount{
        border-top : 2px solid black;
        border-bottom: 2px solid black;
        padding: 10px 20% 10px 10px;
        margin: 10px;
        font-size: 29px;
        text-align: right;
    }
    button{
        border: none;
        cursor: pointer;
        padding : 5px 10px;
    }
</style>