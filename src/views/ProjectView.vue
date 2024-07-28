<script setup lang="ts">
import PagesBannerBlock from '@/components/molecules/PagesBannerBlock.vue';
import { useProjectStore } from '@/stores/ProjectsStore';
import ProjectBlock from "@/components/molecules/ProjectBlock.vue";
import ProjectFilterBlock from '@/components/molecules/ProjectFilterBlock.vue';
import PaginationBlock from '@/components/molecules/PaginationBlock.vue'
const projectStore = useProjectStore()

const pages = [1,2,3]
const banner = {
  img: "/images/banners/projects.png",
  title: "Our Project",
  subtitle: "Home / Project"
}
</script>

<template>
  <PagesBannerBlock
    :banner="banner"
  ></PagesBannerBlock>
  <div class="container">
    <ProjectFilterBlock />
    <button @click="filteredItems(buttonTag)" v-for="buttonTag in buttonsTag" :key="buttonTag">{{ buttonTag }}</button>
    <div class="about__content">
      <ProjectBlock
        v-for="project in projectStore.projects.slice(4,12)"
        :key="project.id"
        :project="project"/>
    </div>
  </div>

  <PaginationBlock :pages="pages" />
</template>

<style scoped lang="scss">
@import '@/assets/styles/_vars.scss';
.about__content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 35px;
}
</style>