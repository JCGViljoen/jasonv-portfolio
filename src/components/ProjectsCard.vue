<template>
    <div>
        <div class="card" style="width: 18rem;">
  <img :src="project.image" class="card-img-top" alt="Card image">
  <div class="card-body">
    <h5 class="card-title">{{ project.title }}</h5>
    <p class="card-text">{{ project.description }}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
</template>

<script>
    export default {
        props: {
            project: {
                type: Object,
                reqiured: true

            }
        }
    }
</script>

<style scoped>

</style>