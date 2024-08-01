<script setup>
import PagesBannerBlock from "@/components/molecules/PagesBannerBlock.vue";
import { useProjectStore } from '@/stores/ProjectsStore';
import ProjectBlock from "@/components/molecules/ProjectBlock.vue";
import PaginationBlock from '@/components/molecules/PaginationBlock.vue'
import { ref, computed } from "vue";
const projectStore = useProjectStore()

const pages = [1,2,3]

const chosenTag = ref('');

function filterByTag(tag) {
  chosenTag.value = tag;
}

const filteredProjects = computed(() => {
    return projectStore.projects.filter(project => project.tags === chosenTag.value)
})

</script>

<template>
  <PagesBannerBlock
    :banner="projectStore.banners[4]"
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
        v-for="project in filteredProjects"
        :key="project.id"
        :project="project"/>
    </div>
    <PaginationBlock :pages="pages" />
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/_vars.scss';
.about__content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 35px;
  margin-bottom: 60px;
}

.center {
  margin: auto;
}

.category__list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  border: 1px solid $fill-primary;
  border-radius: 18px;
  max-width: max-content;
  margin-bottom: 60px;
}
.category__item {
  font-family: $font-primary;
  padding: 26px 66px;
  background-color: #fff;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.25;
  letter-spacing: 0.02em;
  text-align: center;
  color: $text-primary;
  border: none;
  border-radius: 18px;
  outline: none;
  cursor: pointer;
}
.active {
  color: #fff;
  background: $fill-primary;
}
</style>