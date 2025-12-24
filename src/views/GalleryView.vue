<template>
    <div class="pt-32 min-h-screen pb-20">
        <div class="max-w-7xl mx-auto px-6 mb-16 text-center">
            <h1 class="text-6xl font-black font-display mb-4">精选 <span class="text-gradient">相册</span></h1>
            <p class="text-white/50 text-xl">每一张都是蒜蓉的美颜暴击</p>
        </div>

        <!-- Masonry Grid -->
        <div class="max-w-7xl mx-auto px-6 columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            <div v-for="(photo, index) in photos" :key="index" class="break-inside-avoid">
                <div class="glass-card overflow-hidden group cursor-pointer relative">
                    <img :src="photo.url" :alt="photo.title"
                        class="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <div>
                            <p class="text-xs text-brand-primary font-bold uppercase tracking-widest mb-1">{{ photo.date
                                }}</p>
                            <h3 class="text-lg font-bold">{{ photo.title }}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const photos = [
    { url: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800', title: '窗边的沉思', date: '2024.12.20' },
    { url: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&q=80&w=800', title: '捕猎者准则', date: '2024.12.18' },
    { url: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&q=80&w=800', title: '午夜跑酷瞬间', date: '2024.12.15' },
    { url: 'https://images.unsplash.com/photo-1533733356397-8657edc96bea?auto=format&fit=crop&q=80&w=800', title: '证件照', date: '2024.12.10' },
    { url: 'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?auto=format&fit=crop&q=80&w=800', title: '尾巴的艺术', date: '2024.12.05' },
    { url: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&q=80&w=800', title: '清晨的凝视', date: '2024.12.01' },
    { url: 'https://images.unsplash.com/photo-1517210122147-3ffc6a8fbe1c?auto=format&fit=crop&q=80&w=800', title: '粉色肉垫', date: '2024.11.28' },
    { url: 'https://images.unsplash.com/photo-1513245536251-18e385011746?auto=format&fit=crop&q=80&w=800', title: '梦中捕鱼', date: '2024.11.25' }
]
</script>

<script lang="ts">
export default {
    name: 'GalleryView'
}
</script>
