<template>
  <div>
    id page
  </div>
</template>

<script>
export default {
  validate ({ params, store, redirect }) {
    // return true
    // true dersek ana sayfadan hangi parametre ile gelirsek gelelim ( mesela http://localhost:3000/loginxx )id.vue yu yani bu sayfayı gösterir, false yaparsakta sayfa bulunamıyor der
    if (store.state.authenticated) {
      return true
    // } else { return false }
    // redirect yapalım, bu da state false ise logine yollasın bizi
    } else { redirect('/login') }
    throw new Error('500 ')
  }

}
</script>

<style scoped>

</style>
