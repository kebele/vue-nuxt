<template>
  <div class="mainContainer">
    <!-- <TheSlider/> -->
    <!-- slider burada olmayacak, döngüyü kaldıracağız, importları düzenleyeceğiz -->

    <div class="centerArea">
      <CategoriesAccordionMenu class="accordionMenu" />
      <!-- <div class="productsList">
        <div v-for="i in 12" :key="i" class="productArea">product</div>
      </div> -->
      <div class="productContent">
        <div class="topArea">
          <div class="imgArea">
            <!-- ürün resimlerini dinamik alalım, dataya imgSrc adresleri tanımlayalım, resimleri seçmek için index,... -->
            <img :src="imgSrc[imgIndex]" alt="" class="fullSizeImage" />
            <div class="smallSizeImagesArea">
              <!-- büyük resmin altına küçük resimleri için gerekli düzenlemeyi yapalım, bunlarda data dan dinamik şekilde alacağız -->
              <img
                :src="link"
                alt=""
                class="smallSizeImages"
                v-for="(link, index) in imgSrc"
                :key="index"
                @click="changeFullImage(index)"
              />
            </div>
          </div>
          <div class="infoArea">
            <h4>
              Product title Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </h4>
            <span>ID: 123456789</span>
            <h5>$ 99.99</h5>
            <!-- bootstrap vue dan spin button ekleyelim  -->
            <b-form-spinbutton
              id="demo-sb"
              v-model="value"
              min="1"
              max="100"
            ></b-form-spinbutton>
            <span>Stock : 80</span>
            <div>
              <b-button variant="danger">Buy now</b-button>
              <b-button variant="warning">Add to cart</b-button>
            </div>
          </div>          
        </div>
        <!-- bootstrap vue dan tab alalım -->
        <div class="productDescription">
            <b-tabs content-class="mt-3">
                <b-tab title="Description" active><p>I'm the first tab</p></b-tab>
                <b-tab title="Features"><p>I'm the second tab</p></b-tab>
            </b-tabs>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
// import TheSlider from '../components/TheSlider'
import CategoriesAccordionMenu from "../../components/CategoriesAccordionMenu";
export default {
  components: {
    // TheSlider,
    CategoriesAccordionMenu
  },
  data() {
    return {
      imgSrc: [
        "https://cdn.pixabay.com/photo/2012/02/15/14/46/nature-13298_960_720.jpg",
        "https://cdn.pixabay.com/photo/2018/02/04/19/25/wood-3130656_960_720.jpg",
        "https://cdn.pixabay.com/photo/2016/06/21/15/55/nuclear-waste-1471361_960_720.jpg",
        "https://cdn.pixabay.com/photo/2015/01/29/14/10/model-616189_960_720.jpg",
        "https://cdn.pixabay.com/photo/2017/04/29/18/22/skateboard-2271295_960_720.jpg"
      ],
      imgIndex: 0
    };
  },
   methods: {
      changeFullImage(index){
          this.imgIndex = index
      }
  },
};
</script>

<style>
.mainContainer {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
.centerArea {
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 100%;
}
.accordionMenu {
  width: 20%;
  padding: 10px;
  margin-left: 20px;
  background-color: gray;
}
.productContent {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: teal;
}
.topArea {
  display: flex;
  flex-direction: row;
}
.imgArea {
  display: flex;
  flex-direction: column;
  width: 60%;
}
.fullSizeImage {
  width: 500px;
  height: 500px;
  padding: 20px;
}
.smallSizeImagesArea {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
}
.smallSizeImages {
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
}
.infoArea {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 20px 0 0;
}
</style>
