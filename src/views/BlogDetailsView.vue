<script setup lang="ts">
import PagesBannerBlock from '@/components/molecules/PagesBannerBlock.vue'
import { useProjectStore } from '@/stores/ProjectsStore';
import BlogBlock from '@/components/molecules/BlogBlock.vue'
const projectStore = useProjectStore();

</script>

<template>
  <PagesBannerBlock
    :banner="projectStore.banners[2]"
  ></PagesBannerBlock>
  <div class="divider">
    <BlogBlock
      :blog="projectStore.projects[0]"
    />
  </div>


</template>

<style scoped lang="scss">
@import '@/assets/styles/_vars.scss';

</style>