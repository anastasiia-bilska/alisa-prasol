<script setup>
import { ref, Transition, TransitionGroup } from 'vue';

const isBurgerOpen = ref(false);

const emits = defineEmits(['update:isBurgerOpen']);

const toggleMenu = () => {
  isBurgerOpen.value = !isBurgerOpen.value;
  emits('update:isBurgerOpen', isBurgerOpen.value);
};
</script>

<template>
  <nav
    class="burger"
    :class="{ 'burger--active': isBurgerOpen }"
    @click="toggleMenu"
  >
    <div :class="{ 'burger__button-wrapper': isBurgerOpen }">
      <button class="burger__button" aria-label="toggle burger menu">
        <span class="burger__icon"></span>
      </button>
    </div>

    <Transition name="slide-fade" mode="out-in" v-show="isBurgerOpen">
      <div>
        <ul class="burger__list">
          <li class="burger__item"><a href="#about">About me</a></li>
          <li class="burger__item"><a href="#capabilities">Capabilities</a></li>
          <li class="burger__item"><a href="#projects">Projects</a></li>
          <li class="burger__item"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </Transition>
  </nav>
</template>

<style lang="scss" scoped>
@import './BurgerMenu.scss';
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
