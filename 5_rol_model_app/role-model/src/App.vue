<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="4">
          <AddRoleModel></AddRoleModel>
        </b-col>
        <b-col sm="8">

        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AddRoleModel from './components/AddRoleModel'

export default {
  components: {
    AddRoleModel,
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
