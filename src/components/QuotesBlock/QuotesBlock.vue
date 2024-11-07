<script setup></script>

<template>
  <section class="quotes page__block grid">
    <div class="quotes__pictures grid__item_1-6">
      <img
        class="quotes__photo"
        src="@/assets/static/alisa-prasol.png"
        alt="Alisa Prasol UX/UI designer"
      />
      <img
        src="@/assets/static/little-hehe-cat.png"
        alt="White cartoon cat"
        class="quotes__picture"
      />
    </div>

    <div class="quotes__list grid__item_7-12">
      <div class="quotes__block">
        <div class="quotes__quote">Creativity is intelligence having fun.</div>
        <div class="quotes__author">- Albert Einstein</div>
      </div>

      <div class="quotes__block">
        <div class="quotes__quote">She believed she could, so she did.</div>
        <div class="quotes__author">- Girl Power</div>
      </div>

      <div class="quotes__block">
        <div class="quotes__quote">Design is thinking made visual.</div>
        <div class="quotes__author">-Saul Bass</div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import './QuotesBlock.scss';
</style>
