<template>
    <div >
        <main role="main" class="container">
    <section id="education">
      <h2>Education</h2>
      
      <ul class="timeline">
        <li>
          <div class="content"  v-for="(education, index) in education" :key="education.id" :class="{ active: index === 0 }">
            <h3>{{ education.qualification }}</h3>
            <p>{{ education.institute }}</p>
            <p>{{ education.year }}</p>
          </div>
        </li>
        
      </ul>
    </section>
    
    <section id="skills">
      <h2>Skills</h2>
      
      <ul class="list-group" v-for="item in skills" :key="item.id">
        <li class="list-group-item">{{ skills.title }}</li>
       
      </ul>
    </section>
  </main>
    </div>
</template>

<script>
    export default {
    computed: {
      project() {
        return this.$store.state.education;
      },
      project() {
        return this.$store.state.skills;
      }
    },
    mounted() {
      this.$store.dispatch('fetchEducation');
    },
    mounted() {
      this.$store.dispatch('fetchSkills');
    }
  }
  
</script>

<style scoped>
 main{
    margin-top: 7rem;
 }
    
    .timeline {
    list-style-type: none;
      margin: 0;
      padding: 0;
      position: relative;
    }
    
    .timeline li {
      margin-bottom: 50px;
    }
    
    .timeline .content {
      background-color: #f1f1f1;
      border-radius: 5px;
      padding: 20px;
      position: relative;
    }
</style>