<template>
  <div class="container">
    <!-- bootstrap vue yu projeyi kurarken eklediğimiz için gidip direkt componentlerden alıp burada kullanabiliriz -->
    <!-- fomlardan alalım -->
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
      <b-button @click="signup" variant="outline-danger">sign up</b-button>
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
    signup(){
      //burada kayıt için vuex e ulaşacağız, ilk çağıracağımız action, çünkü action state i değiştirecek mutation u tetikliyor, 
      // burada dispatch ile önce createUser a göndereceğiz, createUser bizden email ve password bilgisini bekliyor (store daki index.js ye bak), bunun içinde v-model ile bunları bağlamaız gerekiyor, zaten email bağlanmıştı, password u da bağlayalım, v-model="form.password"
      this.$store.dispatch("users/createUser", this.form)
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
denememizi yapıp firebase e baktığımızda elemanın kaydolduğunu görürüz, 
console da da auth nesnesi içnde bir sürü bilgi var,
kayıt işlemi sıkıntısız yapılıyor, jwt bilgisi cookie alınıyor, sıkıntı yok
kullanıcı oluşturabiliyoruz, firebase e kaydedebiliyoruz, 
*/
</script>

<style scoped>
  .container{
    width : 40%
  }
</style>
