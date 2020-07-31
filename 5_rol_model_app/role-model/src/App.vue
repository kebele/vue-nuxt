<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="4">
          <AddRoleModel @fromAddRoleModel="activeIndex($event)" />
        </b-col>
        <b-col sm="8">
          <ModelCard
            v-for="(item, index) in card"
            :key="index"
            :modelName="item[0]"
            :modelJob="item[1]"
            :modelNationality="item[2]"
            :modelBirthday="item[3]"
            :modelAbout="item[4]"
            :modelPic="item[5]"
            :tags="item[6]"
            @updateEmitIndex="activeIndex($event)"
          />
          <UpdateModelCard v-if="showModel"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import globalComponents from "./components/globalComponents";

export default {
  components: {
    ...globalComponents,
  },
  data() {
    return {
      card: [],
      showModel : false,
    };
  },
  methods: {
    updateCard(e) {
      this.card.push(e);
      console.log(this.card);
    },
    activeIndex(e){
      this.showModel = true;
      console.log(e)
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
