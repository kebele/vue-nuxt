<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id" @click="selectedPost = post">
            {{post.title}}
        </li>
    </ul>
    <div v-if="selectedPost">
      <h3>{{ selectedPost.title }}</h3>
      <div v-html="selectedPost.content"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      posts: [
        {
          id: "1",
          title: "xxxxx",
          content: "<span>xxxx</span>"
        },
        {
          id: "2",
          title: "yyyyy",
          content: "<span>yyyyyy</span>"
        },
        {
          id: "3",
          title: "zzzzzzz",
          content: "<span>zzzzz</span>"
        }
      ],
      selectedPost: null
    };
  }
};
</script>