<template>
  <div>
    <span>this is small</span>
    <br />
    <span>{{ message }}</span>
  </div>
</template>
<script>
import { eventBus } from "../main";

export default {
  data() {
    return {
      message: ""
    };
  },
  created() {
    eventBus.$on("fromBig", title => {
      this.message = title;
    });
  }
};
</script>