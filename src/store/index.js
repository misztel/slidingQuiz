import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cards: [
      { id: 1, question: 'Test Question - false', answer: false },
      { id: 2, question: 'Second Test Question - true', answer: true },
      { id: 3, question: 'Third Question - false', answer: false },
      { id: 4, question: 'Fourth Question - false', answer: false },
    ],
  },
  getters: {
    cards: (state) => state.cards,
  },
  mutations: {
    delCard: (state) => {
      state.cards.shift();
    },
  },
  actions: {
  },
  modules: {
  },
});
