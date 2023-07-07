<template>
  <div class="card-container">
    <div class="card animate__animated animate__bounceIn" v-for="(testimonial)  in project" :key="testimonial.id">
      <div class="card-image-container">
        <img :src="testimonial.image" alt="testimonial image" class="card-image">
      </div>
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
  margin-top: 2rem;
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

.card-image-container {
  position: relative;
}

.card-image {
  width: 100%;
  height: auto;
  display: block;
}

.card-content {
  padding: 1rem;
  text-align: center;
}
</style>
