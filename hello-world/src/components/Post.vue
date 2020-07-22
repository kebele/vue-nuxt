<template>
    <div>
        <!-- <h3>{{ content }}</h3>     -->
        <h6 v-for="(i,index) in content" :key="index">{{i.number}} {{ i.content }}</h6>
    </div>
</template>
<script>
export default {
    props : {
        // content : String
        content : Array
    }
}
</script>