<template>
  <BaseFrontFlowLayout>
    <FlashMessage />
    <section class="choose-font-wrap p-sm-2 p-lg-4">
      <div class="m-container">
        <div class="m-row">
          <div class="m-col-12 m-col-lg-3">
            <div class="title-box">
              <h2>Choose best match template for your website</h2>
            </div>
            <p class="mt-sm-3 mt-lg-2">
              Select any of the below process to create your website Lorem Ipsum
              is simply dummy text of the printing and typesetting industry
              dummy text of the.
            </p>
          </div>
          <div class="m-col-lg-1">
            <!-- offest coloumn -->
          </div>
          <div class="m-col-12 m-col-lg-8">
            <div class="choose-template-box">
              <SkeletonLoader :longCard="true" v-if="isLoading"/>
              <div class="m-row" v-else>
                <div
                  v-for="(template) in templates"
                  :key="template.id"
                  class="m-col-12 m-col-md-6 item-box"
                  style="display: block"
                >
                  <div class="item-image-box">
                    <img src="https://images.unsplash.com/photo-1629420883138-4859ae208fab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="" />
                  </div>
                  <a href="#" @click.prevent class="m-btn-one">Preview</a>
                  <span @click="setTemplateId(template.id)">
                    <a @submit.prevent="" class="m-btn-one">Use This Template</a>
                  </span>
                </div>
                <div v-if="nextPage" class="m-col-12 text-center">
                    <a href="#" @click.prevent="loadMore" id="loadMore">Load More</a>
                </div>
              </div>
              <div ref="scrollToMe"></div>
            </div>
          </div>
        </div>
        <div class="m-row">
          <div class="m-col-12 m-col-md-6 m-col-lg-6">
            <div class="pointer-btn back">
              <router-link :to="{ name: 'fonts' }">
                <div class="pointer">
                  <img src="/image/arrow.svg" alt="" srcset="" />
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </BaseFrontFlowLayout>
</template>

<script>
import { mapState } from "vuex";
import axios from 'axios';

import BaseFrontFlowLayout from "../layout/BaseFrontFlowLayout.vue";
import { TemplateService } from "../services/template.service";
import SkeletonLoader from '@/components/SkeletonLoader.vue'
import { API_URL } from '@/.env.js'
import NextPage from '@/mixins/nextPage.js';

export default {
  name: "Templates",
  components: {
    BaseFrontFlowLayout,
    SkeletonLoader
  },
  mixins: [NextPage],
  data() {
    return {
      templates: [],
      isLoading: false,
    };
  },
  methods: {
    async getTemplate() {
      this.isLoading = true
      try {
        const response = await TemplateService.getTemplate({ page: this.page });
        const templates = response.payload.templates
        this.templates.push(...templates.data);
        this.lastPage = templates.last_page;

        if(response.message) {
          this.$store.dispatch('toast/setResponseMessage', { type: 'error', message: response.message })
        }
      } catch (error) {
        if(error.message) {
          this.$store.dispatch('toast/setResponseMessage', { type: 'error', message: error.message })
        }
      } finally {
        this.isLoading = false
      }
    },
    async loadMore() {
      this.increasePage()
      await this.getTemplate();
    },
    setTemplateId(templateId) {
      this.$store.commit("frontflow/SET_USER_PROJECT_INFO", {
        template_id: templateId,
      });
      localStorage.setItem('userProjectInfo', JSON.stringify(this.userProjectInfo))
      this.$router.push({ name: 'editor' })
    },
  },
  mounted() {
    this.getTemplate();
  },
  computed: {
    ...mapState("frontflow", ["userProjectInfo"]),
    nextPage() {
      return this.page < this.lastPage;
    },
  },
};
</script>

<style scoped>
  .m-btn-one {
    cursor: pointer;
  }
</style>

//  <div
//             class="
//               m-col-12 m-col-md-6 m-col-lg-6
//               text-sm-left text-lg-right
//             "
//           >
//             <a href="#" class="skip-btn mt-sm-1 mt-md-2 mt-lg-2"> Skip</a>
//             <router-link
//               :to="{ name: 'editor' }"
//               class="m-btn mt-sm-1 mt-md-2 mt-lg-2"
//             >
//               Next
//               <span class="icon-box"
//                 ><div class="triangle-icon"></div> </span
//             ></router-link>
//           </div>