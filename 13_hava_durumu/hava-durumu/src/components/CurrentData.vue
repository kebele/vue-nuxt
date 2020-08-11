<template>
  <div>
    <button @click="currentValue()">get weather</button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      //weatherValues e veriler object olarak gelecek 
      //response.body den gelenlere bakacağız, yani apideki istediğimiz verileri bu []'e push'layacağız
      weatherValues : [],
    }
  },
  methods: {
    currentValue() {
      // GET /someUrl
      //   this.$http.get('http://localhost:8085/data/2.5/weather?q=London,uk&appid=ee1077edbdc73b4a202dbac609f83794').then(response => {
      this.$http
        .get(
          "http://localhost:8080/data/2.5/weather?q=London,uk&appid=ee1077edbdc73b4a202dbac609f83794"
        )
        .then(
          (response) => {
            // console.log(response.body);
            //tarihi alalım
            const dataValue = new Date(); // tarihi alıyoruz
            //dataValue adında bir object yaptık içine hem tarihi hemde response.body den gelen bilgileri ekledim
            const value = {
              date : dataValue,
              body : response.body
            }
            this.weatherValues.push()
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
