<template>
  <div id="app">
    <h4>get için</h4>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.email }}<br><img class="image" :src="item.avatar"/></li>
    </ul>
    <h4>send için</h4>
    <input type="text" v-model="name">
    <br>
    <input type="text" v-model="job">
    <button @click="sendUser">save user</button>
    <br>
    <h4>delete için</h4>
    <input type="text" v-model="id">
    <br>
    <button @click="deleteUser">delete user</button>
    <br>
    <h4>put için</h4>
    <input type="text" v-model="name">
    <br>
    <input type="text" v-model="job">
    <br>
    <input type="text" v-model="id">
    <button @click="updateUser">update user</button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      items : [],
      name : "",
      job : "",
      id: null,
    };
  },
  methods: {
    sendUser(){
      this.$http.post("https://reqres.in/api/users", {name : this.name, job : this.job})
        .then(response => {
          console.log(response.body)
        }, ()=> {
          console.log("hata var")
        })
    },
    deleteUser(){
      this.$http.delete("https://reqres.in/api/users/" + this.id)
        .then( res => {
          console.log(res)
        })
    },
    updateUser(){
      this.$http.put("https://reqres.in/api/users/" + this.id, {name : this.name, job : this.job})
        .then(resp => {
          console.log(resp)
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
