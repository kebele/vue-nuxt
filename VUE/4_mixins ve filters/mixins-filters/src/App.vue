<template>
  <div id="app">
    <button @click="hello">mixin calistir</button>
    <br>
    {{say}}
    <br>
    {{ 'selamlar' | capitalize }}
    <br>
    {{ 'real madrid' | reverseValue | capitalize}}
    <br>
    {{ 'barcelona' | newCapitalize}}
    <br>
    <span>{{ 20000 | currency }}</span>
    <br>
    <span>{{ someDate | moment("dddd, MMMM Do YYYY") }}</span>
    <br>
    <span>{{ new Date() | moment("dddd, MMMM Do YYYY") }}</span>
  </div>
</template>

<script>
import { newMixin } from './newMixin'

export default {
  mixins : [newMixin],
  components: {
    
  },
  data(){
    return {
      someDate : '12.12.2015',
    }
  }, 
  filters:{
    capitalize(value){
      if(!value)''; // boşsa hiç bir şey yapma
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    reverseValue(value){
      return value.split('').reverse().join('');
    }

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
