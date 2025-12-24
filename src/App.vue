<script setup lang="ts">
import Background from './components/Background.vue'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="relative min-h-screen">
    <Background />
    <Navbar />

    <main>
      <router-view v-slot="{ Component }">
        <transition name="page-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>

      <!-- Footer -->
      <footer class="py-20 border-t border-white/5 mt-20">
        <div class="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <div class="i-mdi-cat text-6xl text-brand-primary/20 mb-10"></div>
          <h2 class="text-4xl md:text-6xl font-black text-center mb-10 tracking-tight font-display">
            不错过任何一次 <span class="text-gradient">喵呜。</span>
          </h2>
          <div class="flex flex-col sm:flex-row gap-4 mb-20 text-center">
            <p class="text-white/40 max-w-md mx-auto">
              感谢访问口苗口苗博客。我们将持续为您带来蒜蓉最真实的拆家（划掉）生活日常。
            </p>
          </div>
          <div class="flex gap-8 text-white/30 text-sm font-semibold uppercase tracking-widest">
            <a href="#" class="hover:text-brand-primary transition-colors">微博</a>
            <a href="#" class="hover:text-brand-primary transition-colors">Bilibili</a>
            <a href="#" class="hover:text-brand-primary transition-colors">小红书</a>
          </div>
          <p class="mt-10 text-white/20 text-xs text-center">© 2025 口苗口苗博客. 为最柔软的小爪子而建. 🐾<br>警告：过度滚动可能会导致自发性的养猫冲动。</p>
        </div>
      </footer>
    </main>
  </div>
</template>

<style>
.page-fade-enter-active,
.page-fade-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
  filter: blur(10px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
  filter: blur(10px);
}

html {
  scroll-behavior: smooth;
}
</style>
