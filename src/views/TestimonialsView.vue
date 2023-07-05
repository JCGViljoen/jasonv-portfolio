<template>
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item" v-for="(testimonial, index) in project" :key="testimonial.id" :class="{ active: index === 0 }">
          <img :src="testimonial.image" class="d-block w-100" alt="...">
          <h5>{{ testimonial.name }}</h5>
          <p>{{ testimonial.message }}</p>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      project() {
        return this.$store.state.testimonials;
      }
    },
    mounted() {
      this.$store.dispatch('fetchTestimonials');
    }
  }
  </script>
  
  <style scoped>
  
  </style>
  