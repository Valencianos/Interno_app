<script setup lang="ts">
defineProps({
  project: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <div class="card">
    <img
      class="card__img"
      :src="`/images/projects/${project.img}`"
      :alt="project.category"
      :class="{'radius-top-right' : index === 0, 'radius-top-left' : index === 1, 'radius-bottom-right' : index === 2, 'radius-bottom-left' : index === 3}"
    >
    <div class="card__content">
      <div class="card__text">
        <h3 class="card__title">{{ project.name }}</h3>
        <p class="card__subtitle">{{ project.category }}</p>
      </div>
      <button class="card__button">
        <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/_vars.scss';
.card {
  display: flex;
  flex-direction: column;
  &__img {
    width: 100%;
    flex-shrink: 0;
    background: #C4C4C4;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    margin-bottom: 24px;
  }
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
  &__title {
    font-family: $font-secondary;
    font-weight: 400;
    font-size: 25px;
    line-height: 1.25;
    letter-spacing: 0.02em;
    color: #292f36;
    margin: 0;
  }
  &__subtitle {
    font-family: $font-primary;
    font-weight: 400;
    font-size: 22px;
    line-height: 1.5;
    letter-spacing: 0.01em;
    color: $text-secondary;
    margin: 0;
  }
  &__button {
    background-color: $fill-secondary;
    border-radius: 100%;
    border-color: transparent;
    width: 70px;
    height: 70px;
    outline: none;
  }
}
.radius-top-right {
  border-radius: 0 80px 0 0;
}
.radius-top-left {
  border-radius: 80px 0 0 0;
}
.radius-bottom-right {
  border-radius: 0 0 80px 0;
}
.radius-bottom-left {
  border-radius: 0 0 0 80px;
}
</style>