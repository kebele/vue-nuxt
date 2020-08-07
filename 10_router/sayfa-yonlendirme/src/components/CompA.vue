<template>
    <div>
        comp A
        <br>
        <!-- {{ this.$route.params.id }} -->
        <button @click="logConsole">parametreleri göster</button>
    </div>
</template>

<script>
export default {
    methods: {
        logConsole(){
            console.log(this.$route);
        }
    },
}
</script>