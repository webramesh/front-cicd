<script>
export default {
  name: "SkeletonLoader",
  props: ["singleLine", "cards", "longCard"],
};
</script>

<template>
  <div id="editor-loader">
    <div class="nav-group" v-if="singleLine">
      <div class="label shade"></div>
      <div class="group-container">
        <div class="link shade"></div>
        <div class="link shade"></div>
        <div class="link shade"></div>
      </div>
    </div>
    <div class="dashboard-container" v-if="cards">
      <div class="cards d-flex">
        <div class="card shade"></div>
        <div class="card shade"></div>
        <div class="card shade"></div>
      </div>
    </div>
    <div v-if="longCard">
      <div class="cards d-flex">
        <div class="card shade card-long"></div>
        <div class="card shade card-long"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.editorLoader {
  width: 105vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background: #ccc;
  z-index: 9999999999;
}

.loaderWrapper {
  height: 100vh;
  display: flex;
  position: fixed;
  top: 0;
  background: #fff;
  z-index: 999;
}

.loaderWrapper.hide {
  display: none;
}

.loaderWrapper .sidebar {
  height: 100%;
  width: 230px;
  background-color: #fff;
  padding: 30px 15px;
}
.loaderWrapper .sidebar .profile, .profile {
  display: flex;
}
.loaderWrapper .sidebar .profile .pic, .pic {
  width: 35px;
  height: 35px;
  background-color: #ccc;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
}
.loaderWrapper .sidebar .profile .name {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.loaderWrapper .sidebar .profile .name-1 {
  height: 12px;
  width: 100px;
  background-color: #ccc;
  border-radius: 3px;
}
.loaderWrapper .sidebar .profile .name-2 {
  width: 140px;
  height: 10px;
  background-color: #ccc;
  border-radius: 3px;
}
.loaderWrapper .sidebar .nav-group {
  margin: 60px 0px;
}
.loaderWrapper .sidebar .nav-group .label, .label {
  height: 12px;
  background-color: #ccc;
  border-radius: 3px;
  width: 65%;
}
.loaderWrapper .sidebar .nav-group .group-container {
  margin-top: 22px;
}
.loaderWrapper .sidebar .nav-group .group-container .link, .link {
  height: 10px;
  background-color: #ccc;
  border-radius: 3px;
  margin: 16px 0px;
}
.loaderWrapper .dashboard-container {
  padding: 30px;
  width: calc(100vw - 200px);
  max-width: calc(100vw - 200px);
  overflow: hidden;
}

.d-flex {
  display: flex;
}

.loaderWrapper .dashboard-container .cards {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.loaderWrapper .dashboard-container .cards [class*=card], .card {
  background-color: #ccc;
  border-radius: 4px;
}
.loaderWrapper .dashboard-container .cards .card, .card {
  height: 15vh;
  margin: 10px 5px 10px 0px;
  flex: 1 1 90px !important;
}
.loaderWrapper .dashboard-container .cards .card-xl {
  height: 80vh;
  width: 100%;
}
.loaderWrapper .dashboard-container .cards .card-m {
  margin-top: 10px;
  height: 20vh;
  width: 50%;
  width: calc(50% - 5px);
}
.loaderWrapper .dashboard-container .cards .card-m:first-child {
  margin-right: 5px;
}
.loaderWrapper .dashboard-container .cards .card-m:last-child {
  margin-left: 5px;
}

.shade {
  position: relative;
  overflow: hidden;
}
.shade:before {
  content: "";
  position: absolute;
  display: block;
  z-index: 5;
  height: 100%;
  width: 0;
  top: 6%;
  /* animation: shades 1600ms cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
  box-shadow: 0 2px 15px 9px rgba(255, 255, 255, 0.4); */
}

@keyframes shades {
  0% {
    left: 0%;
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    left: 100%;
    opacity: 0;
  }
}

.logoLoader {
  width: 110px;
  max-width: 110px;
  height: 40px;
  margin-top: 0;
}
.display-flex {
  display: flex;
}
.menuLoader {
  width: 100px;
  margin-left: 12px;
}
.menuLoaderWrapper {
  margin-left: auto;
  margin-top: 12px;
}

.shade:before {
  animation: shades 1600ms cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
  box-shadow: 0 2px 15px 9px rgba(255, 255, 255, 0.4);
}
.card.shade {
  height: 200px;
}
.nav-group {
  max-width: 260px;
}
.card.shade.card-long {
  height: 400px;
}
</style>