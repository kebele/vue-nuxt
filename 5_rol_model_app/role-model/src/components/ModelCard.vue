<template>
  <div>
    <b-card
      :title="modelName"
      :img-src="modelPic"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>
        {{ modelJob }} - {{ modelNationality }} - {{ modelBirthday }}
      </b-card-text>
      <b-card-text>
        {{ modelAbout }}
      </b-card-text>
      <div class="tagsClass">
        <b-card-text v-for="(i, index) in tags" class="tagsText" :key="index">
          #{{ i }}
        </b-card-text>
      </div>
      <div class="bottomButtons">
            <b-button @click="updateEmitIndex()" variant="outline-success">update</b-button>
            <b-button variant="outline-danger">delete</b-button>
      </div>
      
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
      modelName : String,
      modelJob : String,
      modelNationality : String,
      modelBirthday : String,
      modelAbout : String,
      modelPic : String,
      tags : Array,
      index : Number
  },
  data() {
    return {
      
    };
  },
  methods: {
      updateEmitIndex(){
          this.$emit('updateEmitIndex', this.index)
          
      }
  },
};
</script>
<style>
    .tagsClass {
        display: flex;
        /* flex-direction: row; yanyana diz */
        flex-wrap: wrap; /*yanyaalarda taşanı aşağı at*/
        margin-bottom: 15px;
        justify-content: center;
    }

    .tagsText {
        background-color: orange;
        margin: 4px;
        font-size: 18px;
        font-family: Calibri, Cochin, Georgia, Times, 'Times New Roman', serif;
        padding: 2px 10px 2px 10px;
        box-shadow: 0 0 3px rgb(57, 57, 70);
        border-radius: 10px;
    }

    .card-text:last-child {
    margin-bottom: 4px;
}

.bottomButtons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>