<template>
  <div>
    <h1 class="h1">What People have to say...</h1>
    <testimonials/>

  </div>
</template>

<script>
import testimonials from "../components/Testimonials.vue"
  export default {
    components: {
      testimonials
    }
    
  }
</script>

<style scoped>
.h1{
  margin-top: 7rem;
  font-weight: 700;
}
</style>