<template>
    <div>
      <div id="app">
      <div class="hero">
        <div class="container">
          <div class="hero-content">
          <div class="profile-image">
              <img src="https://i.postimg.cc/RZgjkTXj/C12-Jason-Viljoen-1.jpg" alt="Your Profile Image">
            </div>
          <h1 id="welcome" class="h1 animate__animated animate__jackInTheBox">Welcome</h1>
          <h1 class="hero-title animate__animated animate__slideInLeft">My Name is <span>J</span>ason and I am an <span class="animate__flash">aspiring</span> Full Stack <span>Web</span> Developer</h1>
          <p class="her-desciption">I look forward to working with you.</p>
          <router-link id="btn" class="btn btn-ouline-danger animate__animated animate__pulse " to="/contact"><span>Let's get in touch...</span></router-link>
         
        </div>
      </div>
      </div>
      </div>
      
    </div>
   
  </template>
  
  <script>
  
  
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  .hero {
    color: white;
    padding: 50px 0; 
    text-align: center;
    background: url(https://i.postimg.cc/VkxQ22Fk/pexels-adrien-olichon-2931246.jpg) no-repeat 100vh;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    min-height: 100vh;
  }

  .hero-title {
    font-size: 20px; 
    font-weight: bold;
    margin-bottom: 20px; 
  }

  .hero-description {
    font-size: 14px; 
    color: #6c757d;
    margin-bottom: 20px; 
  }

  .profile-image {
    float: none; 
    margin: 0 auto 20px; 
  }

  .profile-image img {
    margin-top: 10rem;
    max-width: 15rem; 
    border-radius: 50%; 
    box-shadow: #000 3px 5px 6px;
  }

  .hero-content {
    overflow: hidden;
  }

  span {
    color: #b3fffd;
    font-family: 'Dancing Script', cursive;
  }

  .container {
    margin-top: 1rem; 
  }

  #btn {
    margin: 1rem;
    padding: 10px 20px;
    font-size: 14px; 
    cursor: pointer;
  }

  #btn:hover {
    background-color: #b3fffd;
    color: #000;
  }

  #btn span:hover {
    color: #000;
  }

  #welcome {
    font-weight: 700;
  }

  @media (max-width: 300px) {
    .hero {
      padding: 20px 0; 
    }

    .hero-title {
      font-size: 14px; 
      margin-bottom: 10px; 
    }

    .hero-description {
      font-size: 12px; 
      margin-bottom: 10px; 
    }

    .profile-image img {
      max-width: 10rem; 
      margin-top: 15rem;
    }

    #btn {
      font-size: 12px; 
    }
  }
</style>
  