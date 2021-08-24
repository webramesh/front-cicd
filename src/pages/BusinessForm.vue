<template>
    <BaseFrontFlowLayout>
        <section class="p-sm-2 p-lg-4">
            <div class="m-container">
                <div class="m-row">
                    <div class="m-col-12 m-col-md-4">
                        <div class="title-box">
                            <h2>Choose Colour palette for your website</h2>
                        </div>
                        <p class="mt-sm-3 mt-lg-2">Select any of the below process to create your website Lorem Ipsum is simply dummy text of the printing and typesetting industry dummy text of the.</p>
                    </div>
                    <div class="m-col-md-2">
                        <!--  offset column  -->
                    </div>
                    <div class="m-col-12 m-col-md-6">
                        <div class="form-wrap business-form">
                            <div class="m-form mt-sm-2 ">
                                <div v-if="frontValidations.length" class="alert alert-error">
                                    <div v-for="(error,i) in frontValidations" :key="i">
                                       {{error}}
                                    </div>
                                </div>
                                <form action="">
                                   <div v-if="isUploading" class="d-flex align-items-center">
                                       <div>
                                            <img class="profile-image brand-image" :src="iconBase64" />
                                       </div>
                                        <div class="m-input-box bdr-none">
                                            <input type="file" class="m-input edit_logo custom-file-input" placeholder="Edit your Logo"  ref="upload_logo" v-on:change="handleFileUpload">
                                        </div>
                                   </div>
                                    <div v-else class="m-input-box bdr-none">
                                        <input type="file" id="file" ref="upload_logo" v-on:change="handleFileUpload" placeholder="Add your Logo" class="m-input custom-file-input">
                                    </div>

                                    <div class="m-input-box">
                                        <input type="text" v-model="website_name" name="website_name" placeholder="Website Name" class="m-input form__input">
                                    </div>
                                    <div class="m-input-box">
                                        <input type="text" v-model="business_address" name="business_address" placeholder="Business Address" class="m-input">
                                    </div>
                                    <div class="m-input-box">
                                        <input type="email" v-model="email" name="email" placeholder="Email" class="m-input">
                                    </div>
                                    <div class="m-input-box">
                                        <input type="tel" v-model="telephone"  name="telephone" placeholder="Telephone     { Country Code}     {Telephone Number}" class="m-input">
                                    </div>
                                    <div class="m-input-box">
                                        <input type="tel" v-model="mobile" name="mobile" placeholder="Mobile{ Country Code}     {Mobile Number}" class="m-input">
                                    </div>
                                    <!-- <div class="m-row">
                                        <div class="m-col-3">
                                            <p>Social Media </p>
                                        </div>
                                        <div class="m-col-9">
                                            <div class="m-input-box">
                                                <input type="text" ref="social_links" :name="social_links" placeholder="Type or paste your social media link" class="m-input">
                                            </div>
                                            <div class="social-input">
                                                <div class="hidden">
                                                    <div class="example-template m-input-box">
                                                        <input type="text" ref="social_links" :name="social_links" placeholder="Type or paste your social media link" class="m-input">
                                                    </div>
                                                </div>
                                            </div>
                                            <button class="add_field_btn" type="button"> <i class="fa fa-plus "></i> Add More</button>

                                        </div>
                                    </div> -->
                                </form>
                            </div>
                            <p class=" mt-sm-2 mt-md-2 mt-lg-2 ">
                                Don't worry, you can change the above information later also.
                            </p>
                        </div>
                    </div>

                </div>
                <div class="m-row">
                    <div class="m-col-12">
                        <div class="m-row">
                            <div class="m-col-12 m-col-md-6 m-col-lg-6">
                                <div class="pointer-btn back ">
                                    <router-link :to="{ name: 'category'}">
                                        <div class="pointer ">
                                            <img src="image/arrow.svg" alt="" srcset="">
                                        </div>
                                    </router-link>
                                </div>
                            </div>
                            <div class="m-col-12 m-col-md-6 m-col-lg-6 text-sm-left text-lg-right">
                                <a href="#" class="m-btn mt-sm-1 mt-md-2 mt-lg-2 " v-on:click.prevent="submit_business_form()"> Next <span class="icon-box"><div class="triangle-icon"></div> </span></a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </BaseFrontFlowLayout>
</template>

<script>
import { LogoUploadService } from '@/services/logo.service'
import debug from 'debug'
import BaseFrontFlowLayout from '../layout/BaseFrontFlowLayout.vue'
import {mapState} from 'vuex';

export default {
    name: 'BusinessForm',
    components: {
        BaseFrontFlowLayout
    },
    data(){
        return{
            website_name: '',
            business_address: '',
            email:'',
            telephone:'',
            mobile:'',
            social_links:[],
            publish:'',
            submitStatus: null,
            upload_logo: '',
            isDisabled:false,
            iconBase64:'',
            logo_location: '',
            isUploading: false,
            frontValidations: []
        }
    },
    mounted() {
        const response = localStorage.getItem('userProjectInfo')
        const userProjectInfo = JSON.parse(response)

        if(userProjectInfo.logo) this.isUploading = true
        this.iconBase64 = userProjectInfo.logo
        this.website_name = userProjectInfo.website_name
        this.business_address = userProjectInfo.business_address
        this.email = userProjectInfo.email
        this.telephone = userProjectInfo.telephone
        this.mobile = userProjectInfo.mobile
    },
    computed: {
      ...mapState('frontflow', ['userProjectInfo'])
    },
    methods:{
        async submit_business_form(){
          if (!this.website_name) {
              this.frontValidations.push('Website name is required.');
          }
          if(this.frontValidations.length) {
              setTimeout(() => {
                this.frontValidations = []
              }, 3000);
              return
          }
          try {
              await LogoUploadService.postBusinessForm({website_name: this.website_name, business_address: this.business_address, email: this.email,
              telephone:this.telephone, mobile:this.mobile  })
                this.error = ''
                // this.$store.dispatch('template/logo')
                 this.$store.commit('frontflow/SET_USER_PROJECT_INFO', {
                    logo: this.iconBase64,
                    website_name: this.website_name,
                    business_address: this.business_address,
                    email: this.email,
                    telephone: this.telephone,
                    mobile: this.mobile,
                })
                localStorage.setItem('userProjectInfo', JSON.stringify(this.userProjectInfo))
                this.$router.replace({ name: 'color-palette' })
            } catch (error) {
                this.$store.commit('toast/NEW', { type: 'error', message: error.message })
                this.error = error.status === 404 ? 'User with same email not found' : error.message
            } finally {

            }
        },
      saveUploadedFile(logo_file){
            const reader = new FileReader()
            reader.readAsDataURL(logo_file)
            reader.onload = () => {
                console.log('file to base64 result:' + reader.result)
                this.iconBase64 = reader.result
                this.isUploading = true
                try {
                    LogoUploadService.postLogo({image: reader.result})
                    this.error = ''
                    // this.$store.dispatch('template/logo')
                    // this.$router.push('category')
                } catch (error) {
                    this.$store.commit('toast/NEW', { type: 'error', message: error.message })
                    this.error = error.status === 404 ? 'User with same email not found' : error.message
                }
            }
      },
      handleFileUpload(e){
        var image_file = e.target.files[0];
        this.upload_logo = e.target.files[0];
        this.saveUploadedFile(image_file)
      },
      chooseSubcategoryBack(){
          this.$router.push({name:'category'});
      },

    },
    watch: {
        website_name: function (val) {
           if(!val) return
           if(val.length > 0)
                this.isDisabled = true
        },

        upload_logo: function () {
            localStorage.getItem('logo')
        },
        logo_location: function(){
            localStorage.getItem('logo_location')
        }
    }
}
</script>

<style>
.business-form .m-form .edit_logo {
    color: transparent;
    position: relative;
}

.business-form .m-form .edit_logo::before {
    opacity: 0;
}

.business-form .m-form .edit_logo::after {
    content: "Edit your Logo";
    position: absolute;
    top: 44%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    left: 7%;
    color: #031f4b;
    font-size: 18px;
    font-family: 'Montserrat-Regular';
}

.d-flex {
    display: flex !important;
}
.align-items-center {
    align-items: center;
}
.brand-image {
    width: 120px;
    height: 120px;
    margin-right: 12px;
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
}
</style>
// <button v-on:click="chooseSubcategoryBack()" class="skip-btn mt-sm-1 mt-md-2 mt-lg-2">Skip</button>