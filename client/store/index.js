import Vue from "vue";
import Vuex from "vuex";
import auth from './auth'
import vuexPersistance from 'vuex-persist';

Vue.use(Vuex);

const modules = {
  auth
}
const vuexLocal = new vuexPersistance({
  storage: window.localStorage
});

export default new Vuex.Store({
  modules,
  plugins: [vuexLocal.plugin]
});
