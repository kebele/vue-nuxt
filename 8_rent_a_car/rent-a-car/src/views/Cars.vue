<template>
<div class="cardContainer">
    <!-- {{ title }} -->
    <!-- {{ userData }} -->
    <car-card :item="item" class="carCardClass" v-for="i in 12" :key="i"></car-card>
</div>
</template>

<script>
import CarCard from '../components/CarCard'
export default {
    components : {
        CarCard,
    },
    props : {
        // title : String
        userData : Array,
    },
    data(){
        return {
            item : ['renault clio 1.2', 'about car about car about car about car about car about car about car...', 130]
        }
    },
    // beforeRouteEnter (to, from, next) {
        // ...
        //route giriş yapmadan önce, burada this ile erişim yok, çünkü daha comp a girilmedi
    // },
    // beforeRouteUpdate
    // beforeRouteLeave (to, from, next) {
    //     // ...
    //     let answer = window.confirm('are you sure?')
    //     if(answer){
    //         next();
    //     } else {
    //         next(false)
    //     }
    // }


    
}
</script>
<style>
    .cardContainer{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    .carCardClass{
        margin: 10px;
    }
</style>