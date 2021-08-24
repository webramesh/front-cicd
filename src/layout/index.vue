<template>
  <div class="wrapper">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
  <!-- <div id="app">
    <AppHeader></AppHeader>
    <AppFooter></AppFooter>
  </div> -->

</template>

<script>

export default {
  name: 'AppLayout',
  components: {
  },
  data () {
    return {
      editor_mode: false
    }
  }
}
</script>
