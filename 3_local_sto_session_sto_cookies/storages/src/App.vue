<template>
  <div id="app">
    <input type="text" v-model="userName">
    <button @click="setCookies">set cookie</button>
    <br>
    <button @click="removeCookies">remove cookies</button>
  </div>
</template>

<script>

export default {
  data(){
    return {
    userName : '',
    }
  },
  methods: {
    setCookies(){
      //npm sayfasındaki set satırını alıp düzenleyeceğiz, aşağıya npm den aldığım şablonu koydum
      // this.$cookies.set("user_session","25j_7Sl6xDq2Kc3ym0fmrSSk2xV2XkUkX")
      //30MIN cookie nin geçerli olacağı zaman (expire time), yine npm sayfasında var, eğer süresiz kalmasını istiyorsak süre kısmına Infinity koyarız, 
      this.$cookies.set("token",this.userName,"30MIN")
    },
    removeCookies(){
      //token ı silmek için ise yine npm sayfasında, 
      //this.$cookies.remove("token");
      this.$cookies.remove("token");
      //hemen cookies e yansımayabilir yeniden cokies e geresek gittiğini görürüz
    }
  }  
}
</script>

<style>

</style>
