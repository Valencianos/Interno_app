<script setup lang="ts">
import { defineProps, type PropType } from 'vue';

export interface Blog {
  title: string
  date: string
  tags: string
  text: string
  quote: string
  article: string
  content: string
  img: string
  bullets: Array<T>
}

defineProps({
  blog: {
    type: Object as PropType<Blog>,
    required: true,
  }
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
    <h3 class="blog-title">{{ blog.article }}</h3>
    <p class="blog-text">{{ blog.content }}</p>
    <ul class="blog-list blog-text">
      <li class="blog-item"
        v-for="(bullet, index) in blog.bullets"
        :key="index">
        {{ bullet }}
      </li>
    </ul>
    <img src="#" alt="" class="blog-img down">
    <p>{{ blog.content}}</p>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/_vars.scss';
  .blog {
    max-width: 800px;
    display: flex;
    flex-direction: column;
    &-title {
      color: $text-primary;
      font-family: $font-secondary;
      font-size: 50px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
      letter-spacing: 1px;
      margin-bottom: 11px;
    }
    &-img {
      border-radius: 50px;
      background: #C4C4C4;
      max-height: 540px;
      margin-bottom: 46px;
    }
    &-breadcrumbs {
      display: flex;
      justify-content: space-between;
      color: $text-secondary;
      font-family: $font-primary;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 0.16px;
      text-transform: capitalize;
      margin-bottom: 48px;
    }
    &-text {
      color: $text-secondary;
      font-family: $font-primary;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 0.22px;
      margin-bottom: 35px;
    }
    &-quote {
      padding: 53px 217px;
      border-radius: 50px;
      background: $fill-secondary;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: $fill-primary;
      text-align: center;
      font-family: $font-secondary;
      font-size: 25px;
      font-style: italic;
      font-weight: 400;
      line-height: 125%;
      letter-spacing: 0.5px;
      margin-bottom: 27px;
    }
  }
</style>