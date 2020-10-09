<template>
  <div class="container">
    VARSAYILAN SAYFA
    <br>
    <button @click="showParams">show params</button>
  </div>
</template>
<script>
export default {
  methods: {
    showParams(){
      console.log(this.$route.params.id)
      // route içindeki parametreye ulaşmak için
    }
  },
  // validate bir vue/nuxt özelliği
  validate({params}){
    return /^\d+$/.test(params.id)
  }
}
</script>