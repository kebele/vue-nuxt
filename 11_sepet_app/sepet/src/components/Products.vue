<template>
    <div id="products">
        <h2>products</h2>
        <div class="notification" v-for="(info,key) in infos" :key="key">
            <table class="{ products : products.length !== 0}">
                <tr>
                    <th>product name</th>
                    <th>price</th>
                    <th>buy</th>
                </tr>
                <tr v-for="product in products" :key="product.id">
                    <td>{{ product.name }}</td>
                    <td>{{ product.price }}</td>
                    <td>
                        <label>
                            <input type="number" :id="product.id" value="0">
                        </label>
                    </td>
                    <td>
                        <button @click="addToCart(product)">add to cart</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data(){
        return {
            infos : [],
        }
    },
    computed: {
        ...mapState['products']
    },
    methods: {
        addToCart(product){
            if(document.getElementById(product.id).value > 1){
                const count = document.getElementById(product.id).value
                product = {...product, count}
                this.$store.commit('addToCart', product)
                const info = product.name + 'added to cart'
                this.infos.push(info)
                setTimeout(() => {
                    document.getElementById(product.id).value = 0
                    this.infos.splice(this.infos.indexOf(info), 1)
                }, 3000);
            } else {
                const info = 'please enter a valid input'
                // const info = 'lütfen uygun bir değer girin'
                this.infos.push(info);
                setTimeout(() => {
                    document.getElementById(product.id).value = 0
                    this.infos.splice(this.infos.indexOf(info), 1)
                }, 3000);
            }
        }
    },
}
</script>
<style>
    #products{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .products{
        border : 1px solid black;
        padding: 10px;
    }

    .notification{
        background-color: orange;
        padding: 10px;width: 400px;margin-bottom: 20px;border-radius : 25px; font-size: 24px;
    }

    button{
        border : none;
        cursor: pointer;
        padding: 5px 10px;
    }


</style>