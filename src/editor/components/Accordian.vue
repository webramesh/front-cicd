
<script>
export default {
  name: 'Accordian',
};
</script>

<template>
  <li class="accordion">
    <slot></slot>
  </li>
</template>


<style>
.accordion {
  list-style: none;
  margin: 0;
  padding: 0;
}
.accordion__item:last-child {
  border-bottom: none;
}

</style>
