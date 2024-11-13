<script setup>
const props = defineProps({
  challenges: { type: Array, required: true },
});
</script>

<template>
  <section class="challenges page__project-block">
    <h2 class="challenges__title">Challenges:</h2>

    <ul class="challenges__list">
      <li v-for="(challenge, i) in challenges" :key="challenge" class="challenges__challenge">
        <span class="challenges__number">{{ `0${i + 1}` }}</span>
        <span class="challenges__description">{{ challenge }}</span>
      </li>
    </ul>
  </section>
</template>

<style lang="scss">
@import './ProjectChallenges.scss';
</style>
