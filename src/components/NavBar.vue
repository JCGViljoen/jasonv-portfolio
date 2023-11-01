<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img id="logo" src="https://i.postimg.cc/rmF1h6K2/jv-personal-logo-by-hinatainn-d8mt9g0-pre.jpg" alt="logo" loading="lazy">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <img class="toggle-img" src="https://i.postimg.cc/tJj04LWJ/toggle.gif" alt="Toggle" />
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about">About</router-link>
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
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


  
<style>
nav {
  padding: 10px;
  background-color: #000;
}
div.container-fluid{
  background-color: #000;
}

ul li{
  font-family: Georgia, 'Times New Roman', Times, serif;
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

.toggle-img{
  width: 5rem;
  height: auto;
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