<script setup lang="ts">
import { RouterView } from 'vue-router'
// import PaginationBlock from '@/components/molecules/PaginationBlock.vue'
import HeaderComponent from '@/components/templates/HeaderComponent.vue'

// const pages = [1, 2, 3]
</script>

<template>
  <HeaderComponent />
<!--  <PaginationBlock-->
<!--    :pages="pages"-->
<!--  />-->
  <RouterView />
</template>

<style>

</style>
