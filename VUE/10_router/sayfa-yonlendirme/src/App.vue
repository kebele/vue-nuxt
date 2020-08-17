<template>
  <div id="app">
    router çalışması
    <br>
    <router-link :to="'/compa/' + id">go to component A</router-link><br>
    <router-link to="/compb">go to component B</router-link><br>

    <hr>
    <button @click="routerA">router A</button>
    <!-- <button @click="routerB">router B</button> -->
    <button @click="$router.push('/compb')">router B</button>
    <router-view>

    </router-view>
  </div>
</template>

<script>


export default {
 data(){
   return {
     id : 246,
   }
 },
 methods: {
   routerA(){
     this.$router.push('/compa/' + this.id)
   },
   routerB(){
      this.$router.push('/compb')
      //this.$router.push('/compb') push ilk aldığı parametre burada old. gibi gideceği yer ikinci parametre olarakta caalback func alabilir, iki tür alır, başarılı durumda çalışacak olan başarısız durumda çalışacak olan, çok fazla kullanılmasa da ...
      //this.$router.push('/compb', ()==>{}, ()=>{})
      // this.$router.go(1)
      // this.$router.go(-1)
      // this.$router.back() 1 geriye gider
      // this.$router.forward() 1 ileri gider
      //go ile hem ileri hem geriye gönderebiliriz, eğer ileri ve geride sayfa varsa, 
   },
 },
}
</script>

<style>
  .router-link-active{
    color: crimson;
    background-color:orange;
  }
</style>
