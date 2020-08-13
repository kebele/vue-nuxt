<template>
  <div>
    <!-- burada bir select yapacağız şehir seçilecek ona göre veriler değişecek 
      bnunun için resource için kullandığımız yapıyı (methods) getirelim, burda yer alan url de lat ve lon kısmını değiştireceğiz, enlem, boylam yani, -->
    <div class="weatherBlock">
      <table style="width:80%">
        <tr>
          <th>date</th>
          <th>main</th>
          <th>description</th>
          <th>icon</th>
        </tr>
        <tr v-for="(i, index) in this.$store.state.weatherValues" :key="index">
          <td>{{ i.date }}</td>
          <td>{{ i.body.weather[0].main }}</td>
          <td>{{ i.body.weather[0].description }}</td>
          <td>
            <img
              :src="
                `http://openweathermap.org/img/wn/${i.body.weather[0].icon}@2x.png`
              "
              class="iconClass"
              alt=""
            />
          </td>
        </tr>
      </table>
    </div>
    <select name="cities" id="cities">
      <options v-model="selectValue" value="istanbul">istanbul</options>
      <options v-model="selectValue" value="izmir">izmir</options>
      <options v-model="selectValue" value="ankara">ankara</options>
      <options v-model="selectValue" value="antalya">antalya</options>
    </select>
    <button @click="setCityData">get city data</button>
  </div>
</template>

<script>
export default {
  name: "MultiData",
  data(){
    return {
      selectValue: "istanbul",
    };
  },
  methods: {
    setCityData() {
      // burası ile ilgili açıklama CurrentData.vue da var
      this.$http
        .get(
          `"http://localhost:8080/data/2.5/onecall?${this.latlong}&%20exclude={part}&appid=ee1077edbdc73b4a202dbac609f83794"`
        )
        .then(
          (response) => {
            const dataValue = new Date();
            const value = {
              date: dataValue,
              body: response.body,
            };
            this.$store.commit("setMultiCity", value);
          },
          (response) => {
            // error callback
            console.log(response);
          }
        );
    },
  },
  computed: {
    latlong() {
      if (this.selectValue === "istanbul") {
        return "lat=41.015137&lon=28.979530";
      } else if (this.selectValue === "izmir") {
        return "lat=38.423733&lon=27.142826";
      } else if (this.selectValue === "antalya") {
        return "lat=36.884804&lon=30.704044";
      } else {
        return "lat=39.925533&lon=32.866287";
      }
    },
  },
};
</script>

<style scoped>
.weatherBlock {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
  /* aradaki mesafe azalsın */
}
th,
td {
  padding: 10px;
}
</style>
