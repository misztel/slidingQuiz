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
    score: 0,
  },
  getters: {
    cards: (state) => state.cards,
    score: (state) => state.score,
  },
  mutations: {
    delCard: (state) => {
      state.cards.shift();
    },
    proceedAnswer: (state) => {
      state.score += 1;
    },
  },
  actions: {
  },
  modules: {
  },
});
