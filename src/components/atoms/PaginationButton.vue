<script setup lang="ts">
  defineProps({
    pageNumber: {
      type: Number,
      required: true
      }
  })
</script>

<template>
  <button class="page-button" type="button">
    <span class="page-number" v-if="pageNumber < 10">0{{ pageNumber }}</span>
    <span class="page-number" v-else>{{ pageNumber }}</span>
  </button>
</template>

<style scoped lang="scss">
@import '@/assets/styles/_vars.scss';
  .page-button {
    border-radius: 50%;
    border: 1px solid $fill-primary;
    background-color: transparent;
    width: 52px;
    height: 52px;
    flex-shrink: 0;
    text-align: center;
  }
  .page-number {
    color: $text-primary;
    font-family: "Jost", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
    text-transform: capitalize;
  }
</style>