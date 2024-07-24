<script setup>
import LogoLink from '@/components/atoms/LogoLink.vue'
import LinkBlock from '@/components/molecules/LinkBlock.vue'
</script>

<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <LogoLink />
        <LinkBlock />
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  margin-top: 44px;
  margin-bottom: 45px;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>