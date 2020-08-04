<template>
  <div id="app">
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.email }}<br><img class="image" :src="item.avatar"/></li>
    </ul>
    <input type="text" v-model="name">
    <br>
    <input type="text" v-model="job">
    <button @click="sendUser">save user</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items : [],
      name : "",
      job : "",
    };
  },
  methods: {
    sendUser(){
      this.$http.post("https://reqres.in/api/users", {name : this.name, job : this.job})
        .then(response => {
          console.log(response.body)
        })
    }
  },
  // mounted() {
    beforeCreate() {
      //bununla app oluşturulamdan yapacak    
      // GET /someUrl
      this.$http.get("https://reqres.in/api/users").then(
        (response) => {
          // get body data
          // this.someData = response.body;
          this.items.push(...response.body.data)
          console.log(response.body.data);
        },
        (response) => {
          // error callback
          // console.log(response);
          console.log(response.body.data);
        }
      );
    
  },
};
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

.image {
  width: 100px;
  height: auto;
}
</style>
