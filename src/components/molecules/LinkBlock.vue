<script setup lang="ts">
  const linkList = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Pages", link: "/about_us" },
    { id: 3, name: "Services", link: "/services" },
    { id: 4, name: "Project", link: "/project" },
    { id: 5, name: "Blog", link: "/blog" },
    { id: 6, name: "Contact", link: "/contact" },
  ]
</script>

<template>
  <div class="links-box">
    <a class="link" v-for="link in linkList" :key="link.id">
      <router-link :to="link.link">{{ link.name }}</router-link>
    </a>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/_vars.scss';
.links-box {
    display: flex;
    align-items: center;
    gap: 40px;
  }

a {
    font-family: $font-primary;
    font-size: 20px;
    text-align: center;
    font-weight: 400;
    color: $text-primary;
    text-decoration: none;
  }
</style>