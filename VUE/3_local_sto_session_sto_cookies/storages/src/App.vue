<template>
  <div id="app">
    <input type="text" v-model="userName" />
    <br>
    <button @click="setCookies">set cookie</button>
    <br />
    <button @click="removeCookies">remove cookies</button>
    <br />
    <!-- parametre göndermektense parametre meselsini methodun içinde kapsam ile çözelim -->
    <!-- <button @click="bcryptToken(userName)">bcrypt</button> -->
    <button @click="bcryptToken">bcrypt</button>
    <br />
    <!-- <button @click="compareBcrypt(userName, hashValue)">bcrypt karşılaştır</button> -->
    <button @click="compareBcrypt">bcrypt karşılaştır</button>
    <br>
    <button @click="tokenJwt">j w t</button>
    <br>
    <button @click="decodedToken">decode j w t</button>
  </div>
</template>

<script>
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

export default {
  data() {
    return {
      userName: "",
      hashValue: "",
      privateKey : '1233344',
      token : null,
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
    // bcryptToken(userName) {
    bcryptToken() {
      // aşağısı şablon olarak npm sayfasından aldığımız
      // bcrypt.genSalt(10, function(err, salt) {
      //   bcrypt.hash("B4c0//", salt, function(err, hash) {
      //     // Store hash in your password DB.
      //   });
      // });
      const dataValue = this; //temolate den parametre yollamak yerine...
      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(dataValue.userName, salt, function(err, hash) {
          if (err) {
            console.log(err);
            return;
          }
          // else {
          // this.hash = hash;
          console.log(`HASH : ${hash}`);
          //problemsiz şifrelenmiş hali geldi, şimdi check password durumunun nasıl yapıldığına bakalım, yine npm sayfasına gideceğiz,
          //burada parolaları artık doğrudan kaydetmektense hash şeklini kaydederiz, çok daha güvenli olur, db lerede bu türden kritik bilgileri keydederken hash leme kullanılır, burada gelen hash ı da bir değişkene atarsak karşılaştırma yaparken kolaylıık olur, check password konusuna bakalım, parolayı hash şekklini kaydettik peki birisi gelip parolayı girdiğinden bunu nasıl kontrol edeceğiz?, bunun için compare() var.
          // }
          dataValue.hashValue = hash
        });
      });
      // this.hashValue = this.hash
    },
    // compareBcrypt(userName, hash) {
    compareBcrypt() {
      //şablonu yapıştıralım
      // bcrypt.compare("B4c0//", hash, function(err, res) {
      // res === true
      // });
      const dataValue = this; //temolate den parametre yollamak yerine...
      bcrypt.compare(dataValue.userName, dataValue.hashValue, function(err, res) {
        // res === true
        if (res) {
          console.log("karşılaştırma başarılı");
        }
      });
    },
    tokenJwt(){
      // const token = jwt.sign({ foo: 'bar' }, 'shhhhh'); //şablon
      this.token = jwt.sign({ user: this.userName }, this.privateKey);
      console.log(this.token);
      /* burada butona bastığımızda bize token ı verecek bunu alıp jwt.io sitesine yapıştırdığımızda bu site bizim bu token ı çözer ve içinde olanları bize gösterir , bazı değişiklikler yapalım*/
    },
    /* decode edilmiş halinide yazdırabiliriz */
    decodedToken(){
      //şablon
      //const decoded = jwt.verify(token, 'shhhhh');
      const decoded = jwt.verify(this.token, this.privateKey);
      console.log(decoded);
    }
  }
};
</script>

<style></style>
