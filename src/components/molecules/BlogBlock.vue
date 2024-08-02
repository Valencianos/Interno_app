<script setup lang="ts">

defineProps({
  blog: Object,
  required: true
})
</script>

<template>
  <div class="blog">
    <h2 class="blog-title">{{ blog.title }}</h2>
    <img class="blog-img up" :src="`/images/projects/${blog.img}`" :alt="blog.title">
    <div class="blog-breadcrumbs">
      <p>{{ blog.date }}</p>
      <p>{{ blog.tags }}</p>
    </div>
    <p class="blog-text">{{ blog.text }}</p>
    <div class="blog-quote">
      <img src="/images/icons/ticks.svg" alt="ticks">
      <blockquote>{{ blog.quote }}</blockquote>
    </div>
    <h3>{{ blog.article }}</h3>
    <p>{{ blog.content }}</p>
    <ul class="blog-list">
      <li class="blog-item"
        v-for="(bullet, index) in bullets"
        :key="index">
        {{ bullet }}
      </li>
    </ul>
    <img src="#" alt="" class="blog-img down">
    <p>{{ blog.content}}</p>
  </div>
</template>

<style scoped lang="scss">

</style>