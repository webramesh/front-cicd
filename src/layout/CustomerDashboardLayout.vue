<script>
import "../../public/user-dashboard-js/jquery-3.6.0.min.js";
import "../../public/user-dashboard-js/fontawesome.min.js";

import {mapActions} from 'vuex'
export default {
  name: "CustomerDashboardLayout",
  data() {
    return {
       showDropDown: false
    }
  },
  methods:{
    ...mapActions('auth', ['logout']),
    openDropDown() {
      this.showDropDown = !this.showDropDown
    },
    async customerLogout() {
       await this.logout()
       this.$router.push({ name: 'index' }).catch(error => {
          console.log(error)
       })
    },
  }
};
</script>

<template>
  <div>
    <!-- Header -->
    <div class="header">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light">
          <router-link to="/" class="navbar-brand">
            <img src="/images/logo.svg" alt="logo" height="45" width="155" />
          </router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
            <ul class="navbar-nav text-right header__ul">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <img src="/images/pasted_poster_.png" width="27" height="25" class="svg" />
                </a>
              </li>
              <li class="nav-item">
                <button
                  type="button"
                  class="btn btn-toggle"
                  aria-pressed="false"
                >
                  <div class="handle"></div>
                </button>
              </li>
              <li class="nav-item">
                <div class="collapse navbar-collapse" id="navbar-list-4">
                  <ul class="navbar-nav">
                    <li @click="openDropDown" class="nav-item dropdown" :class="{'show':showDropDown}">
                      <span
                        class="nav-link dropdown-toggle"
                        id="navbarDropdownMenuLink"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img
                          src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
                          width="40"
                          height="40"
                          class="rounded-circle"
                        />
                      </span>
                      <div class="dropdown-menu" :class="{'show': showDropDown}" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">Dashboard</a>
                        <a class="dropdown-item" href="#">Edit Profile</a>
                        <span class="dropdown-item cursor-pointer" @click="customerLogout">Log Out</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<style scoped src="./customer-dashboard-layout/styles.css"></style>