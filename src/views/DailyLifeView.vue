<script setup lang="ts">
import ProjectGrid from '../components/ProjectGrid.vue'
</script>

<template>
    <div class="pt-32 min-h-screen">
        <div class="max-w-7xl mx-auto px-6 mb-16">
            <h1 class="text-6xl font-black font-display mb-4">日常生活</h1>
            <p class="text-white/50 text-xl">蒜蓉的铲屎官日常观察报告</p>
        </div>
        <ProjectGrid />

        <!-- Extra Content for Daily Life -->
        <section class="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
            <h2 class="text-3xl font-black font-display mb-12">作息时间表</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div v-for="time in schedule" :key="time.range"
                    class="glass-card p-8 flex items-center justify-between">
                    <div>
                        <div class="text-xs font-bold text-brand-primary uppercase tracking-widest mb-1">{{ time.range
                        }}</div>
                        <div class="text-xl font-bold">{{ time.activity }}</div>
                    </div>
                    <div :class="time.icon" class="text-4xl text-white/10"></div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
export default {
    name: 'DailyLifeView'
}

const schedule = [
    { range: '00:00 - 05:00', activity: '午夜跑酷 & 窗台巡逻', icon: 'i-mdi-weather-night' },
    { range: '05:00 - 07:00', activity: '踩脸唤醒服务', icon: 'i-mdi-alarm' },
    { range: '07:00 - 08:00', activity: '早餐时间', icon: 'i-mdi-food' },
    { range: '08:00 - 18:00', activity: '深度沉浸式睡眠', icon: 'i-mdi-sleep' },
    { range: '18:00 - 20:00', activity: '晚饭 & 讨要零食', icon: 'i-mdi-silverware-fork-knife' },
    { range: '20:00 - 00:00', activity: '梳毛 & 全屋探索', icon: 'i-mdi-cat' }
]
</script>
