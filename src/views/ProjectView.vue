<script setup lang="ts">
import PagesBannerBlock from "@/components/molecules/PagesBannerBlock.vue";
import { useProjectStore } from '@/stores/ProjectsStore';
import ProjectBlock from "@/components/molecules/ProjectBlock.vue";
import PaginationBlock from '@/components/molecules/PaginationBlock.vue'
import { computed } from "vue";
const projectStore = useProjectStore()

const pages = [1,2,3]
const banner = {
  img: "/images/banners/projects.png",
  title: "Our Project",
  subtitle: "Home / Project"
}

let chosenTag: string = 'Kitchan';

const filterByTag = (tag: string) => {
  chosenTag = tag;
  console.log(chosenTag);
}

const filteredProjects = (chosenTag: string) => {
  return projectStore.projects.filter(project => project.tags.includes(chosenTag))
}
</script>

<template>
  <PagesBannerBlock
    :banner="banner"
  ></PagesBannerBlock>
  <div class="container">
    <div class="category__list center">
      <button class="category__item"
              v-for="tag in projectStore.tags"
              :key="tag"
              @click="filterByTag(tag)"
              :class="{active:tag===chosenTag}"
      >{{ tag }}</button>
    </div>
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

.center {
  margin: auto;
}
.category__list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  border: 1px solid #cda274;
  border-radius: 18px;
  max-width: max-content;
  margin-bottom: 60px;
}
.category__item {
  font-family: "Jost", sans-serif;
  padding: 26px 66px;
  background-color: #fff;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.25;
  letter-spacing: 0.02em;
  text-align: center;
  color: #292f36;
  border: none;
  border-radius: 18px;
  outline: none;
  cursor: pointer;
  &:hover {
    color: #fff;
    background: #cda274;
    opacity: 0.2;
  }
}
.active {
  color: #fff;
  background: #cda274;
}
</style>