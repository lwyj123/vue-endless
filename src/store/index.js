import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user';
import config from './modules/config';
import fight from './modules/fight';

import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    config,
    fight,
  },
  getters
});

export default store
