export const newMixin = {
    data(){
        return {
            say : 'hello'
        }
    },
    methods: {
        hello(){
            console.log(this.say)
        }
    },
    created(){
        console.log('mixins çalışıyor')
    }
}