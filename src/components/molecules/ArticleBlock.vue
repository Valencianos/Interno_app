<script setup lang="ts">
import { defineProps, type PropType } from 'vue'


export interface Article {
  img: String,
  title: String,
  category: String,
  date: String
}

const props = defineProps({
  article: {
    type: Object as PropType<Article>,
    required: true,
  }
})
</script>
<template>
  <article class="articles__item item">
    <img :src="`/images/articles/${props.article.img}`" :alt="props.article.category" class="item__img">
    <p class="item__design">{{ props.article.category }}</p>
    <div class="item__text">
      <h3 class="item__text_title">{{ props.article.title }}</h3>
      <div class="item__text_subtitle">
        <p class="item__text_date">{{ props.article.date }}</p>
        <button href="#" class="item__text_link articles__item_button">
          <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.77142 14.9527L7.71428 8.267L1.77142 1.58128" stroke="#292F36" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
@import '@/assets/styles/_vars.scss';
.articles__item {
  border: 1px solid #e7e7e7;
  border-radius: 62px;
  padding: 21px;
  box-shadow: 0 10px 30px 0 rgba(255, 255, 255, 0.25);
  &_button {
    background-color: $fill-secondary;
    border-radius: 100%;
    border-color: transparent;
    width: 52px;
    height: 52px;
    outline: none;
  }
  &:hover {
    box-shadow: 0 10px 30px 0 rgba(255, 255, 255, 0.25);
    background: #f4f0ec;
    & button {
      background-color: #fff;
    }
  }
}

.item {
  position: relative;
  z-index: 1;
  &__img {
    margin-bottom: 21px;
  }
  &__design {
    position: absolute;
    left: 41px;
    top: 249px;
    z-index: 5;
    font-family: "Jost", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    color: #4d5053;
    background: #fff;
    border-radius: 8px 8px 8px 0;
    padding: 4px 10px;
  }
  &__text {
    margin-bottom: 16px;
    &_title {
      font-family: "DM Serif Display", sans-serif;
      font-weight: 400;
      font-size: 25px;
      line-height: 1.25;
      letter-spacing: 0.02em;
      color: #292f36;
      margin-bottom: 30px;
    }
    &_subtitle {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &_date {
      font-family: "Jost", sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 1.5;
      letter-spacing: 0.01em;
      text-transform: capitalize;
      color: #4d5053;
    }

  }
}
</style>