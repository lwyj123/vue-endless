import MAP_TABLE from 'data/map-data'

const map = {
  state: {
    mapList: _.cloneDeep(MAP_TABLE),
    map: null,
  },
  mutations: {
    SET_MAP: (state, map) => {
      state.map = map;
    }
  }
}

export default map;