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
<TheForm/>
  </div>
</template>

<script>
import TheForm from './TheForm'

export default {
  components : {
    TheForm,
  },
  data() {
    return {
      sliding: null,      
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
  max-height: 440px;
  max-width: 500px;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 15px;
  margin-top: -600px;
  margin-left: 140px;
  z-index: 999;
}
.timeClass {
  display: flex;
  flex-direction: row;
}
.imgMirror {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
</style>
