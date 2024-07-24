<script setup lang="ts">
import ArticleBlock from '@/components/molecules/ArticleBlock.vue';
import { useArticleStore } from '@/stores/ArticlesStore'
const articleStore = useArticleStore()
</script>

<template>
  <section class="articles">
    <div class="container">
      <div class="articles__box">
        <h2 class="articles__title">Articles &amp; News</h2>
        <p class="articles__text">It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.
        </p>
      </div>
      <div class="articles__content">
        <ArticleBlock
          v-for="article in articleStore.articles.slice(0,3)"
          :key="article.id"
          :article="article"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/styles/_vars.scss';
.articles {
  margin-bottom: 200px;
  &__box {
    display: flex;
    flex-direction: column;
    gap: 12px;
    text-align: center;
    margin-left: calc(50% - 380px);
    margin-right: calc(50% - 380px);
  }
  &__title {
    font-family: $font-secondary;
    font-size: 50px;
    letter-spacing: 0.02em;
    color: $text-primary;
  }
  &__text {
    font-size: 22px;
    line-height: 1.5;
    letter-spacing: 0.01em;
    color: $text-secondary;
    margin-bottom: 52px;
  }
  &__content {
    display: flex;
    gap: 27px;
    justify-content: space-between;
  }
}
</style>