<script>
import '../style/navbar.css';


</script>

<template>
    <nav class="navbar">
      <div class="nav-container container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item"><img class="logo" alt='logo' src= "../photos/company_Logo.png"/></li>
              <li class="nav-item"><a href="../component/SecondPage.vue">Product</a></li>
              <li class="nav-item"><a href="google.com">Features</a></li>
              <li class="nav-item"><a href="google.com">Marketplace</a></li>
              <li class="nav-item"><a href="google.com">Company</a></li>
              <li class="nav-item"><button type="button" class="login">Log in</button></li>
          </ul>
        </div>
      </div>
    </nav>
</template>