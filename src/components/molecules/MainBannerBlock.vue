<script setup lang="ts">

</script>

<template>
  <section class="hero-block">
    <div class="container">
      <div class="hero">
        <div class="hero__box">
          <h1 class="hero__title">Let Your Home Be Unique</h1>
          <p class="hero__text">There are many variations of the passages of lorem Ipsum fromavailable, majority.</p>
          <button class="hero__button">Get Started</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/styles/_vars.scss';
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.hero-block {
  max-height: 758px;
  margin-bottom: 96px;
}

.hero {
  background-image: url(@/assets/img/banners/main_banner.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 70px;
  fill: $fill-secondary;
  &__box {
    padding-top: 208px;
    padding-bottom: 208px;
    padding-left: 52px;
  }
  &__title {
    font-family: $font-secondary;
    font-size: 65px;
    color: $text-primary;
    margin-bottom: 18px;
    max-width: 500px;
    line-height: 1.25;
  }
  &__text {
    font-family: $font-primary;
    font-size: 22px;
    line-height: 1.5;
    font-weight: 400;
    letter-spacing: 0.01em;
    color: $text-secondary;
    max-width: 432px;
    margin-bottom: 21px;
  }
  &__button {
    border-radius: 18px;
    padding: 26px 48px;
    box-shadow: 0 10px 20px 0 rgba(192, 192, 192, 0.35);
    background: $text-primary;
    font-family: $font-primary;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.25;
    letter-spacing: 0.02em;
    text-align: center;
    color: #fff;
    display: flex;
    gap: 10px;
    align-items: center;
    width: max-content;
    transition-property: background-color, transform;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    &:hover {
      background-color: $fill-secondary;
      color: $text-primary;
    }
    &:active {
      transform: scale(0.9)
    }
    &::after {
      content: '';
      display: block;
      background-image: url('@/assets/img/icons/arrow.svg');
      stroke-width: 2px;
      stroke: $fill-primary;
      width: 18px;
      height: 17px;
    }
  }
}
</style>