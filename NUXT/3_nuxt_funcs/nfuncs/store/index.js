export const state = () => ({
  authenticated: true
})

export const mutations = {
  changeAuth (state) {
    state.authenticated = !state.authenticated
  }
}
