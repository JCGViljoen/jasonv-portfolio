<template>
  <div>
    <div class="container">
        <div class="row gap-5">
            <div class="col" v-for="item in project" :key="item.id">
                <div class="card h-100" style="width: 18rem;">
                    <img :src="item.img" class="card-img-top" alt="...">
                    <div class="card-body">
                      <p class="card-text">{{ item.image }}</p>
                      <p class="card-text">{{ item.title }}</p>
                      <p class="card-text">{{ item.description }}</p>
                      <a :href="item.github" target="_blank" class="btn btn-danger">GitHub</a>
                      <a :href="item.netlify" target="_blank" class="btn btn-danger">Netlify</a>
                    </div>
                  </div>
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


</style>
