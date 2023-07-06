<template>
  <div class="card-container">
    <div class="card" v-for="(testimonial, index) in project" :key="testimonial.id">
      <img :src="testimonial.image" alt="testimonial image" class="card-image">
      <div class="card-content">
        <h5>{{ testimonial.name }}</h5>
        <p><strong>{{ testimonial.relation }}</strong></p>
        <p>{{ testimonial.message }}</p>
      </div>
    </div>
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
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top:20rem;
  background-color: black;
}

.card {
  width: 300px;
  margin: 1rem;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 1rem;
  text-align: center;
}



@media (max-width: 800px) {
  .card {
    width: calc(50% - 2rem);
  }
}

@media (max-width: 576px) {
  .card {
    width: calc(100% - 2rem);
  }
}
</style>
