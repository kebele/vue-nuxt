<template>
  <div id="app">
    
  </div>
</template>

<script>


export default {
  data(){
    return {

    }
  },
  mounted() {
    {
  // GET /someUrl
  this.$http.get('https://reqres.in/api/users').then(response => {
 
    // get body data
    // this.someData = response.body;
 console.log(response)
  }, response => {
    // error callback
     console.log(response)
  });
}
  },
  
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
