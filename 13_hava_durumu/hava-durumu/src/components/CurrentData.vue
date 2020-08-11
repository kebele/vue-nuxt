<template>
  <div>
    <div v-if="loading">
      <RowValue :item="weatherValues[0]"/>
    </div>
    <button @click="currentValue()">get weather</button>
    <br>
    <!-- {{ weatherValues }} -->
  </div>
</template>
<script>
import RowValue from './RowValue'

export default {
  components : {
    RowValue,
  },
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
            //dataValue adında bir object yaptık içine hem tarihi hemde response.body den gelen bilgileri ekledim ve bunu value adında bir nesne oluşturduk ve bunu da weatherValues[]'e pushladık, şimdi artık butona tıkladığımızda sorunsuz ekrana date ve body i basıyor
            const value = {
              date : dataValue,
              body : response.body
            }
            this.weatherValues.push(value)
          },
          (response) => {
            // error callback
            console.log(response);
            // console.log("hata")
          }
        );
    },
  },
  computed: {
    loading(){
      if(this.weatherValues !== []){
        return true
      } else {
        return false
      }
    }
  },
};
</script>
