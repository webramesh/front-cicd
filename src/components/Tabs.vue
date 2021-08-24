<script>
export default {
  name: "Tabs",
  data() {
    return {
      tabs: [],
    };
  },
  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name == selectedTab.name;
      });
    },
  },
};
</script>

<template>
  <div class="flex-grow-1">
    <div class="container">
      <div class="row d-flex justify-content-start main-container-row">
        <p v-for="(tab, i) in tabs" :key="i" class="flex-fill sites-p">
          <a
            :href="tab.href"
            @click="selectTab(tab)"
            class="main-container-row__a text-uppercase"
            :class="{ 'active': tab.isActive }"
          >{{ tab.name }}</a>
        </p>
        <form>
          <div class="form-group user-search-form">
            <span>
              <img src="/images/search.png" />
            </span>
            <input class="form-control" type="search" placeholder="Search" style />
          </div>
        </form>
      </div>
    </div>

    <div class="tab-content pl-3">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped src="@/layout/customer-dashboard-layout/styles.css"></style>