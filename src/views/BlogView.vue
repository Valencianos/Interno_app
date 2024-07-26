<script setup lang="ts">

import PagesBannerBlock from '@/components/molecules/PagesBannerBlock.vue'
const banner = {
  img: "/images/banners/articles_news.png",
  title: "Articles & News",
  subtitle: "Home / Blog"
}
</script>

<template>
  <PagesBannerBlock
    :banner="banner"
  ></PagesBannerBlock>
</template>

<style scoped lang="scss">

</style>