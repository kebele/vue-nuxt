<template>
  <div id="app">
    <CurrentData/>
    <HourlyWeather/>
  </div>
</template>

<script>
import CurrentData from './components/CurrentData'
import HourlyWeather from './components/HourlyWeather'

export default {
  name: 'App',
 components : {
   CurrentData,
   HourlyWeather,
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
