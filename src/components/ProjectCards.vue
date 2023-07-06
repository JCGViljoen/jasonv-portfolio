<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 col-md-4" v-for="(project, index) in projects" :key="project.id" :class="{ active: index === 0 }">
        <div class="card animate__animated animate__bounceIn">
          <img :src="project.image" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <a :href= project.githuburl class="btn btn-outline-info">Github</a>
            <a :href= project.netlifyurl  class="btn btn-outline-info">Netlify</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.project;
    },
  },
  mounted() {
    this.$store.dispatch('fetchProject');
  },
};
</script>

<style scoped>

.container{
  margin-top: 7rem;
  background-color: #010101;
  background-size: cover;
}
.card {
  transition: transform 0.3s;
}

.card.active {
  transform: scale(1.1);
}

@media (max-width: 800px) {
  .col-sm-6 {
    width: 100%;
    margin-bottom: 1rem;
  }
}
</style>
