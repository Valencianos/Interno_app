<script setup>
import { useProjectStore } from '@/stores/ProjectsStore'
import ProjectBlock from "@/components/molecules/ProjectBlock.vue";
const projectStore = useProjectStore()

</script>

<template>
  <section class="about">
    <div class="container">
      <div class="about__box">
        <h2 class="about__title">Follow Our Projects</h2>
        <p class="about__text">It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
      </div>
      <div class="about__content">
        <ProjectBlock
          v-for="(project, index) in projectStore.projects.slice(0,4)"
          :key="project.id"
          :project="project"
          :index="index"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/styles/_vars.scss';

.about {
  &__box {
    margin-bottom: 93px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-weight: 400;
    align-items: center;
    margin-left: calc(50% - 370px);
    margin-right: calc(50% - 370px);
  }
  &__title {
    font-family: "DM Serif Display", sans-serif;
    font-size: 50px;
    line-height: 1.25;
    letter-spacing: 0.02em;
    color: #292f36;
  }
  &__text {
    font-family: "Jost", sans-serif;
    font-size: 22px;
    line-height: 1.5;
    letter-spacing: 0.01em;
    color: #4d5053;
    text-align: center;
  }
  &__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 104px;
    grid-row-gap: 56px;
    margin-bottom: 96px;
  }
  &__card {
    display: flex;
    flex-direction: column;
  }
}
</style>