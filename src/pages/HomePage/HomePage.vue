<script setup>
import AppHeader from '@/components/AppHeader/AppHeader.vue';
import AboutBlock from '@/components/AboutBlock/AboutBlock.vue';
import CapabilitiesBlock from '@/components/CapabilitiesBlock/CapabilitiesBlock.vue';
import ProjectsBlock from '@/components/ProjectsBlock/ProjectsBlock.vue';
import QuotesBlock from '@/components/QuotesBlock/QuotesBlock.vue';
import ContactsBlock from '@/components/ContactsBlock/ContactsBlock.vue';
</script>

<template>
  <div class="page">
    <AppHeader />

    <main>
      <div class="page__home-first-screen" id="about">
        <h1 class="page__title">Alisa Prasol</h1>
        <AboutBlock />
      </div>
      <CapabilitiesBlock />
      <ProjectsBlock />
      <QuotesBlock />
    </main>

    <footer>
      <ContactsBlock />
    </footer>
  </div>
</template>
