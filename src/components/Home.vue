<template>
    <div>
      <div id="app">
      <div class="hero">
        <div class="container">
          <h1 class="hero-title animate__animated animate__bounce">Welcome,My Name is <span>J</span>ason and I am an <span class="animate__flash">aspiring</span> Full Stack <span>Web</span> Developer</h1>
          <p class="her-desciption">I look forward to working with you. <text class="animate__animated animate__hinge">😁😅😀</text></p>
          <router-link id="btn" class="btn btn-ouline-danger animate__animated animate__fadeInLeft" to="/contact"><span>Lets in touch</span></router-link>
         
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
  ::after{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  
  
  .hero {
        
        color: white;
        padding: 100px 0;
        text-align: center;
        border: solid #000;
        background: url(https://i.postimg.cc/VkxQ22Fk/pexels-adrien-olichon-2931246.jpg) no-repeat;
        background-size: cover;
        background-position: center;
        height: 100vh;
        
    
      }
  
      .hero-title {
        font-size: 36px;
        font-weight: bold;
        margin-bottom: 30px;
      }
  
      .hero-description {
        font-size: 18px;
        color: #6c757d;
        margin-bottom: 30px;
      }
  
    span{
      color: #b3fffd;
      font-family:'Dancing Script', cursive;
  
    }
  
    .container{
      margin-top: 3rem;
    }
  
  .icons{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
      
  
  #btn {
  margin: 1rem;
  border: dotted #000;
 
  display: inline-block;
  padding: 10px 20px;
  font-size: 18px;
  color: #fff;
  background-color: #000;
  
  cursor: pointer;
 
  
}

.sidebar {
  position: fixed;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
}

.sidebar a {
  display: block;
  margin-bottom: 10px;
}

.sidebar a .bi {
  font-size: 24px;
  color: #fff;
}

.sidebar a:hover .bi {
  color: #00fff7;
}


      
  </style>
  