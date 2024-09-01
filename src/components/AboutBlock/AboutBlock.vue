<script setup>
import ContactMeButton from '@/components/ContactMeButton/ContactMeButton.vue';
</script>

<template>
  <section class="about page__block grid">
    <div class="about__header grid__item_1-6">
      <h2 class="about__title">UI/UX Designer</h2>

      <div class="about__picture-wrapper">
        <!-- <img
          srcset="
            @/assets/static/cat-desktop.png 600w,
            @/assets/static/cat.png  300w
          "
          src="@/assets/static/cat.png"
          alt="white cartoon cat"
          class="about__picture"
        /> -->
        <picture>
          <source srcset="@/assets/static/cat-desktop.png" media="(min-width: 600px)" />
          <img src="@/assets/static/cat.png" alt="MDN" class="about__picture" />
        </picture>
      </div>
    </div>

    <div class="grid__item_7-12">
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
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import './AboutBlock.scss';
</style>
