<template>
    <div class="pt-32 min-h-screen pb-20">
        <div class="max-w-7xl mx-auto px-6 mb-20">
            <h1 class="text-6xl font-black font-display mb-4 text-center">零食 <span class="text-gradient">测评</span></h1>
            <p class="text-white/50 text-xl text-center">蒜蓉亲自鉴定的美味红黑榜</p>
        </div>

        <div class="max-w-7xl mx-auto px-6 space-y-8">
            <div v-for="review in reviews" :key="review.name"
                class="glass-card p-8 flex flex-col md:flex-row gap-8 items-center">
                <div class="w-full md:w-64 aspect-square rounded-2xl overflow-hidden bg-white/5">
                    <img :src="review.image" :alt="review.name" class="w-full h-full object-cover opacity-80" />
                </div>
                <div class="flex-1">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-3xl font-bold font-display">{{ review.name }}</h3>
                        <div class="flex gap-1">
                            <div v-for="i in 5" :key="i" class="i-mdi-star text-xl"
                                :class="i <= review.rating ? 'text-brand-accent' : 'text-white/10'"></div>
                        </div>
                    </div>
                    <div class="flex gap-2 mb-6">
                        <span v-for="tag in review.tags" :key="tag" class="cat-badge">{{ tag }}</span>
                    </div>
                    <div
                        class="bg-brand-dark/50 p-6 rounded-2xl border border-white/5 italic text-white/70 leading-relaxed mb-6">
                        "{{ review.comment }}"
                    </div>
                    <div class="grid grid-cols-3 gap-4">
                        <div v-for="stat in review.stats" :key="stat.label" class="text-center">
                            <div class="text-xs text-white/30 uppercase font-bold tracking-widest mb-1">{{ stat.label }}
                            </div>
                            <div class="font-bold text-brand-primary">{{ stat.value }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const reviews = [
    {
        name: '低温烘干三文鱼块',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1548546738-8509cb246ed3?auto=format&fit=crop&q=80&w=600',
        tags: ['高蛋白', '纯天然', '必囤款'],
        comment: '只要袋子一响，不管是凌晨还是午后，蒜蓉都能瞬移到你面前。适口性极佳，猫咪完全没有抵抗力。',
        stats: [{ label: '开袋即到', value: '0.2s' }, { label: '回购指数', value: '100%' }, { label: '美毛效果', value: '☆☆☆☆' }]
    },
    {
        name: '鸡肉冻干碎',
        rating: 4,
        image: 'https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?auto=format&fit=crop&q=80&w=600',
        tags: ['复水快', '易消化'],
        comment: '拌粮神器。如果今天猫粮没吃完，撒上一层冻干碎，瞬间光盘。唯一的缺点是有点费钱包。',
        stats: [{ label: '复水速度', value: '1min' }, { label: '香脆度', value: '95' }, { label: '饱腹感', value: '高' }]
    },
    {
        name: '免煮猫草种子套盒',
        rating: 3,
        image: 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=600',
        tags: ['清胃', '纤维素'],
        comment: '蒜蓉偶尔会啃两口，但更多时候是把它当成了“枕头”或者“刨土”的工具。对帮助吐毛球有一定帮助。',
        stats: [{ label: '发芽时间', value: '5天' }, { label: '关注度', value: '一般' }, { label: '功能性', value: '强' }]
    }
]
</script>

<script lang="ts">
export default {
    name: 'TreatsView'
}
</script>
