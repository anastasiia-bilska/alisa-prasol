<script setup>
import { onMounted } from 'vue';
import { RouterView, useRouter } from 'vue-router';

const router = useRouter();

onMounted(async () => {
  await router.isReady();
});
</script>

<template>
  <RouterView />
</template>
