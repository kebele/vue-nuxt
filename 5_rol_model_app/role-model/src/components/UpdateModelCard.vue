<template>
  <div>
    <b-modal @hidden="hideModal()" ref="my-modal" hide-footer title="Using Component Methods">
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
      <b-form-datepicker
        v-model="modelBirthday"
        class="mt-2 mb-2"
        placeholder="birthday"
      ></b-form-datepicker>
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

      
      <b-button
        class="mt-2"
        variant="outline-warning"
        block
        @click="toggleModal"
        >update role model</b-button
      >
    </b-modal>
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
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
      this.$emit('hideUpdateModel')
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      const a = [this.modelName, this.modelJob, this.modelNationality, this.modelBirthday, this.modelAbout, this.modelPic, this.tags]
      this.$refs["my-modal"].toggle("#toggle-btn");
      this.$emit("closeModel",a)
    },
  },
  mounted() {
    this.showModal();
  },
};
</script>
