<template>
    <b-form>
        <b-form-input class="mt-2" v-model="text" placeholder="What is your role model name?"></b-form-input>
        <b-form-input class="mt-2" v-model="text" placeholder="What is his job?"></b-form-input>
        <b-form-input class="mt-2" v-model="text" placeholder="What is his nationality?"></b-form-input>
        <b-form-datepicker v-model="value" class="mt-2 mb-2"></b-form-datepicker>
    </b-form>

</template>
<script>
export default {
    data(){
        return {
            text : ''
        }
    }
}
</script>