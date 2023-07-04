<template>
  <div class="row">
    <div  class="col" id="image">
      <img src="https://i.postimg.cc/FKbRKB0F/pexels-pixabay-531880.jpg" alt="">
    </div>
    <div class="col">
    <h1>About Us</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra faucibus ex, sed vestibulum purus auctor sed. Suspendisse consequat erat in est dapibus interdum. Vivamus vel sapien scelerisque, efficitur urna vitae, fringilla justo. Nulla eget augue sapien. Suspendisse potenti. Cras dapibus, dui vel tempor placerat, justo mi pulvinar nunc, non tempus ex sem at tortor. Integer condimentum, tellus eu scelerisque tincidunt, dolor justo varius est, et viverra eros risus ut nulla.</p>
    <p>Donec ac fermentum ex. Curabitur ut pulvinar mauris. Quisque ultrices, justo a dapibus auctor, ipsum dui convallis tellus, nec semper massa nisi vel neque. Sed mollis ex at diam faucibus hendrerit. Praesent at mi commodo, rhoncus mauris sit amet, luctus sapien. Duis ultricies lorem ex, id cursus sem aliquet vel. Etiam feugiat dictum enim, a faucibus ex feugiat nec. Aenean sagittis tempor sem sed tristique. Donec ac finibus enim. Vestibulum iaculis tempor hendrerit.</p>
  </div>

  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

.row{
  display: flex;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

}
.col {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.text {
  flex-basis: 50%;
  padding: 0 20px;
}

.text h1 {
  font-size: 32px;
  margin-bottom: 20px;
}

.text p {
  font-size: 18px;
  line-height: 1.5;
}

#image img {
 
  width: 20rem;
  height: 20rem;
}
</style>