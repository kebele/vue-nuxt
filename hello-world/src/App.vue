<template>
  <div id="app">
    <!-- 
      v-bind : datadaki bir değere bağlamak için
      v-on : bir function çalıştırmak için
      mesela aşağıda inputta bir değişiklik olup bittiğinde changeInput func. çalıştırır, maxLength olarak MaxValue değerini bağladık, 5 taneden fazla karakter girilmesine izin vermez
      $event ile değeride alırız, koda bak
     -->
    <input v-bind:placeholder="inputHolder" v-on:change="changeInput($event)"/>
    <br>
    <input v-bind:maxLength="maxValue">
    <br>
    <button v-on:click="buttonClick">TIKLA</button>
  </div>
</template>

<script>


export default {
  data(){
    return {
      inputHolder : "şehir seçiniz",
      maxValue : 5
    }
  },
  methods: {
    changeInput($event){
      console.log($event.target.value);
    },
    buttonClick(){
      console.log("tıklandı");
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;  
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
