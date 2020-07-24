<template>
  <div>
    <!-- <post content="real madrid"></post> -->
    <!-- <post :content="content"></post> -->
    <post v-for="(item,index) in content" :key="index" :item="item" :value="value"></post>

    <ProductPage @sendToData="sendTo = $event"></ProductPage>
    <span>{{ sendTo }}</span>
    <br>

    {{cardValue.length}}
    <br>
    {{cardValue}}

      <ProductPage product="a" @updateValue="updateMainComponent($event)"></ProductPage>

  </div>
</template>

<script>
import Post from './components/Post'
import ProductPage from './components/ProductPage'

export default {
  data() {
    return {
      content:[
        {number : 1, content:'one'},
        {number : 2, content:'two'},
        {number : 3, content:'three'},
        {number : 4, content:'four'},
      ],
      value : '<h3>Value</h3>',
      sendTo : '',
      cardValue : [1,2,'a',4]
    };
  },
  components : {
    Post,
    ProductPage,
  },
  methods: {
    updateMainComponent(e){
      this.cardValue.push(e)
    }
  },
};
</script>

<style></style>
