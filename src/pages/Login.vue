<template>
    <BaseFrontFlowLayout>
        <Loader v-if="isLoading" />
        <section v-else class="p-sm-2 p-lg-4">
                <div class="m-container">
                    <div class="m-row">
                        <div class="m-col-12">
                            <div class="form-wrap">
                                <div class="m-row">
                                    <div class="m-col-12">
                                         <FlashMessage />
                                          <div v-if="frontValidations.length" class="alert alert-error">
                                            <div v-for="(error,i) in frontValidations" :key="i">
                                               {{error}}
                                            </div>
                                          </div>
                                    </div>
                                    <div class="m-col-12 m-col-md-6">
                                        <div class="title-box">
                                            <h3>
                                                Login
                                            </h3>
                                        </div>
                                        <div class="m-form mt-sm-2 mt-md-3 mt-lg-2">
                                            <form @submit.prevent="makeLogin()">
                                                <div class="m-input-box">
                                                    <input type="email" name="email" v-model="login.email" placeholder="Email" class="m-input">
                                                </div>

                                                <div class="validation-message" v-if="loginMode" v-text="validation.getMessage('email')"></div>

                                                <div class="m-input-box">
                                                    <input :type="passwordType(login.passwordType)" name="password" v-model="login.password" placeholder="Password" class="m-input">
                                                    <i @click="changePasswordType({ type: login })" class="fa" :class="eyeDisplay(login.passwordType)" aria-hidden="true"></i>
                                                </div>

                                                <div class="validation-message" v-if="loginMode" v-text="validation.getMessage('password')"></div>

                                                <div class="text-right">
                                                    <router-link :to="{name: 'forgetPassword'}"> Forget Password</router-link>
                                                </div>
                                                <button type="submit" class="submit-btn mt-lg-3">
                                                    <div class="pointer">
                                                        <span><img src="image/arrow.svg" alt=""></span>
                                                    </div>
                                                    <span class="icon-box">login<i class="fa fa-caret-right" aria-hidden="true"></i></span>
                                                </button>

                                            </form>
                                            <div class="social-btn mt-sm-2 mt-lg-2">
                                                <a href="#"> Continue with <img src="image/icon_facebook.png" alt=""> </a>
                                                <a href="#">  Continue with<img src="image/icon_google.png" alt=""></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="m-col-12 m-col-md-6 ">
                                        <div class="title-box">
                                            <h3>
                                                Register
                                            </h3>
                                        </div>
                                        <div class="m-form mt-sm-2 mt-md-3 mt-lg-2">
                                            <form @submit.prevent="makeRegistration()">
                                                <div class="m-input-box">
                                                    <input type="text" name="first_name" v-model="first_name" placeholder="First Name" class="m-input">
                                                </div>

                                                <div class="validation-message" v-text="validation.getMessage('first_name')"></div>

                                                <div class="m-input-box">
                                                    <input type="text" name="last_name" v-model="last_name" placeholder="Last Name" class="m-input">
                                                </div>

                                                <div class="validation-message" v-text="validation.getMessage('last_name')"></div>

                                                <div class="m-input-box">
                                                    <input type="email" name="email" v-model="email" placeholder="Email" class="m-input">
                                                </div>

                                                <div class="validation-message" v-text="validation.getMessage('email')"></div>

                                                 <div class="m-input-box">
                                                    <input :type="passwordType(register.passwordType)" name="password" v-model="password" placeholder="Password" class="m-input">
                                                    <i @click="changePasswordType({ type: register })" aria-hidden="true"
                                                    class="fa" :class="eyeDisplay(register.passwordType)" />
                                                </div>

                                                <div class="validation-message" v-text="validation.getMessage('password')"></div>

                                                <div class="m-input-box">
                                                    <input :type="passwordType(register.rePasswordType)" name="password_confirmation" v-model="password_confirmation" placeholder="Retype Password" class="m-input">
                                                    <i @click="changePasswordType({ type: register, rePassword: true })" aria-hidden="true"
                                                    class="fa" :class="eyeDisplay(register.rePasswordType)" />
                                                </div>

                                                <div class="validation-message" v-text="validation.getMessage('password_confirmation')"></div>

                                                <div class="m-input-box">
                                                    <input type="text" name="mobile" v-model="mobile" placeholder="Mobile" class="m-input">
                                                </div>

                                                <div class="validation-message" v-text="validation.getMessage('mobile')"></div>

                                                <button :disabled="isLoading" type="button" @click="makeRegistration()" class="submit-btn mt-lg-3">
                                                    <div class="pointer">
                                                        <span><img src="image/arrow.svg" alt=""></span>
                                                    </div>
                                                    <span class="icon-box">Register<i class="fa fa-caret-right" aria-hidden="true"></i></span>
                                                </button>
                                            </form>
                                            <p class="privacy-terms mt-sm-2 mt-md-2 mt-lg-2 ">
                                                By signing up, you confirm that you have read and accepted our <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy.</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    </BaseFrontFlowLayout>
</template>

<script>
import { AuthService } from '@/services/auth.service'
import BaseFrontFlowLayout from '../layout/BaseFrontFlowLayout.vue'
import Validation from '@/services/Validation'
import FlashMessage from '@/components/FlashMessage'
import Loader from '@/components/Loader'
import {mapGetters} from 'vuex'
export default {
  name: 'Login',
  components: {
    BaseFrontFlowLayout,
    FlashMessage,
    Loader
  },
  data () {
    return {
        login: {
          email: '',
          password: '',
          passwordType: true
        },
        register: {
          passwordType: true,
          rePasswordType: true,
        },
        first_name:'',
        last_name:'',
        email: '',
        password: '',
        error: '',
        password_confirmation:'',
        mobile:'',
        validation: new Validation(),
        isLoading: false,
        frontValidations: [],
        mode: 'customer',
        postMode: 'register'
    }
  },
  computed: {
    ...mapGetters('frontflow', ['templateMode']),
    loginMode() {
      return this.postMode === 'login'
    },
    registerMode() {
      return this.postMode === 'register'
    },
  },
  methods: {
    async makeLogin () {
      this.postMode = 'login'
      try {
        if (!this.login.email) {
          this.frontValidations.push('Email is required.');
        }
        if (!this.login.password) {
          this.frontValidations.push('Password is required.');
        }

        if(this.frontValidations.length) {
          setTimeout(() => {
            this.frontValidations = []
          }, 3000);
          return
        }

        this.isLoading = true

        const response =  await AuthService.makeLogin({ email: this.login.email, password: this.login.password, mode: this.mode })
        this.$store.dispatch('toast/setResponseMessage', { type: 'success', message: response.message })
        await this.$store.dispatch('auth/getUser', response.payload)

        if(!this.templateMode) {
          return this.$router.push({ name: 'process' })
        }
        return this.$router.push({ name: 'category' });

      } catch (error) {
        if(error.message) {
          this.$store.dispatch('toast/setResponseMessage', { type: 'error', message: error.message })
          if(error.status == '403') return this.$router.push({ name: 'otp' })
        }

        if (error.status && error.status == 422) {
          this.validation.setMessages(error.errors);
          return
        }
      } finally {
        this.isLoading = false
      }
    },

    async makeRegistration () {
      this.postMode = 'register'
      try {
        if (!this.first_name) {
          this.frontValidations.push('First name is required.');
        }
        if (typeof this.first_name !== "string") {
          this.frontValidations.push('First name must be string.');
        }

        if (!this.last_name) {
          this.frontValidations.push('Last name is required.');
        }
        if (typeof (this.last_name) !== 'string') {
          this.frontValidations.push('Last name must be string.');
        }

        if (!this.email) {
          this.frontValidations.push('Email is required.');
        }
        if (!this.password) {
          this.frontValidations.push('Password is required.');
        }
        if (!this.mobile) {
          this.frontValidations.push('Mobile number is required.');
        }

        if(this.frontValidations.length) {
          setTimeout(() => {
            this.frontValidations = []
          }, 3000);
          return
        }

        this.isLoading = true
        const response = await AuthService.register({ first_name:this.first_name, last_name:this.last_name, email: this.email, password: this.password, password_confirmation: this.password_confirmation, mobile:this.mobile, mode: this.mode })

        if(response.status == '200') {
          this.$store.dispatch('toast/setResponseMessage', { type: 'success', message: response.message })
          this.validation.empty()
        }

       this.first_name =""
       this.last_name=""
       this.email=""
       this.password=""
       this.password_confirmation=""
       this.mobile=""

       return this.$router.push({ name: 'otp' })

      } catch (error) {
        if(error.message) {
          this.$store.dispatch('toast/setResponseMessage', { type: 'error', message: error.message })
          return
        }

        if (error.status && error.status == 422) {
          this.validation.setMessages(error.errors);
          return
        }

      } finally {
        this.isLoading = false
      }
    },

    changePasswordType({ type, rePassword = false }){
       if(rePassword) return type.rePasswordType = !type.rePasswordType
       return type.passwordType = !type.passwordType
    },

    passwordType(password) {
      return password ? 'password' : 'text'
    },

    eyeDisplay(password) {
      return password ? 'fa-eye' : 'fa-eye-slash'
    }
  }
}
</script>

<style lang="scss" scoped>

.login {
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;

  .main {
    padding: 30px 15px;
    background: #fff;
    width: 400px;
    border-radius: 2px;
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, .2),
    0 24px 38px 3px rgba(0, 0, 0, .14),
    0 9px 46px 8px rgba(0, 0, 0, .12);

    .header {
      text-align: center;
    }

    .buttons {
      display: flex;
      justify-content: flex-end;
    }

    .error {
      background-color: red;
      padding: 10px;
      font-size: 12px;
      opacity: 1;
      transition: all 0.5s;
    }
  }
}
</style>
