<template>
  <div>
    <!-- <post content="real madrid"></post> -->
    <!-- <post :content="content"></post> -->
    <post v-for="(item,index) in content" :key="index" :item="item" :value="value"></post>
  </div>
</template>

<script>
import Post from './components/Post'
export default {
  data() {
    return {
      content:[
        {number : 1, content:'one'},
        {number : 2, content:'two'},
        {number : 3, content:'three'},
        {number : 4, content:'four'},
      ],
      value : '<h3>Value</h3>'
    };
  },
  components : {
    Post,
  }
};
</script>

<style></style>
