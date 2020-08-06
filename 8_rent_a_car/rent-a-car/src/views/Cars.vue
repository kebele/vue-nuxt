<template>
<div class="cardContainer">
    <!-- {{ title }} -->
    {{ userData }}
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