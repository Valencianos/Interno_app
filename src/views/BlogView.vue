<script setup lang="ts">
import PagesBannerBlock from '@/components/molecules/PagesBannerBlock.vue'
import LatestPostBlock from '@/components/molecules/LatestPostBlock.vue'
import { useProjectStore } from '@/stores/ProjectsStore';
const projectStore = useProjectStore();
import { useArticleStore} from '@/stores/ArticlesStore'
const articleStore = useArticleStore();

</script>

<template>
  <PagesBannerBlock
    :banner="projectStore.banners[1]"
  ></PagesBannerBlock>
  <LatestPostBlock
    :post="articleStore.post"
  ></LatestPostBlock>
</template>

<style scoped lang="scss">
@import '@/assets/styles/_vars.scss';

</style>