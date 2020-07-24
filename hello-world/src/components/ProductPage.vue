<template>
    <div>
        <label for="">
            <input type="text" v-model.lazy="inputValue" @keyup="sendData">
        </label>
    </div>
</template>
<script>
export default {
    data(){
        return {
            inputValue : "",
        }
    },
    methods: {
        sendData(){
            this.$emit('sendToData',this.inputValue)
        }
    },
}
</script>