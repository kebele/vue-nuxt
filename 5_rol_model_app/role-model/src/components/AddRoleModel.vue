<template>
  <div class="addRoleModel mt-3">
    <b-img :src="imageSource" v-bind="mainProps" rounded alt="Rounded image"></b-img>
    <b-form>
      <b-form-input
        class="mt-2"
        v-model="modelName"
        placeholder="role model name"
      ></b-form-input>
      <b-form-input
        class="mt-2"
        v-model="modelJob"
        placeholder="job"
      ></b-form-input>
      <b-form-input
        class="mt-2"
        v-model="modelNationality"
        placeholder="nationality"
      ></b-form-input>
      <b-form-input
        class="mt-2"
        v-model="modelPic"
        placeholder="image link"
      ></b-form-input>
      <!-- <label class="mt-2">doğum tarihi</label> -->
      <b-form-datepicker v-model="modelBirthday" class="mt-2 mb-2" placeholder="birthday"></b-form-datepicker>
      <b-form-textarea
        v-model="modelAbout"
        placeholder="notes..."
        rows="3"
        max-rows="6"
      ></b-form-textarea>
      <b-form-tags
        input-id="tags-basic"
        v-model="tags"
        class="mb-2 mt-2"
      ></b-form-tags>
      <!-- {{ array }} -->
      <b-button @click="sendRoleModel()" block variant="primary">Primary</b-button>
    </b-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
        imageSource : 'https://us.123rf.com/450wm/kakigori/kakigori1808/kakigori180800024/107433935-stock-vector-cute-funny-man-dad-and-kid-son-wearing-black-mustache-mask.jpg?ver=6',
      modelName: "",
      modelJob: "",
      modelNationality : "",
      modelBirthday : "",
      modelAbout : "",
      modelPic : "",
      tags: [],
       mainProps: { width: 150, height: 150, class: 'm1' }
    };
  },
  methods: {
      sendRoleModel(){
        // verileri alabiliyormuyus için...
        //   console.log(this.modelName)
        //   console.log(this.modelJob)
        //   console.log(this.modelNationality)
        //   console.log(this.modelBirthday)
        //   console.log(this.modelAbout)
        //   console.log(this.imageSource)
        //   console.log(this.tags)
        const a = [this.modelName, this.modelJob, this.modelNationality, this.modelBirthday, this.modelAbout, this.modelPic, this.tags]
        //a yı aşağıdaki şekilde emitleyelim, yani yayalım, bunu App.vue da <AddRoleModel /> de yakalayacağız
        // <AddRoleModel @sendRoleModel="updateCard($event)"/>
        this.$emit("fromAddRoleModel", a)
      }
  },
};
</script>
<style>
    .addRoleModel {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
