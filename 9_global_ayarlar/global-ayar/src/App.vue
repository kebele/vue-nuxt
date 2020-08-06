<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <input type="text" @keyup.media-play-pause="save">
    <!-- keep-alive hafıza da tutulmasını istediğimiz bir comp varsa onu bu tagların rarasına yazarız aşağıdfakinde component içinde a ve b yi hafızada tutar burada a ve yerine buraya array verilebilir veya bunlar dat da başka şleylerede bağlanabilir -->
    <keep-alive include="a,b">
      <component :is="live"></component>
    </keep-alive>
  </div>
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
