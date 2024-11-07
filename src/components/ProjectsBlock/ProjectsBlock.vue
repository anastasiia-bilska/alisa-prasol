<script setup>
import { onMounted } from 'vue';

const changeBlockHeight = () => {
  const blockEl = document.querySelector('.projects__item--transfer') || null;
  const blockElHeight = blockEl?.offsetHeight;

  const blocks = document.querySelectorAll('.projects__item');

  for (const block of blocks) {
    block.style.height = `${blockElHeight}px`;
  }
};

onMounted(() => {
  const img = document.querySelector('.projects__item-picture--transfer');
  if (img.complete) {
    changeBlockHeight();
  } else {
    img.addEventListener('load', () => {
      changeBlockHeight();
    });
  }
});
</script>

<template>
  <section class="projects page__block">
    <h2 class="projects__title">Projects</h2>

    <ul class="projects__list">
      <li class="projects__item projects__item--transfer">
        <div class="projects__item-header">
          <h3 class="projects__item-title projects__item-title--transfer">
            Web & File transfer service
          </h3>

          <div class="projects__item-tag projects__item-tag--transfer">
            saas
          </div>
        </div>

        <img
          class="projects__item-picture projects__item-picture--transfer"
          src="@/assets/static/web-&-file-transfer-service.png"
          alt="Web & File transfer service desktop preview"
        />
      </li>

      <li class="projects__item projects__item--course">
        <div class="projects__item-header projects__item-header--course">
          <h3 class="projects__item-title projects__item-title--course">
            Course Platform
          </h3>

          <div class="projects__item-tag projects__item-tag--course">LMS</div>
        </div>

        <img
          class="projects__item-picture"
          src="@/assets/static/course-platform.png"
          alt="Course Platform desktop preview"
        />
      </li>

      <li class="projects__item projects__item--job">
        <div class="projects__item-header">
          <h3 class="projects__item-title projects__item-title--job">
            Job Platform
          </h3>

          <div class="projects__item-tag projects__item-tag--job">
            Job Platform
          </div>
        </div>

        <img
          class="projects__item-picture"
          src="@/assets/static/job-platform.png"
          alt="Job Platform desktop preview"
        />
      </li>

      <li class="projects__item projects__item--video">
        <div class="projects__item-header projects__item-header--video">
          <h3 class="projects__item-title projects__item-title--video">
            Video stre<span class="projects__item-accent">am</span>ing platform
          </h3>

          <div class="projects__item-tag projects__item-tag--video">App</div>
        </div>

        <img
          class="projects__item-picture projects__item-picture--video"
          src="@/assets/static/video-streaming.png"
          alt="Video streaming platform mobile preview"
        />
      </li>

      <li class="projects__item projects__item--nda">
        <div class="projects__item-tag projects__item-tag--nda">
          <span class="projects__nda-text">NDA</span>
          <span class="projects__nda-icon"></span>
        </div>

        <div class="projects__nda-wrapper">
          <h3 class="projects__item-title projects__item-title--nda">
            E-Commerce
          </h3>
        </div>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
@import './ProjectsBlock.scss';
</style>
