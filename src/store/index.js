import { createStore } from 'vuex'

export default createStore({
  state: {
    portfolioData: null,
  },
  getters: {

  },
  mutations: {
    setPortfolioData(state, data) {
      state.portfolioData = data;
    }
  },
  actions: {
    async fetchPortfolioData({commit}) {
      const response = await fetch ('https://jcgviljoen.github.io/portfolio-server/index.json')
      const data = await response.json();
      commit ('setPotfolioData', data);
    }
  },
  modules: {
  }
})
