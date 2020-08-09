<template>
    <div id="products">
        <h2>products</h2>
        <div class="notification" v-for="(info,key) in infos" :key="key">
            <table class="{ products : products.length !== 0}">
                <!-- eğer products da bir şeyler varsa o zaman class alacak -->
                <tr>
                    <th>product name</th>
                    <th>price</th>
                    <th>buy</th>
                </tr>
                <tr v-for="product in products" :key="product.id">
                    <!-- computed ile sate deki products ı almış olduk??? -->
                    <td>{{ product.name }}</td>
                    <td>{{ product.price }}</td>
                    <td>
                        <label>
                            <input type="number" :id="product.id" value="0">
                            <!-- id yi dinamik verdik, inputta belli bir ürünü almamız gerekiyor seçmek için bunun içinde unique bir id ye ihtiyacımız var -->
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
//map ile başlayan kullanımlarda mapState ise mesela state deki ne varsa alıp kullanmamıza izin veriyor, aktif olarak yoğunlukla kullanılır
export default {
    data(){
        return {
            infos : [],
            // 
        }
    },
    computed: {
        ...mapState['products']
        //mesela burada bunu this.$store.state.products şeklinde de yazabiliridik, bu şekilde de aynı işi görür daha az karakter olmuş olur
    },
    methods: {
        addToCart(product){
            if(document.getElementById(product.id).value > 1){
                // seçilen değereimn 0 dan büyük old. kontrolu
                const count = document.getElementById(product.id).value
                product = {...product, count}
                //product daki tüm elermanlar + count demek
                this.$store.commit('addToCart', product)
                //commit mutations ı hatırlatır, mutations dki addToCart a parametre olarak produt gönder
                const info = product.name + 'added to cart'
                //bildirim oluşturuyor ve infos []'a pushluyoruz
                this.infos.push(info)
                //3000ms sonra infos a eklediğimizi sileceğiz
                setTimeout(() => {
                    document.getElementById(product.id).value = 0
                    this.infos.splice(this.infos.indexOf(info), 1)
                    // index değerinden itibaren silinecek eleman ... splice kullanımı
                }, 3000);
            } else {
                // eğer girilen değer 0 ise, else durumu yani
                const info = 'please enter a valid input'
                // const info = 'lütfen uygun bir değer girin'
                this.infos.push(info);
                //3000ms sonra infos a eklediğimizi sileceğiz
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