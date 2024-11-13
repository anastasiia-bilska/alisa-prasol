<script setup>
const props = defineProps({
  problems: { type: Array, required: true },
});
</script>

<template>
  <section class="problem-statement page__project-block">
    <span class="problem-statement__icon"></span>
    <h2 class="problem-statement__title">Problem statement</h2>

    <article class="problem-statement__block" v-for="problem in problems" :key="problem.description">
      <h3 class="problem-statement__subtitle" v-if="problem.subtitle">{{ problem.subtitle }}</h3>
      <p class="problem-statement__description">{{ problem.description }}</p>
    </article>
  </section>
</template>

<style lang="scss">
@import './ProblemStatement.scss';
</style>
