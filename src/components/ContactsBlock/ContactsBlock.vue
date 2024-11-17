<script setup></script>

<template>
  <section class="contacts" id="contact">
    <h2 class="contacts__title">
      Let's <br class="contacts__break" />
      connect
    </h2>

    <div class="contacts__content">
      <p class="contacts__text">
        Thank you for visiting my site! Feel free to reach out if you'd like to
        collaborate or <span style="white-space: nowrap">just say hi.</span>
        <span class="contacts__emoji">💌</span>
      </p>

      <div class="contacts__links">
        <a
          href="https://www.instagram.com/alice.prasol"
          target="_blank"
          rel="noopener noreferrer"
          class="contacts__link contacts__link--instagram"
          aria-label="instagram"
          title="Instagram"
        >
        </a>

        <a
          href="https://t.me/uiuxalisa"
          target="_blank"
          rel="noopener noreferrer"
          class="contacts__link contacts__link--tg"
          aria-label="telegram"
          title="Telegram"
        >
        </a>

        <a
          href="mailto:alisaprasola@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          class="contacts__link contacts__link--gmail"
          aria-label="email"
          title="alisaprasola@gmail.com"
        >
        </a>

        <a
          href="https://www.linkedin.com/in/alisa-prasol-b2567a272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="noopener noreferrer"
          class="contacts__link contacts__link--linkedin"
          aria-label="linkedin"
          title="LinkedIn"
        >
        </a>

        <a
          href="https://www.behance.net/Alisa_Prasol"
          target="_blank"
          rel="noopener noreferrer"
          class="contacts__link contacts__link--behance"
          aria-label="behance"
          title="Behance"
        >
        </a>
      </div>
    </div>

    <div class="contacts__dev">
      <div class="contacts__dev-name">
        <span>Developed by </span>
        <span style="white-space: nowrap">Anastasiia Bilska</span>
      </div>

      <a
        href="mailto:bilska.anastasiia@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        class="contacts__dev-link"
        aria-label="email of developer, Anastasiia Bilska"
        title="bilska.anastasiia@gmail.com"
      >
      </a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import './ContactsBlock.scss';
</style>
