<template>
    <div class="form-container">
        <div class="container" id="form">
    <h1>Lets get in touch</h1>
    <form action="https://formspree.io/f/mnqkqawk"
          method="POST">
      <div class="form-group">
        <label for="name">Your Name</label>
        <input type="text" name="name" class="form-control" id="name" placeholder="Enter your name" required>
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" name="email" class="form-control" id="email" placeholder="Enter your email" required>
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea class="form-control" id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>
      </div>
      <button type="submit" name="submit" class="btn btn-outline-info">Submit</button>
    </form>
  </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

#form{
  margin-top:7rem;
  background: url(https://i.postimg.cc/rmF1h6K2/jv-personal-logo-by-hinatainn-d8mt9g0-pre.jpg);
  border-radius: 10px 10px;
  box-shadow: #000 3px 4px 5px;
  margin-bottom: 50vh;
  color: white;
}

.form-container{
  background: #000;
  background-size:cover ;
  height: 100vh;
}

h1{
  font-family: 'Dancing Script', cursive;
}


</style>