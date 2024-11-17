<script setup>
import { ref, Transition } from 'vue';

const props = defineProps({
  routeName: { type: String, required: false, default: 'home' },
});

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
          <li class="burger__item">
            <router-link :to="{ name: 'home', hash: '#about' }">
              About me
            </router-link>
          </li>
          <li class="burger__item">
            <router-link :to="{ name: 'home', hash: '#capabilities' }">
              Capabilities
            </router-link>
          </li>
          <li class="burger__item">
            <router-link :to="{ name: 'home', hash: '#projects' }">
              Projects
            </router-link>
          </li>
          <li class="burger__item">
            <router-link :to="{ name: props.routeName, hash: '#contact' }">
              Contact
            </router-link>
          </li>
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
