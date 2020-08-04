<template>
  <div id="app">
   <Navbar></Navbar>
   <MainContent></MainContent>
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
#app {

}

</style>
