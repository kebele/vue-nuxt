<template>
    <div>
        {{ this.$store.getters.getTitle}}

        <label>
            <input type="text" 
                v-model="title" 
                :placeholder="$store.getters.getTitle"
                @keyup.enter="sendTitle"
            >
        </label>
    </div>
</template>
<script>
export default {
    data(){
        return {
            title : '',
        }
    },
    methods: {
        sendTitle(){
            this.$store.dispatch('setTitleActions', this.title)
        }
    },
}
</script>