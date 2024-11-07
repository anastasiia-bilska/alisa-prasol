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
  <header class="header page__header grid">
    <div class="header--mobile">
      <BurgerMenu @update:isBurgerOpen="toggleBurger" />

      <div v-show="isContactButtonVisible">
        <ContactMeButton />
      </div>
    </div>

    <div class="header--desktop grid__item_4-9">
      <nav class="header__nav">
        <img
          src="@/assets/static/alisa-header.png"
          alt="Alisa Prasol, UX/UI designer"
          class="header__picture"
        />
        <ul class="header__list">
          <li class="header__item"><a href="#about">About me</a></li>
          <li class="header__item"><a href="#capabilities">Capabilities</a></li>
          <li class="header__item"><a href="#projects">Projects</a></li>
          <li class="header__item"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import './AppHeader.scss';
</style>
