<script setup>
import ContactMeButton from '@/components/ContactMeButton/ContactMeButton.vue';
</script>

<template>
  <section class="about">
    <div class="about__header">
      <h2 class="about__title">UI/UX Designer</h2>
      <img
        src="@/assets/static/cat.png"
        alt="white cartoon cat"
        class="about__picture"
      />
    </div>

    <p class="about__text">
      <span>Hey there! 👋🏻</span>
      <span>
        I'm Alice, your go-to girly girl and passionate UI/UX designer! 🌸✨ I
        live to make users' lives easier and their journeys more epic. I'm all
        about dropping those killer ideas that level up design decisions and
        constantly hunting for ways to boost my creativity and skills. Let's
        create something fabulous together! 💖
      </span>
    </p>

    <ContactMeButton />
  </section>
</template>

<style lang="scss" scoped>
@import './AboutBlock.scss';
</style>
