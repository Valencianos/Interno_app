<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from '@/components/templates/HeaderComponent.vue'
import FooterComponent from '@/components/templates/FooterComponent.vue'

</script>

<template>
  <HeaderComponent />
  <RouterView />
  <FooterComponent />
</template>

<style>

</style>
