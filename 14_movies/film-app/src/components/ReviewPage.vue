<template>
  <div>
    <div v-for="(i, index) in this.$store.state.myReviewsAndVotes" :key="index" class="reviewLoop">
      <div class="movieArea">
        <h3>{{ i.title }}</h3>
        <img :src="i.poster" class="imgPoster" alt="" />
      </div>
      <div class="reviewArea">
        <span class="myvote">{{ i.myvote }}</span>
        <span class="review">{{ i.review }}</span>
      </div>
    <button @click="deleteReview(index)">delete review</button>
    </div>
  </div>
</template>

<script>
export default {
    name : "ReviewPage",
    methods: {
        deleteReview(index){
            this.$store.commit('deleteMyReviewAndVote', index)
        }
    },
};
</script>

<style scoped>
.imgPoster {
  width: 120px;
  height: auto;
}
.reviewLoop{
    display: flex;
    flex-direction: row;
}
.movieArea{
    display: flex;
    flex-direction: column;
    width : 300px
}
.reviewArea{
    display: flex;
    flex-direction: column;
    width : 70%;
    margin-top: 50px;
    margin-left: 30px;
    padding: 20px;
    background-color: beige;
    }
.myvote{
    font-size: 28px;
}
.review{
    font-size: 20px;
}
</style>
