<template>
  <div>
    <!-- mesela bir istek yaptığımızda istek bekleme modundaysa o zaman ekrana loading yazsın -->
    <span v-if="$fetchState.pending">loading...</span>
    <!-- error durumu varsa  -->
    <span v-else-if="$fetchState.error">error...</span>
  </div>
</template>

<script>
export default {
  async fetch () {
    // this.value = await this.$http.$get('')
    // burada asyncData ile kullandığımız context ide burada kullanabiliriz,
  },
  data () {
    return {
      value: null
    }
  },
  watch: {
    '$route.query': '$fetch'
  },
  activated () {
    //   burada diyoruz ki eğer son fetch den itibaren 30 saniye geçtiyse fetch çalışsın, yani 30 saniyede bir fetch çalışacak,
    if (this.$fetchState.timestamp <= (Date.now() - 30000)) {
      this.$fetch()
    }
  }
}
</script>

<style scoped></style>
