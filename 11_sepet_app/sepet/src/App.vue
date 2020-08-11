<template>
  <div id="app">
    <router-link to="/"><img src="./assets/logo.png" alt="id"></router-link>
    <router-link to="/products">products</router-link>
    <router-link to="/cart">cart</router-link>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  
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
  display: flex;
  flex-direction: column;
}
</style>
