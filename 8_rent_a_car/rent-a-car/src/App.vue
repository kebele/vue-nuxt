<template>
  <div id="app">
   <Navbar></Navbar>
   <!-- <MainContent></MainContent> -->
   <router-view></router-view>
   <TheFooter/>
  </div>
</template>
<script>
import globalComponents from './components/globalComponents'
export default {
  components : {
    ...globalComponents
  }
}
</script>
<style>


</style>
