<template>
  <div>
    <!-- burada bir select yapacağız şehir seçilecek ona göre veriler değişecek 
      bnunun için resource için kullandığımız yapıyı (methods) getirelim, burda yer alan url de lat ve lon kısmını değiştireceğiz, enlem, boylam yani, -->
    <div class="weatherBlock">
      <table style="width:80%">
        <tr>
          <th>date</th>
          <th>timezone</th>
          <th>main</th>
          <th>description</th>
          <th>icon</th>
          <th>temperature (kelvin)</th>
          <th>pressure (hPa)</th>
          <th>humidity (%)</th>
        </tr>
        <tr v-for="(i, index) in this.$store.state.multiCity" :key="index">
          <td>{{ i.body.timezone }}</td>
          <td>{{ i.date }}</td>
          <td>{{ i.body.current.weather[0].main }}</td>
          <td>{{ i.body.current.weather[0].description }}</td>
          <td>
            <img
              :src="
                `http://openweathermap.org/img/wn/${i.body.current.weather[0].icon}@2x.png`
              "
              class="iconClass"
              alt=""
            />
          </td>
          <td>{{ i.body.current.temp }}</td>
          <td>{{ i.body.current.pressure }}</td>
          <td>{{ i.body.current.humidty }}</td>
        </tr>
      </table>
    </div>
    <select v-model="selectValue" name="cities" id="cities">
      <option value="istanbul">istanbul</option>
      <option value="izmir">izmir</option>
      <option value="ankara">ankara</option>
      <option value="antalya">antalya</option>
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
          `http://localhost:8080/data/2.5/onecall?${this.latlong}&%20exclude={part}&appid=ee1077edbdc73b4a202dbac609f83794`
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
