<template>
  <div>
      <input type="text" placeholder="search by title" v-model="searchMovie" />
      <button @click="xxx">search movie by title</button>
  </div>
</template>

<script>
export default {
    name : 'SearchByTitle',
    data(){
        return {
            searchMovie  : ''
        }
    }
}
</script>

<style>

</style>