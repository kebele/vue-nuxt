<template>
  <div id="app">
    <CurrentData/>
  </div>
</template>

<script>
import CurrentData from './components/CurrentData'

export default {
  name: 'App',
 components : {
   CurrentData,
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
