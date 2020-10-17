<template>
  <div class="mainContainer">
    <TheSlider/>
    <!-- ürün vitrini koyacağız -->
    <div class="productsList">
      <div v-for="i in 12" :key="i" class="productArea">
      product
    </div>
    </div>
  </div>
</template>

<script>
import TheSlider from '../components/TheSlider'
export default {
  components : {
    TheSlider,
  }
}
</script>

<style>
  .mainContainer{
    display : flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
  .productsList{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap; 
    /* fazla eleman yana geldiğinde fazlayı alta at demek */
    justify-content: space-between;
    /* başta ve sonda boşluk bırakma */
    width: 80%;
    background-color: turquoise;
    padding-right: 20px;
    padding-left: 20px;
  }
  .productArea{
    background-color: tomato;
    height: 300px;
    width: 300px;
    margin-bottom: 20px;
  }
</style>
