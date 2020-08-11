<template>
    <div>
        <!-- <h3>{{ content }}</h3>     -->
        <!-- <h3 v-for="(i,index) in content" :key="index">{{i.number}} {{ i.content }}</h3> -->
        <!-- <button @click="addNewContent">add new object</button> -->
        <h2>{{ item.number }}</h2>
        <h2>{{ item.content }}</h2>
        <div v-html="value"></div>

    </div>
</template>
<script>
export default {
    props : {
        // content : String
        // content : Array
        item : Object,
        value : String
    },
    methods: {
        addNewContent(){
            this.content.push({number : 5, content:'five'})
        }
    },
}
</script>