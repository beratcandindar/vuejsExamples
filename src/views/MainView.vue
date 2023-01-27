<script>
import '../style/main.css';
import "@fortawesome/vue-fontawesome";



export default {
    data() {
        return {
        output: 'Create Your Account',
        name: '',
        mail: '',
        passw: '',
        };
    },
    methods: {
        addData(e) {
            e.preventDefault()
            this.name = this.$refs.name.value;
            this.mail = this.$refs.mail.value;
            this.passw = this.$refs.passw.value;
            this.output = `Başarıyla kayıt oldun ${this.name}`;
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
                        <fa class="fa-solid fa-rotate-90" icon="angle-up"/>
                    </div>
                    <strong class="left-page-title">Data to enrich your online business</strong>
                    <p class="left-page-info">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua ad ad non deserunt sunt.</p>
                    <p class="used-by">Used by</p>
                    <div class="icon-box">
                        <a class="used-by-icon fa-2xl" href="https://slack.com"><fa :icon="['fab', 'slack']"/></a>
                        <a class="used-by-icon fa-2xl" href="https://www.docker.com"><fa :icon="['fab', 'docker']"/></a>
                        <a class="used-by-icon fa-2xl" href="https://www.amazon.com/"><fa :icon="['fab', 'amazon']"/></a>
                    </div>
                </div>

                <div class="right-page">
                    <div class="right-page-container">
                        <p class="right-page-title">Sign in with</p>
                        <div class="label-box">
                            <a href="https://www.facebook.com/"><i class="right-page-label white-hover"><fa :icon="['fab', 'facebook']"/></i></a>
                            <a href="https://twitter.com/"><i class=" right-page-label  white-hover "><fa :icon="['fab', 'twitter']"/></i></a>
                            <a href="https://github.com/"><i class="right-page-label white-hover"><fa :icon="['fab', 'github']"/></i></a>
                        </div>
                        <div class="deneme"><hr/>Or<hr/></div>
                        <form v-on:submit="addData">
                            <input ref="name" type="name" class="form-control" placeholder="Full name" required/>
                            <input ref="mail" type="email"  class="form-control" placeholder="Mobile number or email" required/>
                            <input ref="passw" type="password"  class="form-control" placeholder="Password" required/>
                            <button  type="submit" class="submit">{{ output }}</button>
                        </form>
                    </div>
                    <img class="bg_image" src="../photos/dots.png"/>
                </div>
            </div>
        </div>
</template>