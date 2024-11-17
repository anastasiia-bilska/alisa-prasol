<script setup>
import { ref } from 'vue';

const capabilitiesList = ref([
  {
    title: 'Personalized Magic',
    description: 'I dive deep to understand your unique vibes and dreams.',
  },
  {
    title: 'Passion & Dedication',
    description: "I'm all in for delivering fabulous results and beyond.",
  },
  {
    title: 'Sparkling Solutions',
    description: "Fresh, innovative ideas that'll make your project sparkle.",
  },
  {
    title: 'Collaborative Energy',
    description: "Your input is gold, and I'll be with you every step the way.",
  },
]);
</script>

<template>
  <section class="capabilities page__block" id="capabilities">
    <h2 class="capabilities__title">Why work with me?</h2>

    <ul class="capabilities__list">
      <li v-for="item in capabilitiesList" class="capabilities__item">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
@import './CapabilitiesBlock.scss';
</style>
