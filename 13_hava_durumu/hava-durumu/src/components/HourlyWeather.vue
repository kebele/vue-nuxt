<template>
  <div>
      <div  v-if="this.$store.state.hourlyWeather.length !== 0" class="weatherBlock">          
          <table style="width:80%">
              <tr>
                  <th>timezone</th>                  
                  <th>date</th>
                  <th>current</th>
                  <th>hourly</th>
              </tr>
              <tr v-for="(i,index) in this.$store.state.hourlyWeather" :key="index">
                  <td>{{ i.body.timezone }}</td>
                  <td>{{ i.date }}</td>
                  <td>{{ i.body.current.temp }}</td>
                  <td>{{ new Date(i.body.hourly[0].dt * 1000) }}</td>
              </tr>
          </table>
      </div>
      <button @click="hourlyValue()">get hourly weather</button>
  </div>
</template>

<script>
export default {
    name : 'HourlyWeather',

methods: {
    hourlyValue() {
      // burası ile ilgili açıklama CurrentData.vue da var
      this.$http
        .get(
          "http://localhost:8080/data/2.5/onecall?lat=41.015137&lon=28.979530&%20exclude={part}&appid=ee1077edbdc73b4a202dbac609f83794"
        )
        .then(
          (response) => {
            const dataValue = new Date(); 
            const value = {
              date : dataValue,
              body : response.body
            }
            this.$store.commit('setHourlyWeather', value)
          },
          (response) => {
            // error callback
            console.log(response);
          }
        );
    },
},
}
</script>

<style scoped>
        .weatherBlock{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
    }  
    table, th, td{
        border : 1px solid black;
        border-collapse: collapse; 
        /* aradaki mesafe azalsın */
    }
    th, td {
        padding: 10px;
    }
</style> 