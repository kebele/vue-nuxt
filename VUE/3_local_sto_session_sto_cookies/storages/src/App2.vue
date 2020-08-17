<template>
  <div id="app">
    <input type="text" v-model="value">
    <br>
    <button @click="saveData">save</button>
  </div>
</template>

<script>
var CryptoJS = require("crypto-js");
export default {
  data(){
    return {
      value : '',
    }
  },
  methods: {
   saveData(){
    //  var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123').toString();
    //yukarıdaki şablon olarak npm sayfasından aldığımız kullanım
    //  var ciphertext = CryptoJS.AES.encrypt(this.value, 'secret key 123').toString();
      const foo = CryptoJS.AES.encrypt(this.value, 'secret key 123').toString()
      localStorage.setItem('userData', foo);
      console.log(foo);
      //şifrelenmiş halde aldık, şimdi bunu decode edelim
      var bytes  = CryptoJS.AES.decrypt(foo, 'secret key 123');
      var originalText = bytes.toString(CryptoJS.enc.Utf8);
      console.log(originalText);


   }
  }  
}
</script>

<style>

</style>
