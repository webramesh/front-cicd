<template>
  <!-- feature details -->
  <BaseFrontFlowLayout>
    <FlashMessage />
    <section class="p-sm-2 p-lg-4">
      <div class="m-container">
        <div class="m-row">
          <div class="m-col-12 m-col-md-4">
            <div class="title-box">
              <h2>Select your Business (Category & Sub Category)</h2>
            </div>
            <p class="mt-sm-3 mt-lg-2">
              Select any of the below process to create your website Lorem Ipsum
              is simply dummy text of the printing and typesetting industry
              dummy text of the.
            </p>
          </div>
          <div class="m-col-md-1">
            <!--  offset column  -->
          </div>
          <div class="m-col-12 m-col-md-7">
            <form class="form" @submit.prevent="" v-if="categories.length">
              <div class="search-icon">
                <img src="image/search.svg" alt="" srcset="" />
              </div>
              <input
                type="text"
                name="search"
                v-model="searchQuery"
                placeholder="Search category"
                autocomplete="off"
              />
            </form>
            <div class="category-wrap mt-sm-2 mt-md-2 mt-lg-2">
              <div class="category-list">
                <div class="faq">
                  <!-- jquery-accordion-active -->
                  <SkeletonLoader :singleLine="true" v-if="isLoading" />
                  <Accordian v-else>
                    <div
                      class="faqitem"
                      v-for="(category) in resultQuery"
                      :key="category.id"
                    >
                      <AccordianItem :name="`category-${category.name}`">
                        <template slot="accordion-trigger">
                          <div class="header">
                            <h4>{{ category.name }}</h4>
                            <i class="fa fa-chevron-right"></i>
                          </div>
                        </template>
                        <template slot="accordion-content">
                          <div class="content d-block">
                            <ul>
                              <li
                                @click="
                                  setSubCategoryToUserInfo(
                                    category.id,
                                    subcat.id,
                                    subcat.slug
                                  )
                                "
                                v-for="(
                                  subcat
                                ) in category.child"
                                :key="subcat.id"
                              >
                                <router-link
                                  :to="{ name: 'business_form' }"
                                  exact
                                  v-on:click.native="setSubcategory(subcat)"
                                  >{{ subcat.name }}</router-link
                                >
                              </li>
                            </ul>
                          </div>
                        </template>
                      </AccordianItem>
                    </div>
                  </Accordian>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </BaseFrontFlowLayout>
  <!-- footer -->
</template>
<script>
import { mapGetters, mapState } from "vuex";
import { CategoryService } from "../services/category.service";
import Accordian from "../editor/components/Accordian.vue";
import AccordianItem from "../editor/components/AccordianItem.vue";
import SkeletonLoader from '@/components/SkeletonLoader.vue'

export default {
  name: "Category",
  components: {
    Accordian,
    AccordianItem,
    SkeletonLoader
  },
  data() {
    return {
      error: "",
      allCategories: [],
      searchQuery: "",
      isLoading: false
    };
  },

  computed: {
    ...mapGetters({ categories: "category/categories" }),
    ...mapState("frontflow", ["userProjectInfo"]),
    ...mapState("editor", ["Accordion"]),
    resultQuery() {
      if (this.searchQuery) {
        const searchQuery = this.searchQuery.toLowerCase();
        const queryResults =
          this.categories &&
          this.categories.filter((category) => {
            let subCategoryResults =
              category.child &&
              category.child.filter((subcategory) => {
                return subcategory.name.toLowerCase().includes(searchQuery);
              });
            subCategoryResults = subCategoryResults.find(
              (res) => res.parent_id == category.id
            );
            //  TODO open accordion
            return (
              subCategoryResults ??
              category.name.toLowerCase().includes(searchQuery)
            );
          });

        return queryResults;
      } else {
        return this.categories;
      }
    },
  },

  methods: {
    async getCategory() {
      this.isLoading = true
      try {
        await this.$store.dispatch("category/getCategories");
        this.error = "";
      } catch (error) {
        if(error.message) {
          this.$store.dispatch('toast/setResponseMessage', { type: 'error', message: error.message })
        }
      } finally {
        this.isLoading = false
      }
    },

    filterCategory() {
      if (this.search != "" && this.search) {
        this.categories = this.categories.filter((item) => {
          return this.search
            .toLowerCase()
            .split(" ")
            .every((v) => item.name.toLowerCase().includes(v));
        });
      }
      return this.categories;
    },

    setSubcategory(val) {
      this.$store.dispatch("category/setSubcategory", val);
    },
    setSubCategoryToUserInfo(categoryId, subCategoryId, slug) {
      this.$store.commit("frontflow/SET_USER_PROJECT_INFO", {
        selected_category: categoryId,
        selected_sub_category: subCategoryId,
        selected_sub_category_slug: slug,
      });
      localStorage.setItem(
        "userProjectInfo",
        JSON.stringify(this.userProjectInfo)
      );
    },
  },
  mounted() {
    this.getCategory();
  },

  created() {
  },
  updated() {
    this.$store.dispatch(
      "editor/SET_ACCORDION_INDEX",
      this.Accordion.activeName[Object.keys(this.Accordion.activeName)[0]]
    );
  },
};
</script>

<style>
.accordion__item::after {
  height: 0 !important;
}

.accordion__content {
  margin-top: 0 !important;
}

.accordion__trigger.accordion__trigger_active h4 + i::before {
  content: "\f078" !important;
}
</style>

//  <div class="m-row">
//                 <div class="m-col-12">
//                     <div class="m-row">
//                         <div class="m-col-12 m-col-md-6 m-col-lg-6">
//                             <div class="pointer-btn back ">
//                               <router-link :to="{ name: 'login'}">
//                                   <div class="pointer">
//                                           <img src="image/arrow.svg" alt="" srcset="">
//                                   </div>
//                               </router-link>
//                             </div>
//                         </div>
//                         <div class="m-col-12 m-col-md-6 m-col-lg-6 text-sm-left text-lg-right">
//                           <router-link :to="{ name: 'business_form'}" class="m-btn mt-sm-1 mt-md-2 mt-lg-2 ">
//                               Next <span class="icon-box"><div class="triangle-icon"></div> </span>
//                           </router-link>
//                         </div>

//                     </div>
//                 </div>
//             </div>