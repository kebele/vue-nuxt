<template>
  <!-- burada bir tane araba ve araba resmi var burayı düzenlememiz gerekiyor, bu eğitimin ikinci kısmında yaptığımız bir işlem burayı dinamik hale getirmemiz lazım, arabaya özel konular yaniğ, ücret, resim, kiralama, araba özelliklerivs. bunların bir yerlerden gelmesi lazım, bunu yapacağız, 
resmi ayarlayalım, resmi dinamik olarak alalım,
 -->
  <div>
    <b-card
      no-body
      class="overflow-hidden"
      style="max-width: 540px;"
      @click="modalShow = !modalShow"
    >
      <b-row no-gutters>
        <b-col md="6">
          <!-- <b-card-img
            src="https://i4.hurimg.com/i/hurriyet/75/750x422/5a53c0937152d80a8cf72f21.jpg"
            alt="Image"
            class="rounded-0"
          ></b-card-img> 
          resimleri dinamik alalım src yi item array indeki 3. indisten alacağız, bunu assets içindeki bir json dana alalım
          data.json u taslak olarak hazırladık,
          şimdi yapmamız gereken şey bizim bu CarCard.vue yu çağırdığımız elemana gidip orada item olarak gönderidğimiz veriyi artık data.json olarak yollamamız lazım, O eleman da view altındaki Cars.vue oraya gidelim -->
          <!-- <b-card-img
            :src="item[3]"
            alt="Image"
            class="rounded-0"
          ></b-card-img> 
          burada veriyi sanki array den alıyormuş gibi yapık oysa bunu artık öbject ten alıyoruz buna göre düzenleyeceğiz aşağısıda aynı şekilde olacak
          -->
          <b-card-img
            :src="item.image[0]"
            alt="Image"
            class="rounded-0"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body :title="item.title">
            <b-card-text>
              {{ item.about }}
            </b-card-text>
            <div class="priceBucket">
              <b-card-text class="priceText"> ${{ item.price }} </b-card-text>
              <b-icon class="h4 mb-2" icon="bucket" variant="danger"></b-icon>
            </div>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
    <!-- bootstrap vue dan modal aldık, modal içine normal card daki bilgileri aynen koyduk, denemeler sıkıntısız,  -->
    <b-modal v-model="modalShow">
      <b-card no-body class="overflow-hidden" style="max-width: 540px;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img
              :src="item.image[0]"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body :title="item.title">
              <b-card-text>
                {{ item.about }}
              </b-card-text>
              <div class="priceBucket">
                <b-card-text class="priceText"> ${{ item.price }} </b-card-text>
                <!-- <b-icon
                  class="h4 mb-2"
                  icon="bucket"
                  variant="danger"
                  @click="modalShow = !modalShow"
                ></b-icon> 
                bunun yerine bir buton yapacağız ve bunu vuex e bağlayacağız vuex e bilgi yollayacağız-->
                <button @click="getInformation">get information</button>
              </div>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    // item: Array,
    item: Object,
  },
  data() {
    return {
      modalShow: false,
    };
  },
  methods: {
    getInformation(){
      this.$store.commit('setInformation', this.item)
      console.log(this.item)
    }
  },
};
</script>
<style>
.priceText {
  font-weight: bold;
  font-size: 18px;
}
.priceBucket {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
</style>
