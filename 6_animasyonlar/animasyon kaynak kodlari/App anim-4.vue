<template>
  <div id="app">
    <button @click="shuffle">shuffle</button>
    <button @click="add">add</button>
    <button @click="remove">remove</button>
    <transition-group name="list" tag="p">
      <span v-for="(item, index) in items" :key="index" class="list-item" >{{
        item
      }}</span>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
    };
  },
  methods: {
    randomIndex() {
      return Math.floor(Math.random() * this.items.length);
    },
    add() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove() {
      this.items.splice(this.randomIndex(), 1);
    },
    shuffle() {
      //random sıralama yapacak
      this.items.sort(() => Math.random() - 0.5);
      console.log(this.items);
    },
  },
};
</script>

<style>
.list-item {
  display: inline-block;
  /* animasyon yapabilmesi için inline-block olmalı */
  margin-right: 25px;
}
.list-enter-active,
.list-leave-active {
  transition: all 2s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-move{
  transition: transform 1s;
}
</style>
