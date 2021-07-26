import { createStore } from "vuex";

export default createStore({
  state: {
    totalVueX: 0,
  },
  getters: {
    doubleDuTotal(state) {
      return state.totalVueX * 2;
    },
  },
  mutations: {
    setTotal(state, newVal) {
      state.totalVueX = newVal;
    },
  },
  actions: {},
  modules: {},
});
