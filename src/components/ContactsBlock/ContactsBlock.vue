<script setup></script>

<template>
  <section class="contacts">
    <h2 class="contacts__title">
      Let’s <br />
      connect
    </h2>

    <p class="contacts__text">
      Thank you for visiting my site! Feel free to reach out if you'd like to
      collaborate or just say hi. 💌
    </p>

    <div class="contacts__links">
      <a
        href="https://www.instagram.com/alice.prasol"
        target="_blank"
        rel="noopener noreferrer"
        class="contacts__link contacts__link--instagram"
        aria-label="instagram"
      >
      </a>

      <a
        href="https://t.me/uiuxalisa"
        target="_blank"
        rel="noopener noreferrer"
        class="contacts__link contacts__link--tg"
        aria-label="telegram"
      >
      </a>

      <a
        href="mailto:alisaprasola@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        class="contacts__link contacts__link--gmail"
        aria-label="email"
      >
      </a>

      <a
        href="https://www.linkedin.com/in/alisa-prasol-b2567a272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        target="_blank"
        rel="noopener noreferrer"
        class="contacts__link contacts__link--linkedin"
        aria-label="linkedin"
      >
      </a>

      <a
        href="https://www.behance.net/Alisa_Prasol"
        target="_blank"
        rel="noopener noreferrer"
        class="contacts__link contacts__link--behance"
        aria-label="behance"
      >
      </a>
    </div>

    <div class="contacts__dev">
      <div class="contacts__dev-name">
        <span>Developed by</span>
        <span style="white-space: nowrap">Anastasiia Bilska</span>
      </div>

      <a
        href="mailto:bilska.anastasiia@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        class="contacts__dev-link"
        aria-label="email of developer, Anastasiia Bilska"
      >
      </a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import './ContactsBlock.scss';
</style>
