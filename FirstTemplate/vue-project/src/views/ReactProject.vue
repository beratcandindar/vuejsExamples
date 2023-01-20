<script>
import '../style/react.css';
import "@fortawesome/vue-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
</script>

<template>
    <div>
            <div class="full-page">
                <div class="left-page">
                    <div class="info-header">
                        <strong class="info-header-l">We're hiring</strong>
                        <p class="info-header-r">Visit our careers page </p>
                        <i class="fa-solid fa-angle-up fa-rotate-90"></i>
                    </div>
                    <strong class="left-page-title">Data to enrich your online business</strong>
                    <p class="left-page-info">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua ad ad non deserunt sunt.</p>
                    <p class="used-by">Used by</p>
                </div>

                <div class="right-page">
                    <div class="right-page-container">
                        <p class="right-page-title">Sign in with</p>
                        <a href="#"><i class="right-page-label"><fa :icon="['fab', 'facebook']"/></i></a>
                        <a href="#"><i class=" right-page-label"><fa :icon="['fab', 'twitter']"/></i></a>
                        <a href="#"><i class="right-page-label"><fa :icon="['fab', 'github']"/></i></a>
                        <div class="deneme"><hr/>Or<hr/></div>
                        <input type="name" class="form-control" placeholder="Full name"/>
                        <input type="email" class="form-control" placeholder="Mobile number or email"/>
                        <input type="password" class="form-control" placeholder="Password"/>
                        <button type="submit" class="submit">Create your account</button>
                    </div>
                </div>
                <img class="bg_image" src="../photos/dots.png"/>
            </div>
        </div>
</template>