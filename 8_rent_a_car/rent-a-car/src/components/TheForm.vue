<template>
      <b-form class="formReservation" @submit.stop.prevent>
      <label for="" class="mr-sm-2">pick location</label>
      <b-form-select
        v-model="pickLocationValue"
        :options="pickLocation"
        size="sm"
        class="mt-1"
      ></b-form-select>
      <label for="" class="mr-sm-2">return location</label>
      <b-form-select
        v-model="returnLocationValue"
        :options="returnLocation"
        size="sm"
        class="mt-1"
      ></b-form-select>
      <label class="mt-3" for="example-datepicker">Choose a pick date</label>
      <div class="timeClass">
        <b-form-datepicker
          id="example-datepicker"
          v-model="pickDate"
          class="mr-2"
        ></b-form-datepicker>
        <b-form-timepicker v-model="pickTime" locale="en"></b-form-timepicker>
      </div>
      <label class="mt-2" for="example-datepicker">Choose a return date</label>
      <div class="timeClass">
        <b-form-datepicker
          id="example-datepicker"
          v-model="returnDate"
          class="mr-2"
        ></b-form-datepicker>
        <b-form-timepicker v-model="returnTime" locale="en"></b-form-timepicker>
      </div>
      <b-button class="mt-3" @click="gotoRent" block variant="outline-dark"
        >Search</b-button
      >
    </b-form>
</template>

<script>
export default {
      data() {
    return {
      sliding: null,
      pickLocation: ["istanbul", "ankara", "izmir", "houston"],
      pickLocationValue: "istanbul",
      returnLocation: ["istanbul", "ankara", "izmir", "houston"],
      returnLocationValue: "houston",
      pickDate: "",
      pickTime: "",
      returnDate: "",
      returnTime: "",
      userSelect: [],
    };
  },
  methods: {
      gotoRent() {
      //this$router.push(location-nereye gidecek, başarılı olursa ne olacak, başarızı olursa ne olacak)
      //this.$router.push('/rent') search e bastığımızda rent sayfasına yollar
      //parametreli yapalım, rent isimli sayfaya title olarak deneme parametresi yolluyoruz, bu title i Cars.vue dan yakalayalım, props olarak daha sonra da route ları ayarladığımız index.js ye gidip Rent kısmında props : true diyerek props alabileceğini ayarlayalım, sonra tekrar CArs.vue ya gidip gelen props u template de karşılayalım, {{ title }} şeklinde karşıladık, denemeyi yaptığımızda "deneme" ifadesinin sayraya geldiğini gördük, şimdilik bunları kaldıralım, aslında search ın yapacağı şey inputlara girdiklerimizi hepsini tek bir yerde toplayıp bunu göndermek,
      // this.$router.push({name : 'Rent', params : {title : 'deneme'}})
      //veriyi hazırlayalım
      this.userSelect.push(
        this.pickLocationValue,
        this.returnLocationValue,
        this.pickDate,
        this.pickTime,
        this.returnDate,
        this.returnTime
      );
      //hazırladığımız veriyi bir değişkene atadık
      const userSelect = this.userSelect;
      //aşağıda Rent e userData ismi ile userSelect arrayını yollayalım, CAr.vue de props da karşılayalım
      //değişkendeki veriyi Rebt sayfasına bir parmetre (params ifadesi önemli ve sadece name ile kullanılır) olarak props olarak yolladık
      this.$router.push({ name: "Rent", params: { userData: userSelect } });
      //denemesini yapalım, başarılı
      //router da şöyle bir şey de var
      //   window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      //anlamı eğer geçmişte bir sayfa varsa geri gönder, yoksa ana sayfaya gönder
    },
  },
}
</script>

<style>

</style>