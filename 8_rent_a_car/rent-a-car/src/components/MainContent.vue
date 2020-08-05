<template>
  <div>
    <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template v-slot:img>
          <!-- <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="../assets/araba1.jpg"
            alt="image slot"
          /> -->
          <img
            class="imgSlideCarousel"
            src="../assets/araba1.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="imgSlideCarousel"
            src="../assets/araba2.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="imgSlideCarousel"
            src="../assets/araba3.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="imgSlideCarousel imgMirror"
            src="../assets/araba4.jpg"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>
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
      <label for="example-datepicker">Choose a return date</label>
      <div class="timeClass">
          <b-form-datepicker
        id="example-datepicker"
        v-model="returnDate"
        class="mr-2"
      ></b-form-datepicker>
      <b-form-timepicker v-model="returnTime" locale="en"></b-form-timepicker>
      </div>
      <b-button class="mt-3" block variant="outline-dark">Search</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sliding: null,
      pickLocation : ['istanbul', 'ankara', 'izmir', 'houston'],
      pickLocationValue : 'istanbul',
      returnLocation : ['istanbul', 'ankara', 'izmir', 'houston'],
      returnLocationValue : 'houston',
      pickDate : '',
      pickTime : '',
      returnDate : '',
      returnTime : '',
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>
<style>
.imgSlideCarousel {
  width: 100%;
  height: 700px;
}

.formReservation {
  position: absolute;
  min-height: 360px;
  max-height: 420px;
  background-color: rgba(255,255,255,0.7);
  padding: 15px;
  margin-top: -600px;
  margin-left: 140px;
  z-index: 999;
}
.timeClass{
    display: flex;
    flex-direction: row;
}
.imgMirror{
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
}

</style>
