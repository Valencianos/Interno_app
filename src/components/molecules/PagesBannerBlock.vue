<script setup lang="ts">
defineProps({
  bannerImgUrl: String,
  bannerTitle: String,
  bannerSubtitle: String
})
</script>

<template>
  <section class="banner">
    <img class="banner__img" :src='bannerImgUrl' :alt="bannerTitle">
    <div class="banner__text" v-if="bannerTitle">
      <h2 class="banner__text_title">{{ bannerTitle }}</h2>
      <p class="banner__text_subtitle">{{ bannerSubtitle }}</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/styles/_vars.scss';
.banner {
  position: relative;
  margin-bottom: 200px;
  &__img {
    width: 100%;
    height: 356px;
  }
  &__text {
    position: absolute;
    bottom: 0;
    left: calc(50% - 250px);
    background: #fff;
    border-radius: 37px 37px 0 0;
    padding: 41px 78px;
    text-align: center;
    &_title {
      font-family: $font-secondary;
      font-weight: 400;
      font-size: 50px;
      color: $text-primary;
    }
    &_subtitle {
      font-family: $font-primary;
      font-weight: 400;
      font-size: 22px;
      line-height: 1.5;
      letter-spacing: 0.01em;
      color: $text-secondary;
    }
  }
}
</style>