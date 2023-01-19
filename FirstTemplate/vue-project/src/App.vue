<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/views/NavbarView.vue'




</script>

<template>
  <Navbar/>
      <!--<div>
        --<nav>
          <div class="nav-container">
            <RouterLink class="s" to="/">Home</RouterLink>
            <RouterLink class="s" to="/about">About</RouterLink>
            <RouterLink class="s" to="/modals">Modals</RouterLink>
            <RouterLink class="s" to="/zikirmatik">Zikirmatik</RouterLink>
          </div>
        </nav>
        <div class="view-container">
        <RouterView />
        </div>
      </div> 
      -->
      
</template>


<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
    position: absolute;
    z-index: 3;
	  top: 0;
    padding: 0;
    width: 100%;
    height: auto;
    display: block;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
.nav-container .s{
    display: inline-block;
    vertical-align: center;
    width: auto;
    color: white;
    font-size: 20px;
    padding: 2px;
    padding-left: 10px;
    text-decoration: none;
    margin: 18px;
    font-family: 'Poppins', sans-serif;
}
.nav-container{
    max-width: 1920px;
    height: auto;
    background-color: #1f2937;
}
.view-container{
    max-width: 1920px;
    height: auto;
    margin-top: 100px;
    background-color: #1f2937;
}
.login{
    width: auto;
    height: 40px;
    font-size: 20px;
    color: white;
    right: 0;
    float: right;
    border-style: none;
    border-radius: 5px;
    margin: 15px;
    padding: 1px;
    padding-left: 17px;
    padding-right: 17px;
    vertical-align: center;
    background-color: #4b5563;
}
</style>
