<template>
  <!-- feature details -->
  <BaseFrontFlowLayout>
    <FlashMessage />
    <section class="choose-font-wrap p-sm-2 p-lg-4">
      <div class="m-container">
        <div class="m-row">
          <div class="m-col-12 m-col-md-3">
            <div class="title-box">
              <h2 style="font-family: 'Festive'">Choose best match fonts for your website</h2>
            </div>
            <p class="mt-sm-3 mt-lg-2">
              Select any of the below process to create your website Lorem Ipsum
              is simply dummy text of the printing and typesetting industry dummy
              text of the.
            </p>
          </div>

          <div class="m-col-md-1"></div>
          <div class="m-col-12 m-col-md-8">
            <div class="fonts-box" id="cssId">
              <SkeletonLoader :cards="true" v-if="isLoading" />

              <div v-else class="m-row">
                <div
                  class="m-col-12 m-col-md-4"
                  v-for="(bundle) in bundles"
                  :key="bundle.id"
                  @click="saveCurrentBundle(bundle)"
                >
                  <div
                    class="font-wrap"
                    @click="setBgColor(bundle.id)"
                    :class="{activeBg: bundle.isActive}"
                  >
                    <div class="font-name">
                      <ul>
                        <li
                          v-for="(font, index) in bundle.fonts"
                          :key="index"
                          style="list-style-type:none; margin-bottom: 10px "
                        >
                          <p class="montserrat-light">{{ font.family }}</p>
                          <p
                            v-bind:style="{'font-family' : font.family}"
                            style="font-size: 13px"
                          >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
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
              <router-link :to="{ name:'color-palette' }">
                <div class="pointer">
                  <img src="image/arrow.svg" alt srcset />
                </div>
              </router-link>
            </div>
          </div>
          <div class="m-col-12 m-col-md-6 m-col-lg-6 text-sm-left text-lg-right">
            <router-link
              :to="{ name: 'chooseTemplate' }"
              class="skip-btn mt-sm-1 mt-md-2 mt-lg-2"
            >skip</router-link>
          </div>
        </div>
      </div>
    </section>
  </BaseFrontFlowLayout>
</template>


<script>
// import 'https://fonts.googleapis.com/css2?family=Qahiri&display=swap';

import { FontService } from "../services/font.service";
import BaseFrontFlowLayout from "../layout/BaseFrontFlowLayout.vue";
import { mapGetters, mapState } from "vuex";
import SkeletonLoader from "@/components/SkeletonLoader.vue";
import bundle from "../store/modules/bundle";
import NextPage from '@/mixins/nextPage.js'

export default {
  components: {
    BaseFrontFlowLayout,
    SkeletonLoader,
  },
  name: "Font",
  mixins: [NextPage],
  data() {
    return {
      choosedFont: null,
      bundles: [],
      fontFamilies: "",
      fontLinks: "",
      font_family: [],
      font_links: [],
      count: 0,
      backgroudColor: "",
      isLoading: false,
    };
  },
  computed: {
    ...mapState("frontflow", ["userProjectInfo"]),
  },
  methods: {
    async getBundle() {
      this.isLoading = true;
      try {
        const response = await FontService.getBundle({ page: this.page });
        const bundles = response.payload.fontBundle.data.map((bundle) => {
          return {
            ...bundle,
            isActive: false,
          };
        });
        this.bundles.push(...bundles);

        this.lastPage = response.payload.fontBundle.last_page;

        if (response.data) this.applyFonts(bundles);

        if (response.message) {
          this.$store.dispatch("toast/setResponseMessage", {
            type: "success",
            message: response.message,
          });
        }
      } catch (error) {
        if (error.message) {
          this.$store.dispatch("toast/setResponseMessage", {
            type: "error",
            message: error.message,
          });
        }
      } finally {
        this.isLoading = false;
      }
    },

    async loadMore() {
      this.increasePage()
      await this.getBundle();
      this.setBgFromLocalStorage();
    },

    setBgColor(bundle_id) {
      this.bundles = this.bundles.map((bundle) => {
        if (bundle.id == bundle_id) {
          return {
            ...bundle,
            isActive: true,
          };
        } else {
          return {
            ...bundle,
            isActive: false,
          };
        }
      });
    },

    async saveCurrentBundle(bundle) {
      const bundleObj = {};
      var font_id_1 = bundle.fonts[0].files;
      var font_id_2 = bundle.fonts[1].files;

      bundleObj["font_first"] = font_id_1;
      bundleObj["font_second"] = font_id_2;
      bundleObj["bundle_id"] = bundle.id;
      bundleObj["bundle_name"] = bundle.name;

      this.$store.commit("frontflow/SET_USER_PROJECT_INFO", {
        fonts_bundle: bundleObj,
      });
      localStorage.setItem(
        "userProjectInfo",
        JSON.stringify(this.userProjectInfo)
      );
      this.$router.push({ name: "chooseTemplate" });

      // this.$store.dispatch('bundle/currentBundle', bundleObj);
    },

    async applyFonts(bundles) {
      bundles.forEach((bundle) => {
        bundle.fonts.forEach((font) => {
          if (document.getElementById("cssId")) {
            var newStyle = document.createElement("style");

            newStyle.appendChild(
              document.createTextNode(
                "\
                                @font-face {\
                                    font-family: " +
                  font.family +
                  ";\
                                    src: url('" +
                  font.files +
                  "');\
                                }\
                            "
              )
            );

            document.head.appendChild(newStyle);
          }
        });
      });
    },
    setBgFromLocalStorage() {
      const response = localStorage.getItem("userProjectInfo");
      const userProjectInfo = JSON.parse(response);
      userProjectInfo &&
        this.setBgColor(userProjectInfo?.fonts_bundle?.bundle_id);
    },
  },
  async mounted() {
    await this.getBundle();
    this.setBgFromLocalStorage();
  },
};
</script>

<style scoped >
.activeBg {
  background: #b3cde0;
}
</style>

// <router-link
//               :to="{ name: 'templates' }"
//               class="m-btn mt-sm-1 mt-md-2 mt-lg-2"
//             >
//               Next
//               <span class="icon-box"><div class="triangle-icon"></div> </span>
//             </router-link>
