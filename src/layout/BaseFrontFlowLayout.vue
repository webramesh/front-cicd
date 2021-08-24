<script>
import Header from "./Header";
import Footer from "./Footer";
import "../../public/css/style.css";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<template>
  <div>
    <Header></Header>
    <slot></slot>
    <Footer></Footer>
  </div>
</template>

<style>
body {
  overflow-y: auto !important;
}
.validation-message {
  color: red;
  font-size: 14px;
}
</style>