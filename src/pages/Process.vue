<template>
  <BaseFrontFlowLayout>
    <section class="p-sm-2 p-lg-4">
      <div class="m-container">
        <div class="m-row">
          <div class="m-col-12 m-col-md-6">
            <div class="title-box">
              <h2>Professional Templates for your Website</h2>
            </div>
            <p class="mt-sm-3 mt-lg-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry dummy text of the.
            </p>
          </div>
        </div>
        <div class="m-row">
          <div class="m-col-12 m-col-md-4">
            <div class="process-box-wrap">
              <div class="process-box">
                <div class="sub-title">
                  <h3>Guided</h3>
                </div>
                <p>
                  Select any of the below process to create your website Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry dummy text of the.
                </p>
                <div @click="setTemplateMode('guided')" class="select-btn">
                  <router-link :to="{ name: 'login' }">
                    <div class="pointer">
                      <img src="image/arrow.svg" alt="" srcset="" />
                    </div>
                    <span class="btn-text"> Select</span>
                    <span class="icon-box"
                      ><div class="triangle-icon"></div>
                    </span>
                  </router-link>
                </div>
              </div>
              <button class="play-btn mt-md-2 mt-lg-2">
                <a href=""
                  ><img src="image/play-blue.svg " alt=" " /> Watch video</a
                >
              </button>
            </div>
          </div>
          <div class="m-col-12 m-col-md-4">
            <div class="process-box-wrap">
              <div class="process-box">
                <div class="sub-title">
                  <h3>Template</h3>
                </div>
                <p>
                  Select any of the below process to create your website Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry dummy text of the.
                </p>
                <div @click="setTemplateMode('template')" class="select-btn">
                  <router-link :to="{ name: 'login' }">
                    <div class="pointer">
                      <img src="image/arrow.svg" alt="" srcset="" />
                    </div>
                    <span class="btn-text"> Select</span>
                    <span class="icon-box"
                      ><div class="triangle-icon"></div>
                    </span>
                  </router-link>
                </div>
              </div>
              <button class="play-btn mt-md-2 mt-lg-2">
                <a href=""
                  ><img src="image/play-blue.svg " alt=" " /> Watch video</a
                >
              </button>
            </div>
          </div>
          <div class="m-col-12 m-col-md-4">
            <div class="process-box-wrap">
              <div class="process-box">
                <div class="sub-title">
                  <h3>Create Yourself</h3>
                </div>
                <p>
                  Select any of the below process to create your website Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry dummy text of the.
                </p>
                <div
                  @click="setTemplateMode('createYourSelf')"
                  class="select-btn"
                >
                  <a href="login.html">
                    <div class="pointer">
                      <img src="image/arrow.svg" alt="" srcset="" />
                    </div>
                    <span class="btn-text"> Select</span>
                    <span class="icon-box"
                      ><div class="triangle-icon"></div>
                    </span>
                  </a>
                </div>
              </div>
              <button class="play-btn mt-md-2 mt-lg-2">
                <a href=""
                  ><img src="image/play-blue.svg " alt=" " /> Watch video</a
                >
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </BaseFrontFlowLayout>
</template>

<script>
import BaseFrontFlowLayout from "../layout/BaseFrontFlowLayout.vue";
import {mapState} from 'vuex';

export default {
  name: "Process",
  components: {
    BaseFrontFlowLayout,
  },
  data() {
    return {
    };
  },
  computed: {
      ...mapState('frontflow', ['userProjectInfo'])
  },
  methods: {
    setTemplateMode(template_mode) {
        this.$store.commit('frontflow/SET_USER_PROJECT_INFO', {
            template_mode
        })
        localStorage.setItem('userProjectInfo', JSON.stringify(this.userProjectInfo))
    },
  },
};
</script>