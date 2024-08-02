<script setup lang="ts">
import PagesBannerBlock from '@/components/molecules/PagesBannerBlock.vue'
import { useProjectStore } from '@/stores/ProjectsStore';
const projectStore = useProjectStore();

</script>

<template>
  <PagesBannerBlock
    :banner="projectStore.banners[5]"
  ></PagesBannerBlock>

</template>

<style scoped lang="scss">
@import '@/assets/styles/_vars.scss';

</style>