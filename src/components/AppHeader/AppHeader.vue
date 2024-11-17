<script setup>
import BurgerMenu from '@/components/BurgerMenu/BurgerMenu.vue';
import ContactMeButton from '@/components/ContactMeButton/ContactMeButton.vue';

import { ref } from 'vue';
import { useRoute } from 'vue-router';

const isContactButtonVisible = ref(true);
const route = useRoute();
console.log(route.name)

const toggleBurger = () => {
  isContactButtonVisible.value = !isContactButtonVisible.value;
};
</script>

<template>
  <header class="header page__header grid">
    <div class="header--mobile">
      <BurgerMenu @update:isBurgerOpen="toggleBurger" :routeName="route.name" />

      <div v-show="isContactButtonVisible">
        <ContactMeButton :routeName="route.name" />
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
          <li class="header__item">
            <router-link :to="{ name: 'home', hash: '#about' }">
              About me
            </router-link>
          </li>
          <li class="header__item">
            <router-link :to="{ name: 'home', hash: '#capabilities' }">
              Capabilities
            </router-link>
          </li>
          <li class="header__item">
            <router-link :to="{ name: 'home', hash: '#projects' }">
              Projects
            </router-link>
          </li>
          <li class="header__item">
            <router-link :to="{ name: route.name, hash: '#contact' }">
              Contact
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import './AppHeader.scss';
</style>
