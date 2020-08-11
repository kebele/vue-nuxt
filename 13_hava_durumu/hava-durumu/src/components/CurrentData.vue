<template>
  <div>
    <button @click="currentValue()">get weather</button>
  </div>
</template>
<script>
export default {
  methods: {
    currentValue() {
      // GET /someUrl
      //   this.$http.get('http://localhost:8085/data/2.5/weather?q=London,uk&appid=ee1077edbdc73b4a202dbac609f83794').then(response => {
      this.$http
        .get(
          "http://localhost:8085/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02"
        )
        .then(
          (response) => {
            console.log(response.body);
          },
          (response) => {
            // error callback
            console.log(response);
            // console.log("hata")
          }
        );
    },
  },
};
</script>
