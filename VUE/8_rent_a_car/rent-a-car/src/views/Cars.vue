<template>
  <div class="cardContainer">
    <!-- {{ title }} -->
    <!-- {{ userData }} -->
    <!-- <car-card :item="item" class="carCardClass" v-for="i in 12" :key="i"></car-card> 
    artık veriyi data.json dan alacağız ve döngü şeklinde CarCard.vue ya yolayacağımız için aşağıdaki şekilde olacak, bunlardan 3 tane yapalım sayfada çok görünsün -->
    <car-card
      :item="jsonData.data[index]"
      class="carCardClass"
      v-for="(i, index) in jsonData.data.length"
      :key="i"
    ></car-card>
    <!-- <car-card
      :item="jsonData.data[index]"
      class="carCardClass"
      v-for="(i, index) in jsonData.data.length"
      :key="i"
    ></car-card>
    <car-card
      :item="jsonData.data[index]"
      class="carCardClass"
      v-for="(i, index) in jsonData.data.length"
      :key="i"
    ></car-card> -->

  </div>
</template>

<script>
/* 
oluştruduğumuz assests > data.json u import edip car-card ı çeğırırken artık aşağıdaki item[] ile değil data.json ile çağıracağız
*/
import CarCard from "../components/CarCard";
import jsonData from "../assets/data.json";

export default {
  components: {
    CarCard,
  },
  props: {
    // title : String
    userData: Array,
  },
  data() {
    return {
      item: [
        "renault clio 1.2",
        "about car about car about car about car about car about car about car...",
        130,
      ],
      jsonData: jsonData,
    };
  },
  // beforeRouteEnter (to, from, next) {
  // ...
  //route giriş yapmadan önce, burada this ile erişim yok, çünkü daha comp a girilmedi
  // },
  // beforeRouteUpdate
  // beforeRouteLeave (to, from, next) {
  //     // ...
  //     let answer = window.confirm('are you sure?')
  //     if(answer){
  //         next();
  //     } else {
  //         next(false)
  //     }
  // }
};
</script>
<style>
.cardContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.carCardClass {
  margin: 10px;
}
</style>
