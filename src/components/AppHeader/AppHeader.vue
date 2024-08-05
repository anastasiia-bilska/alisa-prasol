<script setup>
import BurgerMenu from '@/components/BurgerMenu/BurgerMenu.vue';
import { ref } from 'vue';

const isContactButtonVisible = ref(true);

const toggleBurger = () => {
  isContactButtonVisible.value = !isContactButtonVisible.value;
};
</script>

<template>
  <header class="header">
    <BurgerMenu @update:isBurgerOpen="toggleBurger" />

    <button class="header__contact" v-show="isContactButtonVisible">
      <span>Contact me ✨</span>
      <!-- <img src="@/assets/static/emojies/Sparkles.png" class="header__emoji" /> -->
    </button>
  </header>
</template>

<style lang="scss" scoped>
@import './AppHeader.scss';
</style>
