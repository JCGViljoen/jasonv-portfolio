<template>
    <div>
      <div id="app">
      <div class="hero">
        <div class="container">
          <h1 id="welcome" class="h1 animate__animated animate__jackInTheBox">Welcome</h1>
          <h1 class="hero-title animate__animated animate__slideInLeft">My Name is <span>J</span>ason and I am an <span class="animate__flash">aspiring</span> Full Stack <span>Web</span> Developer</h1>
          <p class="her-desciption">I look forward to working with you.</p>
          <router-link id="btn" class="btn btn-ouline-danger animate__animated animate__pulse " to="/contact"><span>Let's get in touch...</span></router-link>
         
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
  
   
  
  #btn {
  margin: 1rem;
  border: dotted #000;
 
  display: inline-block;
  padding: 10px 20px;
  font-size: 18px;
  
  background-color: #000;
  
  cursor: pointer;
 
  
}

#btn:hover{
  background-color: #b3fffd;
  color: #000;
}

#btn span:hover{
  color: #000;
}
#welcome{
  font-weight: 700;
  
}

      
  </style>
  