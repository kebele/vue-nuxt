export const state = () => ({
//   authenticated: true
  authenticated: false
})

export const mutations = {
  changeAuth (state) {
    state.authenticated = !state.authenticated
  }
}
