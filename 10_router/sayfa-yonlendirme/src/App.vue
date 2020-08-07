<template>
  <div id="app">
    router çalışması
    <br>
    <router-link :to="'/compa/' + id">go to component A</router-link><br>
    <router-link to="/compb">go to component B</router-link><br>

    <hr>
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
 }
}
</script>

<style>
  .router-link-active{
    color: crimson;
    background-color:orange;
  }
</style>
