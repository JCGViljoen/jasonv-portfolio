// store/modules/projects.js
import axios from 'axios';

const state = {
  project: [],
};

const mutations = {
  SET_PROJECTS(state, project) {
    state.project = project;
  },
};

const actions = {
  async fetchProject({ commit }) {
    try {
      const response = await axios.get('https://jcgviljoen.github.io/portfolio-server/index.json');
      const project = response.data;
      commit('SET_PROJECT', project);
    } catch (error) {
      console.error('Error fetching project:', error);
    }
  },
};

const getters = {
  getProject: state => state.project,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
