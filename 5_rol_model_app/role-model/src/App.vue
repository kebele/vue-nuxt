<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="4" class="mb-5">
          <AddRoleModel @fromAddRoleModel="updateCard($event)" />
        </b-col>
        <b-col sm="8" class="cardContainer">
          <ModelCard
            v-for="(item, index) in card"
            :key="index"
            :index="index"
            :modelName="item[0]"
            :modelJob="item[1]"
            :modelNationality="item[2]"
            :modelBirthday="item[3]"
            :modelAbout="item[4]"
            :modelPic="item[5]"
            :tags="item[6]"
            @updateEmitIndex="activeIndex($event)"
            @deleteModelOpen="deleteModelOpen($event)"
          />
          <UpdateModelCard
            :modelName="card[activeNumber][0]"
            :modelJob="card[activeNumber][1]"
            :modelNationality="card[activeNumber][2]"
            :modelBirthday="card[activeNumber][3]"
            :modelAbout="card[activeNumber][4]"
            :modelPic="card[activeNumber][5]"
            :tags="card[activeNumber][6]"
            v-if="showModel"
            @closeModel="updateOkey($event)"
            @hideUpdateModel="hideUpdateModel()"
          />
          <DeleteModelCard
            v-if="showModelDelete"
            :index="activeNumber"
            :modelName="card[activeNumber][0]"
            @deleteModel="deleteModel()"
            @deleteModelHide="deleteModelHide()"
          />
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
      showModel: false,
      showModelDelete: false,
      activeNumber: -1,
    };
  },
  methods: {
    updateCard(e) {
      this.card.push(e);
      console.log(this.card);
    },
    activeIndex(e) {
      this.showModel = true;
      this.activeNumber = e;
      console.log(e);
    },
    updateOkey(e) {
      this.card.splice(this.activeNumber, 1, e);
      this.showModel = false;
      this.activeNumber = -1;
    },
    deleteModelOpen(e) {
      this.showModelDelete = true;
      this.activeNumber = e;
    },
    deleteModel() {
      this.card.splice(this.activeNumber, 1);
      //sildiğimizin yerine bir şey eklemeyeceğimiz için yazmadık, sadece silme yapacak
      this.showModelDelete = false;
      this.activeNumber = -1;
      console.log(this.card);
    },
    deleteModelHide(){
      this.showModelDelete = false;
    },
    hideUpdateModel(){
      this.showModel = false
    }

  },
};
</script>

<style>
.cardContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
}
</style>
