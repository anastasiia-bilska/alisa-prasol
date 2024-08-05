<script setup>
import BurgerMenu from '@/components/BurgerMenu/BurgerMenu.vue';
import ContactMeButton from '@/components/ContactMeButton/ContactMeButton.vue';

import { ref } from 'vue';

const isContactButtonVisible = ref(true);

const toggleBurger = () => {
  isContactButtonVisible.value = !isContactButtonVisible.value;
};
</script>

<template>
  <header class="header page__header">
    <BurgerMenu @update:isBurgerOpen="toggleBurger" />

    <div v-show="isContactButtonVisible">
      <ContactMeButton />
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import './AppHeader.scss';
</style>
