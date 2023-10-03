<template>
  <nav class="navbar bg-body-tertiary fixed-top">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img id="logo" src="https://i.postimg.cc/rmF1h6K2/jv-personal-logo-by-hinatainn-d8mt9g0-pre.jpg" alt="logo" loading="lazy">
      </router-link>
    
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
            <img id="logo" src="https://i.postimg.cc/rmF1h6K2/jv-personal-logo-by-hinatainn-d8mt9g0-pre.jpg" alt="logo">
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <router-link @click="toggleOffcanvas" to="/">Home</router-link>

            </li>
            
            <li class="nav-item">
              <router-link to="/education">Resume</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/projects">Projects</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/testimonials">Testimonials</router-link>
            </li>
            <li class="nav-item">
              <router-link @click="toggleOffcanvas" to="/contact">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>

export default {
  data() {
    return {
      isOffcanvasOpen: false,
    };
  },
  methods: {
    toggleOffcanvas() {
      this.isOffcanvasOpen = !this.isOffcanvasOpen;
    },
  },
};
</script>

  
  <style>
  nav {
    padding: 10px;
    box-shadow: #000 3px 5px 4px;
  }

  .offcanvas-body.ul {
    text-decoration: none;
    color: white;
  }

  .offcanvas-body {
    background-color: #000;
  }

  #logo {
    height: 5rem;
    width: 5rem;
    border-radius: 50px;
    box-shadow: #000 3px 5px 4px;
  }

  .navbar-toggler {
    transition: transform 0.3s;
  }

  .navbar-toggler.open {
    transform: rotate(90deg);
  }

  @media (max-width: 300px) {
    .navbar-toggler {
      display: block;
    }

    .navbar-toggler.open {
      transform: rotate(90deg);
    }

    .offcanvas {
      width: 100%;
    }

    .offcanvas.show {
      right: 0;
    }
  }
  </style>
  