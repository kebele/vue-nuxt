//signup sayfasından kopyalayıp, düzenleyelim

<template>
  <div class="container">
    <b-form @submit.stop.prevent>
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>
      <label for="text-password">Password</label>
      <b-input
      v-model="form.password"
        type="password"
        id="text-password"
        aria-describedby="password-help-block"
      ></b-input>
      <b-form-text id="password-help-block">
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </b-form-text>
      <b-button @click="signin" variant="outline-primary">sign in</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  layout : "anonymousUser",
  data(){
    return {
      form : {
        email :"",
        password : ""
      }
    }
  },
  methods: {
    signin(){
      //burada signin için vuex e ulaşacağız, ilk çağıracağımız action, çünkü action state i değiştirecek mutation u tetikliyor, 
      // burada dispatch ile önce signin a göndereceğiz, singin bizden email ve password bilgisini bekliyor (store daki index.js ye bak), bunun içinde v-model ile bunları bağlamaız gerekiyor, zaten email bağlanmıştı, password u da bağlayalım, v-model="form.password"
      this.$store.dispatch("users/singin", this.form)
        .then(()=>{
          this.$router.push("/")
        })
        .catch(err=>{
          console.log(err)
        })
    }
  },
};
/* 
problemsiz şekilde singin çalışıyor şimdi index.vue da en yukarıya bir log out ekleyelim, ayrıca firebase de confirmasyon maili gönderme gibi opsiyonlarıda yapabiliriz
*/
</script>

<style scoped>
  .container{
    width : 40%
  }
</style>
