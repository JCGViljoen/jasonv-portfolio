<template>
  <div id="carouselExampleCaptions" class="carousel slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active"   v-for="(testimonial, index) in project" :key="testimonial.id" :class="{ active: index === 0 }">
        <img :src= testimonial.image class="d-block w-100" alt="testimonila image">
        <div class="carousel-caption d-none d-md-block">
          <h5>{{testimonial.name}}</h5>
          <p><strong>{{ testimonial.relation }}</strong></p>
          <p>{{testimonial.message}}</p>
        </div>
      </div>
      
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
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
  #carouselExampleCaptions{
    margin-top: 6rem;
  }

  img{
    max-width: 250px;
  }
  </style>
  