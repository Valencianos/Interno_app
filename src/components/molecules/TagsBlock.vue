<script setup lang="ts">


const tags = ['Kitchen', 'Bedroom', 'Building', 'Architecture', 'Kitchen Planning', 'Bedroom']
</script>

<template>
  <div class="tags">
    <h4 class="tags-title">Tags</h4>
    <div class="tags-buttons">
      <button class="tags-button" v-for="(tag, index) in tags" :key="index">
        {{ tag }}
      </button>
    </div>

  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/_vars.scss';
  .tags {
    max-width: 345px;
    &-title {
      color: $text-primary;
      font-family: $font-secondary;
      font-size: 25px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
      letter-spacing: 0.5px;
      margin-bottom: 24px;
    }
    &-buttons {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      column-gap: 11px;
    }
    &-button {
      padding: 9px 30px;
      color: $text-primary;
      text-align: center;
      font-family: $font-primary;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
      letter-spacing: 0.36px;
      border-radius: 10px;
      background: $fill-secondary;
      &:hover {
        background: $text-primary;
        color: #FFF;
      }
    }

  }
</style>