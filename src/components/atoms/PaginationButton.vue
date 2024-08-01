<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    pageNumber: Number
  })
</script>

<template>
  <button class="page-button" type="button">
    <span class="page-number" v-if="props.pageNumber < 10">0{{ props.pageNumber }}</span>
    <span class="page-number" v-else>{{ props.pageNumber }}</span>
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
    font-family: $font-primary;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    text-transform: capitalize;
  }
</style>