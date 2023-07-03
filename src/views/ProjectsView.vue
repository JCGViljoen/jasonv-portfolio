<template>
    <div>
        <p class="h1">Projects</p>
        <!-- <div v-if="portfolioData && portfolioData.projects"> -->
            <div v-for="projects in portfolioData.projects" :key="projects.title">
        <div class="card" style="width: 18rem;">
          <img :src="project.image" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ projects.title }}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        <!-- </div> -->
        </div>
      
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState({
        portfolioData: state => state.portfolioData,
      }),
    },
  };
  </script>
  
  <style scoped>
  </style>
  