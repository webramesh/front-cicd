<script>
import { mapState } from "vuex";
export default {
  name: "FlashMessage",
  data() {
    return {};
  },
  computed: {
    ...mapState("toast", ["toastsList"]),
  },
};
</script>

<template>
  <div>
    <div
      v-for="toast in toastsList"
      :key="toast.id"
      class="alert"
      :class="`alert-${toast.type}`"
      role="alert"
    >
      <!-- Message Goes Here -->
      <span v-text="toast.message"></span>
    </div>
  </div>
</template>

<style>
.alert {
  padding: 1rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  position: fixed !important;
  min-width: 300px;
  z-index: 999;
}

.alert-error {
  color: #842029;
  background-color: #f8d7da;
  border-color: #f5c2c7;
  left: 2%;
  bottom: 0;
}

.alert-success {
  color: #0f5132;
  background-color: #d1e7dd;
  border-color: #badbcc;
  right: 0;
  top: 10%;
}

.alert-dismissible {
  padding-right: 3rem;
}

.alert-dismissible .btn-close {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
}

.btn-close {
  box-sizing: content-box;
  width: 1em;
  height: 1em;
  padding: 0.25em 0.25em;
  color: #000;
  border: 0;
  border-radius: 0.25rem;
  opacity: 0.5;
  background: transparent;
  font-size: 2rem;
}
</style>