<script>
import '../style/navbar.css';


</script>

<template>
    <nav class="navbar navbar-expand-lg">
      <div class="nav-container container-fluid">
        <router-link to="/" class="bg-transparent" href="#"><img class="logo" alt='logo' src= "../photos/company_Logo.png"/></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav  me-auto mb-2 mb-lg-0">
             <li class="nav-item"><router-link class="btn from-center" to="/">Home</router-link></li>
             <li class="nav-item"><router-link class="btn from-center" to="/counter">Counter</router-link></li>
             <li class="nav-item"><router-link class="btn from-center" to="/">Marketplace</router-link></li>
             <li class="nav-item"><router-link class="btn from-center" to="/">Company</router-link></li>
             <li class="nav-item position-absolute end-0"><router-link to="/login"><button type="button" class="login">Log in</button></router-link></li>
              <li class="nav-item"></li>
          </ul>
        </div>
      </div>
      
    </nav>
    
    
</template>