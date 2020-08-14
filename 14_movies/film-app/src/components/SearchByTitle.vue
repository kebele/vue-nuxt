<template>
  <div class="searchNyTitle">
    <div>
      <input type="text" placeholder="search by title" v-model="searchMovie" />
      <button @click="xxx">search movie by title</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchByTitle",
  data() {
    return {
      searchMovie: "",
    };
  },
};
</script>

<style>
.searchByTitle {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
