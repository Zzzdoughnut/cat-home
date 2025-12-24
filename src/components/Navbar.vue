<template>
  <nav class="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
    <div class="glass-container px-8 py-3 flex items-center space-x-8">
      <router-link to="/" class="flex items-center gap-2 mr-4 no-underline group">
        <div class="i-mdi-cat text-2xl text-brand-primary group-hover:rotate-12 transition-transform"></div>
        <div class="text-xl font-bold text-gradient tracking-tight font-display">口苗口苗博客.</div>
      </router-link>
      <div class="hidden md:flex space-x-6">
        <router-link to="/daily-life" class="nav-link no-underline"
          active-class="text-brand-primary!">日常生活</router-link>
        <router-link to="/gallery" class="nav-link no-underline" active-class="text-brand-primary!">精选相册</router-link>
        <router-link to="/cat-care" class="nav-link no-underline" active-class="text-brand-primary!">猫咪养护</router-link>
        <router-link to="/treats" class="nav-link no-underline" active-class="text-brand-primary!">零食测评</router-link>
      </div>
      <button @click="showComingSoon('关注功能')"
        class="bg-brand-primary text-white px-5 py-2 rounded-2xl text-sm font-bold hover:shadow-lg hover:shadow-brand-primary/30 transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 border-none cursor-pointer">
        <div class="i-mdi-heart"></div> 关注我
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
const showComingSoon = (feature: string) => {
  alert(`✨ ${feature} 功能正在开发中，敬请期待！喵~`)
}
</script>

<script lang="ts">
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.router-link-active {
  color: var(--un-brand-primary) !important;
}
</style>
