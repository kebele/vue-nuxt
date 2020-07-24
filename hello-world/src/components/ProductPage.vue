<template>
    <div>
        <label for="">
            <input type="text" v-model.lazy="inputValue" @keyup="sendData">
        </label>
        <br>
        <button @click="addToCard">eleman ekle</button>
    </div>
</template>
<script>
export default {
    props : {
      product : String,  
    },
    data(){
        return {
            inputValue : "",
        }
    },
    methods: {
        sendData(){
            this.$emit('sendToData',this.inputValue)
        },
        addToCard(){
            this.$emit("updateValue", this.product)
        }
    },
}
</script>