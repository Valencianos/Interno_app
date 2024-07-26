<script setup lang="ts">

import PagesBannerBlock from '@/components/molecules/PagesBannerBlock.vue'
const banner = {
  img: "/images/banners/contact.png",
  title: "Contact Us",
  subtitle: "Home / Contact"
}
</script>

<template>
  <PagesBannerBlock
    :banner="banner"
  ></PagesBannerBlock>
</template>

<style scoped lang="scss">

</style>