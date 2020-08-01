<template>
<!-- 
  elemanların animasyonu, yani elemanların değeri değiştiğinde değeri animasyonla göstermek, 
  gsap
  https://www.npmjs.com/package/gsap

 -->
  <div id="demo">
    <input v-model.number="number" type="number" step="20"/>
    <p>{{animatedNumber}}</p>
  </div>
</template>

<script>
import gsap from "gsap"
export default {
  data() {
    return {
      number:0,
      tweenedNumber:0
    };
  },  
  computed: {
    //inputtan aldığımız değeri umber a eşitledik
    animatedNumber(){
      return this.tweenedNumber.toFixed(0)
    }
  },
  watch: {
    number:function(newValue){
      gsap.to(this.$data,{duration:3,tweenedNumber:newValue })
      //3 saniyede eskiyi tweenednumber a getirecek, sayı sayma efekti ile
    }
  },
};
</script>




