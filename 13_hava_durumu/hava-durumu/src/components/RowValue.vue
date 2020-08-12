<template>
  <div>
      <div class="weatherBlock">
          <!--deneme için hazırlamıştık, bu yüzden yoruma aldım
               <span>{{ item.body.weather[0].main }}</span>
          <span>{{ item.body.weather[0].description }}</span>
          <img :src="`http://openweathermap.org/img/wn/${item.body.weather[0].icon}@2x.png`" class="iconClass" alt=""> -->
          <table style="width:80%">
              <tr>
                  <th>date</th>
                  <th>main</th>
                  <th>description</th>
                  <th>icon</th>
              </tr>
              <!-- <tr v-for="(i,index) in item" :key="index"> artık item değil statei döneceğimiz için yoruma aldım -->
              <tr v-for="(i,index) in this.$store.state.weatherValues" :key="index">
                  <td>{{ i.date }}</td>
                  <td>{{ i.body.weather[0].main }}</td>
                  <td>{{ i.body.weather[0].description }}</td>
                  <td><img :src="`http://openweathermap.org/img/wn/${i.body.weather[0].icon}@2x.png`" class="iconClass" alt=""></td>
              </tr>
          </table>
      </div>
  </div>
</template>

<script>
export default {
    name : "RowValue",
    //vuex ile çözeceğimiz için buna ihtıyacımız kalmadı, normalde bunu CurrentData.vue dan alıyorduk ve template de item olarak aldığımızı dönüyorduk, artık direk state i döneceğiz
    // props : {
    //     // item : Object, bunu deneme için yapmıştık, normalde gelecek data array olacak
    //     item : Array,
    // },
}
</script>

<style scoped>
    .weatherBlock{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
    }
    .iconClass{
        width: 50px;
        height: 50px;
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

{
coord: {
lon: -0.13,
lat: 51.51
},
weather: [
{
id: 300,
main: "Drizzle",
description: "light intensity drizzle",
icon: "09d"
}
],
base: "stations",
main: {
temp: 280.32,
pressure: 1012,
humidity: 81,
temp_min: 279.15,
temp_max: 281.15
},
visibility: 10000,
wind: {
speed: 4.1,
deg: 80
},
clouds: {
all: 90
},
dt: 1485789600,
sys: {
type: 1,
id: 5091,
message: 0.0103,
country: "GB",
sunrise: 1485762037,
sunset: 1485794875
},
id: 2643743,
name: "London",
cod: 200
}