<script setup>
import { RouterView, RouterLink } from "vue-router";
import Nav from "./views/Nav.vue";
import Header from "./views/Header.vue";
import Footer from "./views/Footer.vue";
</script>

<template>
    <!-- Navbar Start -->
    <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
        <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h1 class="m-0">Gardener</h1>
        </a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
                <RouterLink to="/" class="nav-item nav-link active">Home</RouterLink>
                <RouterLink to="/about" class="nav-item nav-link">About</RouterLink>
                <RouterLink to="/services" class="nav-item nav-link">Services</RouterLink>
                <RouterLink to="/projects" class="nav-item nav-link">Projects</RouterLink>
                <div class="nav-item dropdown">
                    <RouterLink to="" href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</RouterLink>
                    <div class="dropdown-menu bg-light m-0">
                        <RouterLink to="/feature" class="dropdown-item">Features</RouterLink>
                        <RouterLink to="/quote" class="dropdown-item">Free Quote</RouterLink>
                        <RouterLink to="/team" class="dropdown-item">Our Team</RouterLink>
                        <RouterLink to="/testimonial" class="dropdown-item">Testimonial</RouterLink>
                        <RouterLink to="/404" class="dropdown-item">404 Page</RouterLink>
                    </div>
                </div>
                <RouterLink to="contact.html" class="nav-item nav-link">Contact</RouterLink>
            </div>
            <a href="" class="btn btn-primary py-4 px-lg-4 rounded-0 d-none d-lg-block">Get A Quote<i class="fa fa-arrow-right ms-3"></i></a>
        </div>
    </nav>
    <!-- Navbar End -->
 <!-- <nav>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
  <RouterLink to="/contact">Contact</RouterLink>
  <RouterLink to="/posts">Posts</RouterLink>
 </nav> -->
 <RouterView />
 <Footer />
</template>

<style scoped>
/* nav{
  width: 100%;
  font-size: 24px;
}
nav a{
  display: inline-block;
  padding: 5px 10px;
  text-decoration: none;
  margin: 10px;
}

nav a.RouterLink-exact-active {
  background-color: coral;
} */

/********** Template CSS **********/

</style>
