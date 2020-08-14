<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <SearchByTitle />
  </div>
</template>

<script>
import SearchByTitle from './components/SearchByTitle'

export default {
  name: 'App',
  components: {
    SearchByTitle,
  }
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
}
</style>
