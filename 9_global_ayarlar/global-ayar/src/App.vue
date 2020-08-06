<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld text-value="mesaj" msg="Welcome to Your Vue.js App"/>
    <input type="text" @keyup.media-play-pause="save">
    <!-- keep-alive hafıza da tutulmasını istediğimiz bir comp varsa onu bu tagların rarasına yazarız aşağıdfakinde component içinde a ve b yi hafızada tutar burada a ve yerine buraya array verilebilir veya bunlar dat da başka şleylerede bağlanabilir 
    include ve exclude da kullanılabilir -->
    <keep-alive include="a,b">
      <component :is="live"></component>
    </keep-alive>
  </div>

<!-- 
component isimlendirirken;

birden fazla kelime olmalı, 
tek bir yerde kullanılacaksa mesela TheHeading.vue daha güzel olur
isimlendirme de genel özellikten specifik özelliğe doğru gidilmeli
SearchButtonRun.vue gibi
PascalCase kulllan
 -->

 <!-- 
   BAZI UYARILAR;

   props gönderirken iki kelimeli göndereceksek
   mesela App.vue dan HellloWorld.vue ya 
   App.vue da
  <HelloWorld text-value="mesaj" msg="Welcome to Your Vue.js App"/>
  text-value yu props olarak yolluyoruz, HelloWorld.vue da yakalayalım, gönderirken text-value, yakalarken textValue şeklinde yakaladığımza dikkat,
    
export default { }
  props : {
    textValue : {
      type : String,
    }
  },

  bir başka props (veya methodlar vb. gibi) daha tanımlayacaksak araya bir boş szatır koyun deniyor, ayrıca template de de alt alta yazım tavsiye ediliyor, 

bir başka konu directive lerin kısaltmalarını bir yered kullan bir yerde kullanma yapmayın ya her yerde kısaltın yada her tarafta uzun yazın diyor

directivleri belli bir sıra ile gönderirseniz daha iyi olur diyor

aynı element içinde v-if ve v-for kullanmayın diyor

bir başka şey single file compta genelde sıra temlate script style şeklinde ama script ile template yer edğiştirebilir ama style her zaman altta olacak

css de mesela img şeklinde div şeklinde css verme diyor olayı class ve id ler üzerinde yap diyor, 

style da scoped mutlaka kullan deniyor, 

her taraftan ulaşılmamasını istediğimiz bir methdo varsa bunu tanımlarken $_methodAdı şeklinde tanımlarız,

{{....}} arasına uzun func yazmayın, yazmak lazımsa illa yazılacak şey computed olarak yazılır buraya computed func. ın ismi yazılır

computed property ler mümkün oold. kadar sade yazılmalıdır, bir işlem içinde 10 tane farklı iş yaptırmayın

data yönetiminde vuex kullanın 
$125.000.000


  -->

</template>




<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    //Vue da DOM ve virtual DOM aynı ise tekrart render yapılmaz ancak bazen tekrar render isteyebiliriz bu durumda kullanılır
    mesela(){
      this.$forceUpdate()
    }
    // methodların içinde arrow func. kullanmak tavsiye edilmez, this ile problem çıkabilir vs vs. Vue da arrow dan kaçınmak en güzeli
  },
  mounted() {
    //nextTick kullanımı, bazen her şey yüklendikten sonra başka bir iş yapılsın isteyebiliriz, mesela life cycle larda mounted var bu herşeyin yüklenmesini garanti etmez ana comp lar yüklenmesini baz alır ama alt comp lar yüklenmemiş olabilir, nextTick ile alt complarında yüklenmesini baz alınır hale getirebiliriz, bir nevi bir setTimeout gibi sadece burada süre yok, her şeyin tamamen yüklenmiş olmasını bekler, bzaen çok kullanışlıdır
    this.$nextTick(()=>{

    })
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
