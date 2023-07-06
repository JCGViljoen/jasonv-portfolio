<template>
    <div>
        <div class="container-fluid" id="box">
            <div class="card" style="width: 18rem;" v-for="(project, index) in project" :key="project.id" :class="{ active: index === 0 }">
                <img :src= project.image class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">{{project.name}}</h5>
                  <p class="card-text">{{project.description}}</p>
                  <a :href= project.github-url class="btn btn-outline-success">Github</a>
                  <a :href= project.netlify-url class="btn btn-outline-success">Netlify</a>
                </div>
              </div>
        </div>
        
</div>
</template>

<script>
    export default {
        computed:{
    project(){
      return this.$store.state.project
    }
  },
  mounted(){
    this.$store.dispatch('fetchProject')
  }
    }
</script>

<style scoped>


#box{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 8rem;
    margin-bottom: 100vh;
   
}


</style>


<!-- <div id="box" class="card text-bg-dark mb-3 " style="width:18rem; height:19rem" v-for="(project, index) in project" :key="project.id" :class="{ active: index === 0 }">
    <img :src= project.image class="card-img" alt="project image">
    <div class="card-img-overlay">
      <h5 class="card-title">{{project.name}}</h5>
      <p class="card-text">{{project.description}}</p>
      <p class="card-text"><small>Last updated 3 mins ago</small></p>
    </div>
  </div> -->