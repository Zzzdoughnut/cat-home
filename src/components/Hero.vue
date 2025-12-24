<template>
  <section class="min-height-[100vh] flex flex-col justify-center items-center px-6 pt-32 pb-20">
    <div class="max-w-4xl text-center">
      <div
        class="inline-flex items-center gap-2 px-4 py-1.5 glass-card mb-8 text-xs font-bold tracking-widest uppercase text-brand-primary animate-fade-in">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
        </span>
        动态: 正在午睡
      </div>

      <h1 class="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-tight font-display">
        这就是 <span class="text-gradient">蒜蓉</span><br />
        和它的朋友们。
      </h1>

      <p class="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
        记录世界上最柔软的“开发者”的日常冒险、深度睡眠和偶尔的疯狂。欢迎来到我的猫咪圣地。
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <router-link to="/gallery"
          class="bg-white text-black px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white/90 transition-all hover:scale-105 no-underline">
          查看照片 <div class="i-mdi-camera"></div>
        </router-link>
        <router-link to="/daily-life"
          class="glass-card px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white/15 transition-all no-underline">
          日常日志
        </router-link>
      </div>
    </div>

    <!-- Floating Stats - Cat Version -->
    <div class="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-5xl">
      <div v-for="stat in stats" :key="stat.label" class="glass-card p-6 text-center group cursor-pointer">
        <div class="text-3xl font-bold mb-1 group-hover:text-brand-primary transition-colors">{{ stat.value }}</div>
        <div class="text-xs text-white/40 uppercase tracking-widest font-bold">{{ stat.label }}</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { label: '今日午睡次数', value: '14' },
  { label: '零食消耗', value: '7' },
  { label: '大声喵叫', value: '124' },
  { label: '疯狂跑酷', value: '3' }
]
</script>

<script lang="ts">
export default {
  name: 'Hero'
}
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}
</style>
