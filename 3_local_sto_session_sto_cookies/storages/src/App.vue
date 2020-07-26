<template>
  <div id="app">
    <label for="">
      <input type="text" v-model="value">
    </label>
    <br>
    <button @click="saveValue">save</button>
    <hr>
    <span>{{ newValue }}</span>
    <br>
    <button @click="removeLocalData">sil</button>
  </div>
</template>

<script>


export default {
  data(){
    return {
      value : '',
      newValue : '',
      foo : { name : 'vue', age : 34},
    }
  },
  methods: {
    saveValue(){
      //stringfy kullanacağımız için aşağıyı yorum yaptım
      // localStorage.setItem('input-value', this.value);
      // this.value = ''
      localStorage.setItem('input-value', JSON.stringify(this.foo));

    },
    removeLocalData(){
      localStorage.removeItem('input-value');
      // localStorage.clear() //her şeyi siler
    }
  },
  mounted() {
    if(localStorage.getItem('input-value')){
      // this.newValue = localStorage.getItem('input-value')
      //stringify ile kaydettiğimiz object i getirmek içn
      this.newValue = JSON.parse(localStorage.getItem('input-value'))
    }
  },
}
</script>

<style>

</style>
