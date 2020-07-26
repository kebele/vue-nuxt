<template>
  <div id="app">
    <input type="text" v-model="userName" />
    <button @click="setCookies">set cookie</button>
    <br />
    <button @click="removeCookies">remove cookies</button>
    <br />
    <button @click="bcryptToken(userName)">bcrypt</button>
  </div>
</template>

<script>
import bcrypt from "bcryptjs";

export default {
  data() {
    return {
      userName: "",
    };
  },
  methods: {
    setCookies() {
      //npm sayfasındaki set satırını alıp düzenleyeceğiz, aşağıya npm den aldığım şablonu koydum
      // this.$cookies.set("user_session","25j_7Sl6xDq2Kc3ym0fmrSSk2xV2XkUkX")
      //30MIN cookie nin geçerli olacağı zaman (expire time), yine npm sayfasında var, eğer süresiz kalmasını istiyorsak süre kısmına Infinity koyarız,
      this.$cookies.set("token", this.userName, "30MIN");
    },
    removeCookies() {
      //token ı silmek için ise yine npm sayfasında,
      //this.$cookies.remove("token");
      this.$cookies.remove("token");
      //hemen cookies e yansımayabilir yeniden cokies e geresek gittiğini görürüz
    },
    bcryptToken(userName) {
      // aşağısı şablon olarak npm sayfasından aldığımız
      // bcrypt.genSalt(10, function(err, salt) {
      //   bcrypt.hash("B4c0//", salt, function(err, hash) {
      //     // Store hash in your password DB.
      //   });
      // });
      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(userName, salt, function(err, hash) {
          if (err) {
            console.log(err);
            return;
          } else {
            console.log(`HASH : ${hash}`);
            //problemsiz şifrelenmiş hali geldi, şimdi check password durumunun nasıl yapıldığına bakalım, yine npm sayfasına gideceğiz
          }
        });
      });
    },
  },
};
</script>

<style></style>
