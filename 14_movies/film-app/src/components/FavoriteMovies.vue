<template>
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
</template>

<script>
export default {

}
</script>

<style>

</style>