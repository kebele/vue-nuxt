<template>
  <div>
    user is authenticated
    <hr>
    <button @click="$store.commit('changeAuth')">
      kayıt durumunu değiştir
    </button>
    <nuxt-link to="/login">
      login
    </nuxt-link>
  </div>
</template>

<script>
export default {
//   middleware: 'authenticated'
// middleware i ayrı bir dosya değilde burada tanımlayalım bir de
  middleware ({ store, redirect }) {
    if (!store.state.authenticated) {
      return redirect('/login')
    }
  }
}
</script>

<style scoped>

</style>
