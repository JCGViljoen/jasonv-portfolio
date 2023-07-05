import axios from 'axios';
import { createStore } from 'vuex';

export default createStore({
  state: {
    project: [],
    testimonials: [],
    education: [],
    skills: []
  },
  getters: {
  },
  mutations: {
    setProjects(state, project) {
      state.project = project;
    },
    setTestimonials(state, testimonials) {
      state.testimonials = testimonials;
    },
    setSkills(state, skills) {
      state.skills = skills;
    },
    setEducation(state, education) {
      state.education = education;
    }
  },
  actions: {
    async fetchProject({ commit }) {
      try {
        const response = await axios.get('https://jcgviljoen.github.io/portfolio-server/index.json');
        const project = response.data.project;
        commit('setProjects', project);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    },
    async fetchTestimonials({ commit }) {
      try {
        const response = await axios.get('https://jcgviljoen.github.io/portfolio-server/index.json');
        const testimonials = response.data.testimonials;
        commit('setTestimonials', testimonials);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    },
    async fetchSkills({ commit }) {
      try {
        const response = await axios.get('https://jcgviljoen.github.io/portfolio-server/index.json');
        const skills = response.data.skills;
        commit('setSkills', skills);
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    },
    async fetchEducation({ commit }) {
      try {
        const response = await axios.get('https://jcgviljoen.github.io/portfolio-server/index.json');
        const education = response.data.education;
        commit('setEducation', education);
      } catch (error) {
        console.error('Error fetching education:', error);
      }
    }
  },
  modules: {
  }
});
