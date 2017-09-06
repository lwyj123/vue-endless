import Vue from 'vue';
import Vuex from 'vuex';

// global game setting
import config from './modules/config';
// fight part
import fight from './modules/fight';
// hero info
import hero from './modules/hero';
// map info
import map from './modules/map';
// 
import smithy from './modules/smithy';
// for user(login... blabla)
import user from './modules/user';

import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    UPDATE: 1,
  },
  mutations: {
    UPDATE(state){
      Vue.set(state,'UPDATE', Math.random() + Date.now());
    },
  },
  modules: {
    config,
    fight,
    hero,
    map,
    smithy,
    user,
  },
  getters,
});

export default store
