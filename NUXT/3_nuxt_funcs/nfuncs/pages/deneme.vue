<template>
  <div>
    <!--
      sayfanın adını validate i denemek için _deneme.vue dan deneme.vue ya çevirdim
       -->
    deneme
    <br>
    <hr>
    {{ value }}
  </div>
</template>

<script>
export default {
  /* async asyncData ({ params, $axios, error }) {
    return await $axios.get(`https://jsonplaceholder.typicode.com/${params.deneme}`)
      .then((res) => {
        // return { value: res.data }
        return { value: res.data[5].title } // beşinci indisteki elemanının title al
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'page was not found' })
      })
  } */
  // bir tane daha örnek yapalım context ile ilgili, console dan baktığımızda neler var diye axioslar var, lif cycle la ilgili mount vs var, bir süreü şey var, burada context ile bize gelen parametreler (yani asyncData ile kullanabileceğimiz şeyler) 3 e ayrılır, universal case (her iki taraftada kullanabileceğimiz şeyler), server side case ve client side case olarak,

  asyncData (context) {
    // return console.log(context)
    // server side damıyız, client side da mıyız?
    if (process.server) {
      // true ise severdayız
    }
    if (process.client) {
    }
  },
  // asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
  // bunların hepsi context olarak kullanılır
  //   asyncData (context) {
  //     console.log(context)
  //   }
  // fake api kullanarak bir örnek yapalım, axios kullanacağız, get işlemi yapacağız ve API deki posts u çekip dataaki value ye atayıp instance da yazdıracağız, bu örnegin aynısı nux dokumantasyonunda da var, async await şeklinde de yapabiliriz, sadece axios, mesela error de yakalayabbiliriz, catch ile ve kendi error sayfamıza yolayabiliriz
  // sonuç başarılı
  // önemli bir not olarak asyncData içinde kullanılan methodlar componentin içinbde başka bir yerdede kullanılıyorsa bu ikisi birleştirilir,
  data () {
    return {
      value: null
    }
  }
}
</script>

<style scoped></style>
