<template>
  <section class="max-w-7xl mx-auto px-6 py-20" id="journal">
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
      <div class="max-w-xl">
        <h2 class="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight font-display">每日 <span class="text-gradient">喵语</span></h2>
        <p class="text-white/50">用一个专业睡眠者和兼职猎人的眼光看世界。</p>
      </div>
      <button class="text-brand-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
        查看完整相册 <div class="i-mdi-chevron-right"></div>
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="(log, index) in logs" :key="index" 
        class="group glass-card overflow-hidden flex flex-col cursor-pointer"
      >
        <div class="aspect-[4/5] relative overflow-hidden bg-white/5">
          <img :src="log.image" :alt="log.title" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
          <div class="absolute top-4 right-4 animate-float" :style="{ animationDelay: `${index * 500}ms` }">
            <div :class="log.icon" class="text-3xl text-white/50 drop-shadow-lg"></div>
          </div>
        </div>
        <div class="p-8">
          <div class="flex items-center gap-3 mb-4">
            <span v-for="tag in log.tags" :key="tag" class="cat-badge">
              {{ tag }}
            </span>
            <span class="ml-auto text-xs text-white/30 font-medium">{{ log.date }}</span>
          </div>
          <h3 class="text-2xl font-bold mb-3 group-hover:text-brand-primary transition-colors font-display">{{ log.title }}</h3>
          <p class="text-white/50 text-sm leading-relaxed">{{ log.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const logs = [
  {
    title: '阳光直射点事件',
    description: '在地毯上发现了一个完美的矩形阳光斑点。花了3个小时优化我的体位，以获得最大的温暖。',
    tags: ['日常生活', '午睡专家'],
    date: '今天',
    icon: 'i-mdi-weather-sunny',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: '狩猎 101：羽毛篇',
    description: '一个野生的羽毛玩具出现了。我表演了一个高速机动，接着是一个优雅的（大部分情况下）空翻。',
    tags: ['活力', '小战士'],
    date: '昨天',
    icon: 'i-mdi-sword',
    image: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: '午夜狂飙',
    description: '厨房地板为我的凌晨3点速度测试提供了极佳的牵引力。我相信我已经打破了音障。',
    tags: ['运动', '夜生活'],
    date: '12月22日',
    icon: 'i-mdi-flash',
    image: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&q=80&w=1000'
  }
]
</script>

<script lang="ts">
export default {
  name: 'ProjectGrid'
}
</script>
