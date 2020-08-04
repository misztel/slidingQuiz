import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cards: [
      { question: 'Test Question - false', answer: false },
      { question: 'Second Test Question - true', answer: false },
      { question: 'Third Question - false', answer: false },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
