<template>
   <header ref="header" class="main-header ">
      <div class="m-container">
         <div class="nav-bar ">

               <router-link :to="{ name: 'index'}" class="navbar-logo"><img src="/image/logo.svg " alt=" "></router-link>
               <div for="menu-btn " @click="toggleMobileMenu"  class="menu-icon cursor-pointer"><span class="menu-icon__line "></span></div>
               <ul class="nav-links " v-if="showFullMenu">
                  <li class="nav-link ">
                     <router-link :to="{ name: 'features'}">Features</router-link>
                  </li>
                  <li class="nav-link ">
                     <router-link :to="{ name: 'templates'}">Templates</router-link>
                  </li>
                  <li class="nav-link ">
                     <router-link :to="{ name: 'apps'}">Apps</router-link>
                  </li>
                  <li class="nav-link ">
                     <a href="price.html ">Price</a>
                  </li>
                  <li class="nav-link ">
                     <a href="support.html ">Support</a>
                  </li>
                  <li class="nav-link " v-if="!authenticated">
                     <router-link :to="{ name: 'login'}">Login</router-link>
                  </li>
               </ul>
               <ul class="nav-links" v-if="authenticated">
                  <li class="nav-link ">
                     <span @click="customerLogout">Logout</span>
                  </li>
                  <li class="nav-link" :title="user.first_name">
                     <router-link :to="{name: 'customerDashboard'}" class="profile-avatar">
                        <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" alt="user-profile" />
                     </router-link>
                  </li>
               </ul>
         </div>
      </div>
   </header>

</template>

<script>

import { AuthService } from '../services/auth.service'
import {mapGetters, mapActions} from 'vuex'
import $ from 'jquery'
export default {
  name: 'Header',
  data(){
     return ({
        fullname: '',
        email: '',
        role: ''
     })
  },
  computed: {
     ...mapGetters('auth', ['authenticated', 'user']),
     showFullMenu() {
        return this.$route.meta.showFullMenu
     },
     isHome() {
        return this.$route.name === 'index'
     }
  },
  methods: {
    ...mapActions('auth', ['logout']),
    async customerLogout() {
       await this.logout()
       if(this.isHome) return
       this.$router.push({ name: 'index' }).catch(error => {
          console.log(error)
       })
    },
    toggleMobileMenu() {
        $('.nav-links').toggleClass('visible');
        $('.menu-icon').toggleClass('clicked')
    },

    loggedIn(){
      const user = localStorage.getItem('user')
      // if(user != null){
      //    const userObj = JSON.parse(user)
      //    this.fullname = userObj.name
      //    this.email = userObj.email
      //    this.role = userObj.role
      // }

    }
  },

  mounted(){
     this.loggedIn()
     window.addEventListener('scroll',() => {
       const scrollPos = window.scrollY;
       const header = this.$refs.header
       if (scrollPos > 50) {
           header?.classList.add('scrolled');
       } else {
           header?.classList.remove('scrolled');
       }
     })
  }
}
</script>

<style lang="scss" scoped>
.cursor-pointer {
   cursor: pointer
}
.main-header .nav-links .nav-link span {
    margin: .2rem;
    padding: 1rem 1.2rem;
    display: inline-block;
    font-size: 14px;
    letter-spacing: 1px;
    font-weight: 400;
    -webkit-transition: .3s ease all;
    transition: .3s ease all;
    position: relative;
    width: 120px;
    text-align: left;
    color: inherit;
    text-transform: uppercase;
    font-size: 14px;
    font-family: 'Montserrat-Regular';
}

.main-header .nav-links .nav-link span:hover {
    color: #FE5826;
    letter-spacing: 2px !important;
    cursor: pointer;
}

.profile-avatar {
    width: 40px !important;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 !important;
    padding: 0 !important;
}

</style>
