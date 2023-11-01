<template>
  <div class="row">
    <h1>ABOUT <span>JASON</span>VILJOEN</h1>
    <div class="col" id="image">
      <img class="picture animate__animated animate__fadeInLeft" src="https://i.postimg.cc/Twxg0MbT/90928282-1613696178782933-8697521963691671552-n.jpg" alt="" loading="lazy">
    </div>
    <div class="col">
      <h1 class="lead">Need a <span>Creative</span> Product?
        I can Help You!</h1>
      <p>Hi! Jason <span>Viljoen</span>, and I’m a developer who has a passion for building clean web applications with intuitive functionality. I enjoy the process of turning ideas into reality using creative solutions. I’m always curious about learning new skills, tools, and concepts. In addition to working on various solo full stack projects.</p>
      <div class="lead">
        <h4><a class="display-6"
          href="https://docs.google.com/document/d/13P3saHFYDQMWv_Tqj_wNv9qKXhuhafW7qJIOk8vR7JA/edit?usp=sharing"
          target="_blank" download>Download my resume here</a></h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const image = document.querySelector('.picture');

      if (image) {
        const scrollPosition = window.scrollY;
        
        if (scrollPosition > 100) {
          image.classList.add('animate__animated', 'animate__fadeInLeft');
        } else {
          image.classList.remove('animate__animated', 'animate__fadeInLeft');
        }
      }
    },
  },
};
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #010101;
  min-height: 100vh;
  color: white;
}

/* .col {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  color: white;
} */

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
  border-radius: 10px;
  box-shadow: white 3px 5px 4px;
  width: 20rem;
  height: 22rem;
  transition: opacity 0.3s;
}

h4 a {
  text-decoration: none;
  color: #b3fffd;
  font-family: 'Dancing Script', cursive;
  font-weight: 700;
  background-color: #000;
  border: #b3fffd;
  border-radius: 10px;
}

span {
  color: #b3fffd;
}

h1 {
  font-family: Georgia, 'Times New Roman', Times, serif;
}

h4 a:hover {
  color: white;
}

@media (max-width: 800px) {
  .row {
    margin-top: 7rem;
    height: auto;
  }

  .col {
    flex-basis: 100%;
    margin-bottom: 2rem;
  }

  #image img {
    width: 10rem;
    height: auto;
    max-width: 300px;
    max-height: 300px;
  }

  .text {
    flex-basis: 100%;
  }

  .text h1 {
    font-size: 24px;
  }

  .text p {
    font-size: 16px;
  }
}
</style>
