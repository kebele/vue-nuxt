<template>
  <div class="searchByTitle">
    <div>
      <input type="text" placeholder="search by title" v-model="searchMovieTitle" />
      <button @click="getMovieById">search movie by title</button>
      <!-- {{ searchMovieTitle }} -->
      <!-- {{ this.$store.state.searchRes}} -->
      <table>
          <tr>
              <th>movie title</th>
              <th>movie year</th>
              <th>movie poster</th>
              <th>favori</th>
          </tr>
          <tr v-for="(i, index) in this.$store.state.searchRes.Search" :key="index">
              <td>{{ i.Title }}</td>
              <td>{{ i.Year }}</td>
              <td><img :src="i.Poster" alt="" class="imgPoster"></td>
              <td>
              <button>+</button>

              </td>
          </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchByTitle",
  data() {
    return {
      searchMovieTitle: "",
    };
  },
  methods: {
      getMovieById(){
          //http dediğimizde bunun axios u çalıştımasını main.js de ayarlamıştık,
          this.$http.get(`http://www.omdbapi.com/?s=${this.searchMovieTitle}&apikey=4f73315c`)
            .then((response) => {
                console.log(response)
                this.$store.commit('setSearchRes', response.data)
            });
      }
  },
};
</script>

<style scoped>
.searchByTitle {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.imgPoster{
    width: 50px;
    height: auto;
}
table,
th,
td{
    border : 2px solid black;
    border-collapse : collapse
}
th, td{
    padding: 5px;
}
</style>
