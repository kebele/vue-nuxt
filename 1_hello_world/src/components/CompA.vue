<template>
  <div>
      this is component A
      <br>
      <slot></slot>
      <slot name="title"></slot>
      <slot name="content"></slot>
      <slot name="content">{{ person.age}}</slot>
      <slot name="content" :person="person">{{ person.name}}</slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
        person : {name : 'vue', age: '33'}
    };
  }
};
</script>
