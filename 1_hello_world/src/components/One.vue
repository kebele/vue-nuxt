<template>
    <div class="container">
        <!-- this is ONE -->
        <!-- {{titleBig}} -->
        {{mutateTitle}}
        <br>
        <button @click="tryOne">değiştir</button>
        <br>
        {{titleBig}}
    </div>
</template>
<script>
export default {
    // props : ['titleBig'],
    props : {
        titleBig : {
            type : String, Number,
            // required : true,
            // default : 'default değer'
            default : () =>  {
                return 'props yollanmadığı için default value değeri geldi'
            },
            // validator : (value) => {
            //     return ['this is one', 'header', 'index'].indexOf(value) !==-1
            //     //gelen value bu 3 taneden farklı ise 
            // }
        }
    },
    data(){
        return {
            mutateTitle : this.titleBig
        }
    },
    methods: {
        tryOne(){
            this.mutateTitle = 'mutate hatasından kaç, yeni başlık yap'
        }
    },
}
</script>
<style>
    .container {
        font-size: 22px;
        color : darkblue;
    }
</style>