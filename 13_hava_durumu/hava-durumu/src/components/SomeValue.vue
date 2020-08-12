<template>
  <div class="weatherBlock">
          <!--deneme için hazırlamıştık, bu yüzden yoruma aldım
               <span>{{ item.body.weather[0].main }}</span>
          <span>{{ item.body.weather[0].description }}</span>
          <img :src="`http://openweathermap.org/img/wn/${item.body.weather[0].icon}@2x.png`" class="iconClass" alt=""> -->
          <table style="width:80%">
              <tr>
                  <th>date</th>
                  <th>temperature (kelvin)</th>
                  <th>pressure (hPa)</th>
                  <th>humidity (%)</th>
                  <th>temperature min (kelvin)</th>
                  <th>temperature max (kelvin)</th>
                  <th>wind speed (m/s)</th>
                  <th>wind  degrees</th>
              </tr>
              <!-- <tr v-for="(i,index) in item" :key="index"> artık item değil statei döneceğimiz için yoruma aldım -->
              <tr v-for="(i,index) in this.$store.state.weatherValues" :key="index">
                  <td>{{ i.date }}</td>
                  <td>{{ i.body.main.temp }}</td>
                  <td>{{ i.body.main.pressure }}</td>
                  <td>{{ i.body.main.humidity }}</td>
                  <td>{{ i.body.main.temp_min }}</td>
                  <td>{{ i.body.main.temp_max }}</td>
                  <td>{{ i.body.wind.speed }}</td>
                  <td>{{ i.body.wind.deg }}</td>
                  
              </tr>
          </table>
      </div>
</template>

<script>
export default {

}
</script>

<style>
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