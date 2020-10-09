<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        hello2
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
        <client-only>
          <span>buradaki veriler sadece server side da kullanılmasın demek, serverda problem çıkarabilecek şeyler olursa</span>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // layout : 'customLayout' veya 
  layout(context){
    return 'customLayout'
  },
  // asyncData nuxt ın sağladığı en güzel, her route dan önce çağrılır, her sayfada çalışabilir,fetch(){xxx} buda benzer şekilde çalışır aşğıya alaım, ve head(){xxxxx} alalım,
  //bunlar her sayfa için ayrı ayrı yazılabilir, 
  // asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    
  // },
  asyncData(context) {
    
  },
  fetch(){

  },
  head(){
    return {
      title : "anasayfa",
      meta:[ //vmid burada kullanılmamalıdır, ayrıca key ler unique olmalı,
      //ayrıca bunlaru her sayfa için ayrı ayrı tanımlayabiliriz
        {hid:'anasayfa', name:'description', content:'about nuxt js'}
      ]
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
