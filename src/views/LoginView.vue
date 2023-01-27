<script>
import '../style/login.css';
</script>
<template>
    <div class="Login-box">
        <div class="center position-relative">
            <form v-on:submit="addData" class="">
                <p class="mb-1">Username</p>
                <input ref="name" type="name" class="form-control mb-3 mt-2" placeholder="Username" required/>
                <p class="mb-1">Password</p>
                <input ref="passw" type="password"  class="form-control mb-3 mt-2" placeholder="*********" required/>
                <button type="submit" class="form-control btn btn-primary">Login</button>
                <p class="mt-3 d-inline-block"> <input class="form-check-input me-2" type="checkbox" value="" id="flexCheckChecked" checked />Keep me signed in</p>
                <router-link to="/" class="link mt-3 ms-3 position-absolute end-0 me-5 fs-6">Forgot Password</router-link>
                <a class="link" href=""><div class="log-in-google"><fa class="me-2" :icon="['fab', 'google']"/>Log in with Google</div></a>
                <div class="text-center mt-3" > <p class="d-inline-block fw-bold">Not a member ?</p> <router-link to="/" class="link fs-6" href="">Create new account</router-link></div>
            </form> 
        </div>
    </div>
</template>