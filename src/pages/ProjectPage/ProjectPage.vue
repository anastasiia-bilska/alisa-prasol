<script setup>
import { onBeforeMount, reactive, computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { projectsInfo } from '../../projects';

import AppHeader from '@/components/AppHeader/AppHeader.vue';
import AboutProject from '@/components/AboutProject/AboutProject.vue';
import ProblemStatement from '@/components/ProblemStatement/ProblemStatement.vue';
import ProjectChallenges from '@/components/ProjectChallenges/ProjectChallenges.vue';
import DesignProcess from '@/components/DesignProcess/DesignProcess.vue';
import ContactsBlock from '@/components/ContactsBlock/ContactsBlock.vue';

const route = useRoute();
let projectData = reactive(null);
const isMobile = ref(true);

onBeforeMount(() => {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    isMobile.value = true;
  } else {
    isMobile.value = false;
  }

  projectData = projectsInfo[route.query.name];
});

const projectBannerUrl = computed(() => {
  return projectData && projectData.banner
    ? `/assets/static/${projectData.banner}${isMobile.value ? '' : '-desktop'}-banner.png`
    : '';
});
</script>

<template>
  <div class="page">
    <AppHeader />

    <main v-if="projectData">
      <h1 class="page__title page__title--project">{{ projectData.title }}</h1>

      <AboutProject
        :projectBannerUrl="projectBannerUrl"
        :overview="projectData.overview"
      />

      <ProblemStatement
        :problems="projectData.problemStatement"
        v-if="projectData.problemStatement"
      />

      <ProjectChallenges
        v-if="projectData.challenges"
        :challenges="projectData.challenges"
      />

      <DesignProcess
        v-if="projectData.designProcess"
        :designProcess="projectData.designProcess"
      />
    </main>

    <footer>
      <ContactsBlock />
    </footer>
  </div>
</template>
