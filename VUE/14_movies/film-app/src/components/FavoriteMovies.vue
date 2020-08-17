<template>
  <div class="favoriteMoviesClass">
    <h3>my favorite movies</h3>
    <table>
      <tr>
        <th>movie title</th>
        <th>movie year</th>
        <th>movie poster</th>
        <th>delete</th>
        <th>detail</th>
      </tr>
      <tr v-for="(i, index) in this.$store.state.favoriteMovies" :key="index">
        <td>{{ i.Title }}</td>
        <td>{{ i.Year }}</td>
        <td><img :src="i.Poster" alt="" class="imgPoster" /></td>
        <td>
          <button @click="deleteFav(index)"> - </button>
        </td>
        <td>
          <button @click="detail(i.imdbID)"> detail </button>
        </td>
      </tr>
    </table>
    <button @click="goSearch">go search</button>
    <button @click="goReview">go review</button>
  </div>
</template>

<script>
export default {
  name: "FavoriteMovies",
  methods: {
      deleteFav(index){
          this.$store.commit('deleteFavoriteMovie', index)
      },
      goSearch(){
          this.$router.push('/search')
      },
      detail(id){
          this.$store.commit('setImdbID', id)
          this.$router.push('/detail')
      },
      goReview(){
          this.$router.push('/review')
      }
  },
};
</script>

<style scoped>

.favoriteMoviesClass {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.imgPoster {
  width: 50px;
  height: auto;
}
table,
th,
td {
  border: 2px solid black;
  border-collapse: collapse;
}
th,
td {
  padding: 5px;
}
</style>
