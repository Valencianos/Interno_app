<script setup lang="ts">
import { computed } from 'vue'
import { useProjectStore } from '@/stores/ProjectsStore'
const projectStore = useProjectStore()

defineProps({

})

const tags = ["Bathroom", "Bed Room", "Kitchan", "Living Area"];
const chosenTag = '';

const filterByTag = (tag) => {
      this.chosenTag = tag;
    }
const filteredItems = computed(() => projectStore.projects.tags.filter(item => item.tags.includes(this.chosenTag)));
console.log(filteredItems)
</script>

<template>
  <div class="category__list center">
    <button class="category__item"
            v-for="tag in tags"
            :key="tag.id"
            @click="filterByTag(tag)"
            :class="{active:tag===chosenTag}"
    >{{ tag }}</button>
  </div>
</template>

<style scoped lang="scss">
.center {
  margin: auto;
}
.category__list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  border: 1px solid #cda274;
  border-radius: 18px;
  max-width: max-content;
  margin-bottom: 60px;
}
.category__item {
  font-family: "Jost", sans-serif;
  padding: 26px 66px;
  background-color: #fff;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.25;
  letter-spacing: 0.02em;
  text-align: center;
  color: #292f36;
  border: none;
  border-radius: 18px;
  outline: none;
  cursor: pointer;
  &:hover {
    color: #fff;
    background: #cda274;
    opacity: 0.2;
  }
}
.active {
  color: #fff;
  background: #cda274;
}
</style>