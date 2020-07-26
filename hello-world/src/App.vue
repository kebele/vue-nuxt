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
      <br>
      <ProductPage :myCallbackFunction="otherFunction" :message="deger"/>
        <span> {{ deger }}</span>
        <br>
        <h4>child to child eventBus ile veri aktarımı</h4>
      <Big></Big>
      <Small></Small>
      <br>
      <h4>slot kullanımı</h4>
      <Try>bu satır slot olarak basılacak</Try>
      <Try v-html="slotValue" style="color:blue"></Try>
      <br>
      <h4>dinamik component kullanımı</h4>
      <button v-for="tab in tabs" :key="tab" @click="currentTab = tab">{{ tab }}</button>
      <component :is="currentTab"></component>
      <br>
      <h4>props larda veri akışı</h4>
      <!-- <first title-big="this is title"></first>
      <br>
      <first :title-big="titleValue"></first> -->
      <br>
      <h4>v-slot kullanımı</h4>
      <CompA>
        this is slot data
      </CompA>
      <br>
      <CompA>
        <template v-slot:title>
          <h2>this is title</h2>
        </template>
        <template v-slot:content>
          <p>this is content</p>
        </template>
      </CompA>
      <br>
      <CompA></CompA>
      <br>
      <CompA>
        <template #content="{person : value}">
          <h2>this is content</h2>
          <br>
          {{value.name}}
        </template>
      </CompA>
      <br>
      <h4>componentler arası dinamik geçiş</h4>
      <button v-for="tabX in tabsX" :key="tabX" @click="currentTabX = tabX">{{tabX}}</button>
      <keep-alive>
        <component :is="currentTabX"></component>
      </keep-alive>
  </div>
</template>

<script>
import Post from './components/Post'
import ProductPage from './components/ProductPage'
import Big from './components/Big'
import Small from './components/Small'
import Try from './components/Try'
//aşağıdakileri globalComponents kullanımı ile yaptık
// import One from './components/One'
// import Two from './components/Two'
// import Three from './components/Three'
import globalComponents from './components/globalComponents'
import CompA from './components/CompA'
import CompX from './components/CompX'
import CompY from './components/CompY'

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
      cardValue : [1,2,'a',4],
      deger : '',
      slotValue : '<h3>bu bir html slot kullanımıdır.</h3>',
      currentTab : 'first',
      tabs : ['first', 'second','third'],
      titleValue : 'bu da data içinde tanımladığımız dinamik bir veri',
      currentTabX : 'CompA',
      tabsX : ['CompX', 'CompY']
    };
  },
  components : {
    Post,
    ProductPage,
    Big,
    Small,
    Try,
    //aşağıyı global components şeklinde yaptık
    // "first" : One,
    // "second" : Two,
    // "third" : Three,
    ...globalComponents,
    CompA,
    CompX,
    CompY,

  },
  methods: {
    updateMainComponent(e){
      this.cardValue.push(e)
    },
    otherFunction(message){
      this.deger = message
    }
  },
};
</script>

<style></style>
