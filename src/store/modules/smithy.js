const smithy = {
  state: {
    intensifyItem: 0,
  },
  mutations: {
    ChangeIntensifyItem (state, newItem) {
      Vue.set(state, 'intensifyItem', newItem);
    }
  }
}
export default smithy;