<template>
  <div>
    
    <h1 v-if="error.statusCode === 404">page not found</h1>
    <h1 v-if="error.statusCode === 403">page not found code : 403</h1>
    <br>
    <nuxt-link to="/">go to homepage</nuxt-link>
    
    <!-- <Nuxt /> -->
    <!-- Nuxt etiketine gerek yok çünkü bu normal bir sayfa olmayacak -->
    <div v-if="$nuxt.isOffline">you are not online</div>
  </div>
</template>

<script>
export default {
    props : ['error'],
    layout : 'default',
}
</script>