<template>
<!-- 
  animasyonu js içinden vermek
 -->
  <div id="app">
    <input v-model="query" />
    <transition-group
      name="list"
      tag="ul" 
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
    <!-- 
      tag:"ul" bu grup ul gibi hareket etsin demek
      :css:"false" bu element içinde animasyon ile ilgili hiç bir css kodunu dahil etmeyecek demek 
      -->
      <li v-for="item in computedList" :key="item.msg">
        {{ item.msg }}
      </li>
    </transition-group>
  </div>
</template>

<script>
import Velocity from "velocity-animate";
export default {
  data() {
    return {
      query: "",
      list: [
        { msg: "apple" },
        { msg: "pear" },
        { msg: "orange" },
        { msg: "banana" },
        { msg: "watermelon" },
      ],
    };
  },
  computed: {
    computedList() {
      /* 
      query yani input alanı boş ise bütün listeyi yazacak, oraya bir şey yazıldığında eğer listede o karakter varsa onları getirecek diğerlerini silecek, mesela a yazdık hepsinde var, ax yaptık hiç birinde yok hepsini silecek, ap yaptık sadece apple kaldı diğerleri gitti
      */
      return this.list.filter((item) => {
        return item.msg.toLowerCase().indexOf(this.query.toLowerCase()) !== -1;
      });
    },
  },
  methods: {
    // enter oncesi ...
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    //giriş zamanında
    enter(el, done) {
      const delay = 400;
      setTimeout(() => {
        //velocity ile ilgili özellikler npm sayfasında
        Velocity(el, { opacity: 1, height: "1.6em" }, { complate: done });
      }, delay);
    },
    leave(el, done) {
      const delay = 400;
      setTimeout(() => {
        Velocity(el, { opacity: 0, height: 0 }, { complate: done });
      }, delay);
    },
  },
};
</script>

<style></style>
