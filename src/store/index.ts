import { createStore } from 'vuex';

export default createStore({
  state: {
    isSideNavOpen: true,
  },
  getters: {
    isSideNavOpen(state) {
      return state.isSideNavOpen;
    },
  },
  mutations: {
    toggleSideNav(state) {
      state.isSideNavOpen = !state.isSideNavOpen;
    },
  },
  actions: {
    toggleSideNav({ commit }) {
      commit('toggleSideNav');
    },
  },
  modules: {},
});
