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
  components: {
    
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

</style>
