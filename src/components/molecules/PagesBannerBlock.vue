<script setup lang="ts">
defineProps({
  banner: {
    type: Object,
    required: true
  }
})

const backgroundStyles = (img: String) => {
  return {
    'background-image': `url(${img})`,
    'background-size': 'cover',
    'background-repeat': 'no-repeat',
    'background-position': 'center',
  }
}
</script>

<template>
  <section class="banner">
    <div class="banner__img" :style="backgroundStyles(banner.img)">
      <div class="banner__text" v-if="banner.title">
        <h2 class="banner__text_title">{{ banner.title }}</h2>
        <p class="banner__text_subtitle">{{ banner.subtitle }}</p>
      </div>
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
    right: calc(50% - 250px);
    background: #fff;
    border-radius: 37px 37px 0 0;
    padding: 41px 68px;
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