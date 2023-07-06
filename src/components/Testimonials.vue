<template>
  <div class="row">
    <div class="card-container">
      <div class="card" v-for="(testimonial, index) in project" :key="testimonial.id" :class="{ active: index === 0 }">
        <img :src="testimonial.image" alt="testimonial image" class="card-image">
        <div class="card-body">
          <h5>{{ testimonial.name }}</h5>
          <h6><strong>{{ testimonial.relation }}</strong></h6>
          <p>{{ testimonial.message }}</p>
        </div>
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

.row{
  margin-top:10rem;
}
.card-container {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}

.card {
  flex: 0 0 80%;
  margin: 0 1rem;
  width: 10rem;
  height: auto;
  scroll-snap-align: start;
  background-color: #000;
  color: ehi;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.1);
}

.card-image {
  width: 10rem;
  height: auto;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
  box-shadow: 3px 4px 6px #000;
}

.card-body {
  padding: 1rem;
}

@media (min-width: 576px) {
  .card-container {
    justify-content: center;
  }
}
</style>
