<template>
  <div>
    comp B
    <br />
    <router-link to="/compb/alert">go to comp B alert</router-link>
    <br />
    <router-link to="/compb/detail">go to comp B detail</router-link>
    <br />
    <hr />
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  watch: {
    $route(to, from) {
      console.log(to);
      console.log("************");
      console.log(from);
    },
  },
  methods: {
    beforeRouteUpdate(to, from, next) {
      // next(false); bu durumda route gerçekleşmez
      //next(error); hata sayfası tanımlayabiliriz
      // next({path: '/user'});
      next();
    },
    beforeEnter: (to, from, next) => {
        // ... buunla da route a gitmeden kontrol yapabiliriz
        next()
    },
    beforeRouteLeave (to, from, next) {
        // ...bun da da ayrılmadan kontrol yapılabilir
        next()
    }
  },
};
</script>
