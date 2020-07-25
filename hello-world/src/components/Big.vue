<template>
    <div>
        <span>this is big</span>
        <br>
        <label for="">
            <input type="text" v-model="title" @keyup="eventBusFunc">
        </label>
    </div>
</template>
<script>
import { eventBus } from '../main'
export default {
    data(){
        return {
            title : '',
        }
    },
    methods: {
        eventBusFunc(){
            eventBus.$emit("fromBig", this.title)
        }
    },
}
</script>