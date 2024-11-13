<script setup>
const props = defineProps({
  projectBannerUrl: { type: String, required: false },
  title: { type: String, required: true },
  overview: { type: String, required: true },
});
</script>

<template>
  <section class="about-project page__project-block">
    <img
      v-if="props.projectBannerUrl"
      class="about-project__picture"
      :src="props.projectBannerUrl"
      :alt="props.title"
    />

    <h2 class="about-project__title">Project overview</h2>
    <p class="about-project__overview">{{ props.overview }}</p>
  </section>
</template>

<style lang="scss">
@import './AboutProject.scss';
</style>
