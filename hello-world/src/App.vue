<template>
  <div>
    <post content="real madrid"></post>
    <post :content="content"></post>
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
      ]
    };
  },
  components : {
    Post,
  }
};
</script>

<style></style>
