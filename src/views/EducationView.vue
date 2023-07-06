<template>
    <div >
        <main role="main" class="container">
    <section id="education">
      <h2>Education</h2>
      
      <ul class="timeline">
        <li>
          <div class="content"  v-for="(education, index) in project" :key="education.id" :class="{ active: index === 0 }">
            <h3>{{ education.qualification }}</h3>
            <p>{{ education.institute }}</p>
            <p>{{ education.year }}</p>
          </div>
        </li>
        
      </ul>
    </section>

    <section>
      
      <skills/>
    </section>
    
    
    
  </main>
    </div>
</template>

<script>
import skills from "../components/Skills.vue"
    export default {
    components:{
      skills,

    },
      computed: {
      
      project() {
        return this.$store.state.education;
      },
    },
    mounted() {
      this.$store.dispatch('fetchEducation');
    }
    
  }
  
</script>

<style scoped>
 main{
    margin-top: 9rem;
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