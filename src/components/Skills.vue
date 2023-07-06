<template>
  <div>
    <section id="skills">
      <h2>Skills</h2>
      <ul class="list-group" v-for="(skills, index) in project" :key="skills.id" :class="{ active: index === 0 }">
        <li class="list-group-item">{{ skills.name }}</li>
        <center>
          <img :src="skills.image" alt="" class="animated-image">
        </center>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    project() {
      return this.$store.state.skills;
    },
  },
  mounted() {
    this.$store.dispatch('fetchSkills');
  }
}
</script>

<style scoped>
.animated-image {
  width: 10rem;
  height: auto;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.animated-image:hover {
  transform: scale(1.1);
}
</style>
