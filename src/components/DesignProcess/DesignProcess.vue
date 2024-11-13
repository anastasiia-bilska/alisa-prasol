<script setup>
const props = defineProps({
  designProcess: { type: Array, required: true },
});
</script>

<template>
  <section class="design-process page__project-block">
    <h2 class="design-process__title">Design process</h2>

    <ul class="design-process__list">
      <li v-for="process in props.designProcess" :key="process" class="design-process__item">{{ process }}</li>
    </ul>
  </section>
</template>

<style lang="scss">
@import './DesignProcess.scss';
</style>
