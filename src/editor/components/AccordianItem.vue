
<script>
export default {
  name: "AccordianItem",
  props: ['name'],
  data() {
    return {
      index: null,
    };
  },
  computed: {
    visible() {
      return this.index == this.Accordion.active;
    },
    Accordion() {
      return this.$store.state.editor.Accordion;
    },
  },
  methods: {
    open() {
      if (this.visible) {
        // this.Accordion.active = null;
        this.$store.commit('editor/SET_ACCORDION_INDEX', null)
      } else {
        // this.Accordion.active = this.index;
        this.$store.commit('editor/SET_ACCORDION_INDEX', this.index)
      }
    },
    start(el) {
      el.style.height = el.scrollHeight + "px";
    },
    end(el) {
      el.style.height = "";
    },
  },
  created() {
    this.$store.commit('editor/UPDATE_ACCORDION_COUNT')
    this.$store.commit('editor/SET_ACCORDION_ITEM_WITH_INDEX', this.name)
    this.index = this.Accordion.count;
  },
};
</script>


<template>
  <div class="accordion__item">
    <div
      class="accordion__trigger"
      :class="{ accordion__trigger_active: visible }"
      @click="open"
    >
      <!-- This slot will handle the title/header of the accordion and is the part you click on -->
      <slot name="accordion-trigger"></slot>
    </div>

    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <div class="accordion__content" v-show="visible">
        <div class="accordion__wrapper">
          <!-- This slot will handle all the content that is passed to the accordion -->
          <slot name="accordion-content"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.accordion__item {
  cursor: pointer;
  clear: both;
}

.accordion__item::after {
  content: "";
  width: 84%;
  height: 1px;
  background-color: #a7b1b7;
  position: absolute;
  margin-left: 5%;
}

.accordion__trigger {
  display: flex;
  justify-content: space-between;
}

.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}

.accordion__content {
  background: #fff;
}

.accordion__trigger a {
  padding: 14px 6px !important;
}

</style>
