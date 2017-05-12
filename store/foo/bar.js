export const state = () => {
  return {
    baz: 'Universal Vue.js Application'
  }
}

export const getters = {
  baz (state) {
    return state.baz
  }
}
