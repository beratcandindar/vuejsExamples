<script>
import '../style/react.css';
import "@fortawesome/vue-fontawesome";



export default {
    data() {
        return {
        shout: '',
        };
    },
    methods: {
    handleShout() {
      const name = this.$refs.name.value;
      const mail = this.$refs.mail.value;
      const passw = this.$refs.passw.value;
      this.shout = `${name.toUpperCase() + mail.toUpperCase() + passw.toUpperCase()}!!!`;
    }
  }
}


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
                        <div class="label-box">
                            <a href="https://www.facebook.com/"><i class="right-page-label"><fa :icon="['fab', 'facebook']"/></i></a>
                            <a href="https://twitter.com/"><i class=" right-page-label"><fa :icon="['fab', 'twitter']"/></i></a>
                            <a href="https://github.com/"><i class="right-page-label"><fa :icon="['fab', 'github']"/></i></a>
                        </div>
                        <div class="deneme"><hr/>Or<hr/></div>
                        <input ref="name" class="form-control" placeholder="Full name"/>
                        <input ref="mail" class="form-control" placeholder="Mobile number or email"/>
                        <input ref="passw"  class="form-control" placeholder="Password"/>
                        <button @click="handleShout()" type="submit" class="submit">Create your account {{ shout }}</button>
                        
                    </div>
                    <img class="bg_image" src="../photos/dots.png"/>
                </div>
                
            </div>
        </div>
</template>