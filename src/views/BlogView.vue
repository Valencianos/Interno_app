<script setup lang="ts">
import PagesBannerBlock from '@/components/molecules/PagesBannerBlock.vue'
import LatestPostBlock from '@/components/molecules/LatestPostBlock.vue'
import { useProjectStore } from '@/stores/ProjectsStore';
const projectStore = useProjectStore();
import { useArticleStore} from '@/stores/ArticlesStore'
import ArticleBlock from '@/components/molecules/ArticleBlock.vue'
import PaginationBlock from '@/components/molecules/PaginationBlock.vue'
const articleStore = useArticleStore();

const pages = [1,2,3]
</script>

<template>
  <PagesBannerBlock
    :banner="projectStore.banners[1]"
  ></PagesBannerBlock>
  <div class="container">
    <LatestPostBlock
      :post="articleStore.post"
    ></LatestPostBlock>
    <div class="articles__content">
      <ArticleBlock
        v-for="article in articleStore.articles"
        :key="article.id"
        :article="article"
      />
    </div>
    <PaginationBlock :pages="pages" />
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/_vars.scss';
.articles__content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 27px;
  justify-content: space-between;
  margin-bottom: 50px;
}
</style>