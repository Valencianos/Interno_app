<script setup lang="ts">
import PagesBannerBlock from '@/components/molecules/PagesBannerBlock.vue'
import { useProjectStore } from '@/stores/ProjectsStore';
import BlogBlock from '@/components/molecules/BlogBlock.vue'
import TagsBlock from '@/components/molecules/TagsBlock.vue'
const projectStore = useProjectStore();

</script>

<template>
  <PagesBannerBlock
    :banner="projectStore.banners[2]"
  ></PagesBannerBlock>
  <div class="container">
    <div class="divider">
      <BlogBlock
        :blog="projectStore.projects[0]"
      />
      <TagsBlock />
    </div>
  </div>



</template>

<style scoped lang="scss">
@import '@/assets/styles/_vars.scss';
  .divider {
    display: flex;
    gap: 57px;
    align-items: flex-start;
  }
</style>