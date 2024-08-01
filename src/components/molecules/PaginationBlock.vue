<script setup lang="ts">
import PaginationButton from '@/components/atoms/PaginationButton.vue'
import { defineProps } from 'vue';

const props = defineProps({
  pages: Array,
})
</script>

<template>
  <div class="pagination-box">
    <PaginationButton
      v-for="(page, index) in props.pages"
      :key="index"
      :pageNumber="page"
    />
    <div class="pagination-last">
      <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274"/>
        <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
</template>

<style scoped>
  .pagination-box {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-bottom: 200px;
  }
</style>