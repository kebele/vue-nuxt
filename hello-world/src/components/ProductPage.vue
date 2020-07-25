<template>
    <div>
        <label for="">
            <input type="text" v-model.lazy="inputValue" @keyup="sendData">
        </label>
        <br>
        <button @click="addToCard">eleman ekle</button>
        <br>
        <label for="">
            <input type="text" v-model="message" @keyup.space="keyFunc">
        </label>
    </div>
</template>
<script>
export default {
    props : {
      product : String,
      message : String,  
      myCallbackFunction : Function
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
        },
        keyFunc(){
            this.myCallbackFunction(this.message)
        }

    },
}
</script>