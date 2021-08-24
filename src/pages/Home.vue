<template>
  <BaseFrontFlowLayout>
     <main id="viewport">
        <FlashMessage></FlashMessage>
        <Banner></Banner>
        <BusinessWebsite></BusinessWebsite>
        <Advantages></Advantages>
        <!-- template starts -->
        <section class="template-wrap mt-md-4 mt-lg-4 p-md-1 p-lg-3">
            <div class="m-container  ">
                <div class="m-row p-md-1 plg-4">
                    <div class="m-col-12 m-col-md-4 mt-lg-4">
                        <div class="template-content-wrap">
                            <div class="title-box ">
                                <h2>Professional Templates for your Website</h2>
                            </div>
                            <p class="mt-md-1 mt-lg-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer standard dummy text.</p>
                            <router-link :to="{name: 'templates'}" class="m-btn mt-md-2 mt-lg-2 ">Explore More <span class="icon-box"><div class="triangle-icon"></div> </span></router-link>
                            <div class="template-responsive ">
                                <img src="/image/home_template3.png " alt=" ">
                            </div>
                        </div>
                    </div>
                    <div class="m-col-12 m-col-md-8 ">
                        <div class="m-row ">
                            <div class="m-col-12 m-col-md-6 ">
                                <div class="template-image ">
                                    <div class="overlay">
                                        <div class="pointer-btn ">
                                            <div class="pointer ">
                                                <img src="/image/arrow.svg" alt="" srcset="">
                                            </div>
                                            <a href=" ">Creat Stunning Website</a>
                                        </div>
                                    </div>
                                    <img src="/image/home_template1.png " alt=" ">
                                </div>
                            </div>
                            <div class="m-col-12 m-col-md-6 ">
                                <div class="template-image ">
                                    <div class="overlay">
                                        <div class="pointer-btn ">
                                            <div class="pointer ">
                                                <img src="/image/arrow.svg" alt="" srcset="">
                                            </div>
                                            <a href=" ">Creat Stunning Website</a>
                                        </div>
                                    </div>
                                    <img src="/image/home_template2.jpg " alt=" ">
                                </div>
                                <div class="template-image fixed-height ">
                                    <div class="overlay">
                                        <div class="pointer-btn ">
                                            <div class="pointer ">
                                                <img src="/image/arrow.svg" alt="" srcset="">
                                            </div>
                                            <a href=" ">Creat Stunning Website</a>
                                        </div>
                                    </div>
                                    <img src="/image/telemarketing.jpg " alt=" ">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- template ends -->

        <!-- apps start -->
        <Apps />
        <!-- apps end -->

        <!-- features start -->
        <section class="feature-wrap p-md-4 p-lg-3">
            <div class="m-container ">
                <div class="m-row ">
                    <div class="m-col-12 m-col-md-4">
                        <div class="title-box ">
                            <h2>Feature of SiteMakeify.</h2>
                        </div>
                        <p class="mt-md-3 mt-lg-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer standard dummy text.</p>
                        <router-link :to="{ name: 'features' }" class="m-btn mt-md-3 mt-lg-2">View More  <span class="icon-box"><div class="triangle-icon"></div> </span></router-link>
                    </div>
                    <div class="m-col-12 m-col-md-2">
                        <div class="diagonal-image">
                            <img src="/image/line.svg" alt="" srcset="">
                        </div>
                    </div>
                    <div class="m-col-12 m-col-md-6 ">
                        <div class="m-row ">
                            <div class="m-col-6 m-col-md-4 ">
                                <div class="feature-content-wrap ">
                                    <span class="icon-cms"></span>
                                    <h5> Content Management System (cms)</h5>
                                </div>
                            </div>
                            <div class="m-col-6 m-col-md-4 ">
                                <div class="feature-content-wrap ">
                                    <span class="icon-easy-editor"></span>
                                    <h5> Easy Editor</h5>
                                </div>
                            </div>
                            <div class="m-col-6 m-col-md-4 ">
                                <div class="feature-content-wrap ">
                                    <span class="icon-drag-drop"></span>
                                    <h5> Drag &amp; Drop</h5>
                                </div>
                            </div>
                            <div class="m-col-6 m-col-md-4 ">
                                <div class="feature-content-wrap ">
                                    <span class="icon-image"></span>
                                    <h5> Image Library</h5>
                                </div>
                            </div>
                            <div class="m-col-6 m-col-md-4 ">
                                <div class="feature-content-wrap ">
                                    <span class="icon-responsive"></span>
                                    <h5> Responsive Website</h5>
                                </div>
                            </div>

                            <div class="m-col-6 m-col-md-4 ">
                                <div class="feature-content-wrap ">
                                    <span class="icon-headphone"></span>
                                    <h5> Dedicated Support</h5>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- features end -->
        <Ways></Ways>
        <Faqs></Faqs>
        <Blogs></Blogs>
     </main>
  </BaseFrontFlowLayout>
</template>

<script>
import BaseFrontFlowLayout from '@/layout/BaseFrontFlowLayout'
import FlashMessage from '@/components/FlashMessage'
import { AuthService } from '@/services/auth.service'
import Banner from './Banner.vue'
import BusinessWebsite from './BusinessWebsite.vue'
import Advantages from './Advantages.vue'
import Templates from './Templates.vue'
import Apps from './Apps.vue'
import Features from './Features.vue'
import Ways from './Ways.vue'
import Faqs from './Faqs.vue'
import Blogs from './Blogs.vue'

export default {
   components:{ Banner, BusinessWebsite, Advantages, Templates, Apps, Features, Ways, Faqs, Blogs, BaseFrontFlowLayout, FlashMessage },
  data () {
    return {
      email:'',
      mobile:'',
      password:'',
      password_conformation:'',
      fullname: '',
      error: '',
      password_login:'',
      email_address:''

    }
  },
  mounted () {
  },

  methods: {
    async loginUser () {
      console.log(this.$refs['email_address'].value,this.$refs['password_login'].value);
       await AuthService.makeLogin({
               email: this.$refs['email_address'].value,
               password: this.$refs['password_login'].value
            })

        this.error = ''
        this.$router.push({ name: 'home' })
    },

    async registerUser(){
      //  console.log(this.email, this.password, this.fullname, this.mobile)
      try {

        await AuthService.regiserNewUser({
               email: this.$refs['email'].value,
               password: this.$refs['password'].value,
               password_confirmation: this.$refs['password_conformation'].value,
               fullname: this.$refs['fullname'].value,
               mobile: this.$refs['mobile'].value
            })

        this.error = ''
        this.$router.push({ name: 'index' })
      } catch (error) {
        this.$store.commit('toast/NEW', { type: 'error', message: error.message })
        this.error = error.status === 404 ? 'User with same email not found' : error.message
      }
    }
  }
}

</script>