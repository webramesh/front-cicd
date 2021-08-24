<script>
export default {
  name: "BaseTemplate",
  props: ['selectedIndex'],
  data(){
    return {
      allTemplates: [
        "Selected Template",
        "Alcoholic Beverages",
        "Bakery",
        "Bar",
        "Bottled Water Company",
        "Cafe",
        "Cafeteria",
        "Candy/Chocolate Store",
        "Coffee Shop",
        "Food Delivery Service",
        "Food Stand",
        "Food Truck",
        "Ice Cream Shop",
        "Personal Chef",
        "Restaurant",
        "Smoothie & Juice Bar",
        "Wine, Beer & Spirits Store",
      ],
    }
  },
  mounted() {
  },
  updated(){
  },
  methods: {
    showPreviewModal(index) {
      this.$emit("show-preview-modal", index);
    },
  },
};
</script>

<template>
  <ul id="allTemplate">
    <li @click="showPreviewModal(index)" v-for="(template, index) in allTemplates" :key="index">
      <span type="button" class="btn btn-link btn-arrow-right" :class="{'active': selectedIndex === index}">
        <a href="#" type="button">{{ template }}</a>
      </span>
    </li>
  </ul>
</template>

<style scoped>
#allTemplate span {
  width: 90%;
}

.btn-link.active {
  color: #035b96 !important;
  background-color: #f4f7f6;
  border-color: #b3cde0;
  text-align: left;
  border: 1px solid #035b96 !important;
}

.btn-arrow-right:before,
.btn-arrow-right:after {
  transform: rotate(39deg);
  -webkit-transform: rotate(39deg);
  -moz-transform: rotate(39deg);
  -o-transform: rotate(39deg);
  -ms-transform: rotate(39deg);
}
</style>