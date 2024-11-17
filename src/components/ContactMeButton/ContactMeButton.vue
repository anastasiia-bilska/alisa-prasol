<script setup>
const props = defineProps({
  routeName: { type: String, required: false, default: 'home' },
});
</script>

<template>
  <router-link
    :to="{ name: props.routeName, hash: '#contact' }"
    class="contact"
  >
    <span>Contact me ✨</span>
  </router-link>
</template>

<style lang="scss" scoped>
@import './ContactMeButton.scss';
</style>
