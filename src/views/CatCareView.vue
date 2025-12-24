<template>
    <div class="pt-32 min-h-screen pb-20">
        <div class="max-w-7xl mx-auto px-6 mb-20 text-center">
            <h1 class="text-6xl font-black font-display mb-4">猫咪 <span class="text-gradient">养护</span></h1>
            <p class="text-white/50 text-xl">让蒜蓉保持健康快乐的小秘密</p>
        </div>

        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div v-for="tip in careTips" :key="tip.title" class="glass-card p-10 group overflow-hidden relative">
                <div
                    class="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
                    <div :class="tip.icon" class="text-9xl"></div>
                </div>
                <div class="relative z-10">
                    <div class="cat-badge mb-4 inline-block">{{ tip.category }}</div>
                    <h3 class="text-3xl font-bold font-display mb-4">{{ tip.title }}</h3>
                    <p class="text-white/60 leading-relaxed mb-6">{{ tip.content }}</p>
                    <ul class="space-y-3">
                        <li v-for="item in tip.items" :key="item" class="flex items-center gap-3 text-sm font-semibold">
                            <div class="i-mdi-check-circle text-brand-primary"></div>
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const careTips = [
    {
        category: '毛发管理',
        title: '英短蓝猫的梳毛守则',
        content: '英短虽然毛短，但掉毛量惊人。坚持每天梳毛不仅能减少家中飞毛，还能增进感情。',
        icon: 'i-mdi-brush',
        items: ['每日使用排梳梳理', '换季期增加频次', '配合化毛膏预防毛球']
    },
    {
        category: '饮食健康',
        title: '科学喂养与饮水',
        content: '保证高蛋白质摄入，控制体重。猫咪天生不爱喝水，需要全屋布置自动饮水机。',
        icon: 'i-mdi-water-pump',
        items: ['全家布置 3 个以上出水点', '干湿喂养结合', '定期清洗水碗']
    },
    {
        category: '清洁卫生',
        title: '猫砂盆的学问',
        content: '猫咪对气味非常敏感。保持环境清洁是防止猫咪产生压力的关键。',
        icon: 'i-mdi-delete-sweep',
        items: ['每日铲屎两次', '每周彻底清洗猫砂盆', '选择低扬尘猫砂']
    },
    {
        category: '精神娱乐',
        title: '垂直空间的利用',
        content: '猫咪喜欢高处。在家中建立“猫咪高速公路”能极大提升它们的幸福感。',
        icon: 'i-mdi-castle',
        items: ['安装壁挂式猫爬架', '保持窗台通路', '定期更换互动玩具']
    }
]
</script>

<script lang="ts">
export default {
    name: 'CatCareView'
}
</script>
