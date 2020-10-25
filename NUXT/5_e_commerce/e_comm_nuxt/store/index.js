export const state = () => ({
    name : null,
    email : null
})

export const mutations = {
    setUser(state, user){
        state.name = user.name;
        state.email = user.email
    }
}