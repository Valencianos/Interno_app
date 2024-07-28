<script setup lang="ts">

import PagesBannerBlock from '@/components/molecules/PagesBannerBlock.vue'
const banner = {
  img: "/images/banners/project_details.png",
}
</script>

<template>
  <PagesBannerBlock
    :banner="banner"
  ></PagesBannerBlock>
</template>

<style scoped lang="scss">
@import '@/assets/styles/_vars.scss';

</style>