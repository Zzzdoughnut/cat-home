<template>
  <section class="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
    <!-- Left: Cat Profile Card -->
    <div class="lg:col-span-1">
      <div class="glass-card p-8 sticky top-32">
        <div class="relative mb-8 group">
          <div class="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div class="relative bg-brand-dark rounded-2xl overflow-hidden aspect-square">
            <img src="https://images.unsplash.com/photo-1533733356397-8657edc96bea?auto=format&fit=crop&q=80&w=800" alt="蒜蓉 the Cat" class="w-full h-full object-cover" />
          </div>
        </div>
        
        <h2 class="text-3xl font-black mb-1 font-display">蒜蓉 <span class="text-brand-primary">🐾</span></h2>
        <p class="text-white/40 text-sm font-bold uppercase tracking-widest mb-6">午睡大师</p>
        
        <div class="space-y-4 mb-8">
          <div v-for="info in profileInfo" :key="info.label" class="flex justify-between items-center py-2 border-b border-white/5">
            <span class="text-white/40 text-xs font-bold uppercase">{{ info.label }}</span>
            <span class="text-sm font-semibold">{{ info.value }}</span>
          </div>
        </div>

        <div class="space-y-4">
          <h4 class="text-xs font-bold uppercase tracking-widest text-brand-secondary">技能树</h4>
          <div v-for="skill in skills" :key="skill.name" class="space-y-1.5">
            <div class="flex justify-between text-[10px] font-bold uppercase">
              <span>{{ skill.name }}</span>
              <span class="text-brand-primary">{{ skill.level }}%</span>
            </div>
            <div class="h-1 bg-white/5 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-brand-primary to-brand-secondary transition-all duration-1000" :style="{ width: `${skill.level}%` }"></div>
            </div>
          </div>
        </div>

        <!-- Hidden Skills (Bonus) -->
        <div class="mt-8 space-y-4">
          <h4 class="text-xs font-bold uppercase tracking-widest text-brand-primary">隐藏天赋</h4>
          <div v-for="skill in hiddenSkills" :key="skill.name" class="p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
            <div class="flex items-center gap-3 mb-1">
              <div :class="skill.icon" class="text-brand-accent"></div>
              <span class="text-xs font-bold">{{ skill.name }}</span>
            </div>
            <p class="text-[10px] text-white/40 leading-tight">{{ skill.desc }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Right: Interaction & Stats -->
    <div class="lg:col-span-2 space-y-12">
      <!-- Vote for Treats Interation -->
      <div class="glass-card p-10 relative overflow-hidden group">
        <div class="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
          <div class="i-mdi-food-apple text-8xl text-brand-primary"></div>
        </div>
        
        <div class="relative z-10">
          <div class="cat-badge mb-4 inline-block">互动目标</div>
          <h3 class="text-4xl font-black mb-4 font-display">零食奖励 <span class="text-gradient">大挑战</span></h3>
          <p class="text-white/50 mb-8 max-w-md">每满 100 票就奖励一份高端小零食。蒜蓉 正盯着橱柜期待着。</p>
          
          <div class="flex items-end gap-4 mb-10">
            <div class="flex-1">
              <div class="flex justify-between mb-2 text-sm font-bold">
                <span>当前进度</span>
                <span class="text-brand-primary">{{ treatVotes }}/100</span>
              </div>
              <div class="h-4 bg-white/5 rounded-full p-1 border border-white/10">
                <div class="h-full bg-brand-primary rounded-full transition-all duration-500 shadow-[0_0_15px_rgba(251,146,60,0.5)]" :style="{ width: `${treatVotes}%` }"></div>
              </div>
            </div>
            <button @click="vote" :disabled="voted"
              class="bg-brand-primary text-white px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:grayscale disabled:hover:scale-100 flex items-center gap-2"
            >
              <div :class="voted ? 'i-mdi-check' : 'i-mdi-bone'"></div>
              {{ voted ? '已投票!' : '投上一票' }}
            </button>
          </div>
          
          <p v-if="voted" class="text-xs text-brand-secondary font-bold animate-bounce">✨ 谢谢你！蒜蓉 给了你一个慢眨眼。</p>
        </div>
      </div>

      <!-- Mood Tracker (Extra Idea) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="glass-card p-8">
          <div class="flex items-center gap-3 mb-6">
            <div class="p-2 bg-brand-accent/20 rounded-lg">
              <div class="i-mdi-emoticon-happy text-brand-accent text-xl"></div>
            </div>
            <h4 class="font-bold font-display uppercase tracking-widest text-sm">当前心情</h4>
          </div>
          <div class="flex items-center gap-6">
            <div class="text-5xl animate-bounce">😴</div>
            <div>
              <div class="text-xl font-bold">异常冷静</div>
              <div class="text-sm text-white/40">预计疯狂跑酷倒计时: 4h 12m</div>
            </div>
          </div>
        </div>

        <div class="glass-card p-8 group cursor-pointer">
          <div class="flex items-center gap-3 mb-6">
            <div class="p-2 bg-brand-secondary/20 rounded-lg">
              <div class="i-mdi-incognito text-brand-secondary text-xl"></div>
            </div>
            <h4 class="font-bold font-display uppercase tracking-widest text-sm">秘密基地</h4>
          </div>
          <div class="text-lg font-bold group-hover:text-brand-primary transition-colors">蓝色天鹅绒沙发底下</div>
          <div class="text-xs text-white/40 mt-1 uppercase font-bold">潜行等级: 专业</div>
        </div>
      </div>

      <!-- Meow-o-Meter (New Interactive Skill) -->
      <div class="glass-card p-10 bg-gradient-to-br from-brand-primary/10 to-transparent border-brand-primary/20">
        <div class="flex flex-col md:flex-row items-center gap-10">
          <div class="relative">
            <div class="w-32 h-32 rounded-full border-4 border-white/5 flex-center">
              <div class="text-4xl transition-transform duration-200" :style="{ transform: `scale(${1 + meowStrength/100})` }">
                {{ meowStrength > 80 ? '🙀' : meowStrength > 40 ? '😼' : '😺' }}
              </div>
            </div>
            <svg class="absolute inset-0 -rotate-90 w-32 h-32 overflow-visible">
              <circle cx="64" cy="64" r="60" fill="none" stroke="rgba(251, 146, 60, 0.2)" stroke-width="8" />
              <circle cx="64" cy="64" r="60" fill="none" stroke="url(#meowGradient)" stroke-width="8" stroke-dasharray="377" :stroke-dashoffset="377 - (377 * meowStrength / 100)" class="transition-all duration-500" />
              <defs>
                <linearGradient id="meowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#fb923c" />
                  <stop offset="100%" stop-color="#fde047" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          <div class="flex-1 text-center md:text-left">
            <h4 class="text-2xl font-black mb-2 font-display">声学共振 <span class="text-white/20 text-sm font-mono">(喵喵计)</span></h4>
            <p class="text-white/50 text-sm mb-6">测试 蒜蓉 晨间索要食物的分贝等级。警告：可能会引起邻居的围观。</p>
            <button @click="triggerMeow" class="glass-card px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-widest hover:text-brand-primary transition-all active:scale-90">
              触发 "喵呜?"
            </button>
          </div>
        </div>
      </div>

      <!-- Box Collection (Favorites) -->
      <div class="glass-card p-10">
        <div class="flex items-center justify-between mb-8">
          <div>
            <h4 class="text-2xl font-black font-display mb-1">纸箱 <span class="text-gradient">收藏夹</span></h4>
            <p class="text-xs text-white/40 uppercase font-bold tracking-widest">蒜蓉 精选推荐</p>
          </div>
          <div class="i-mdi-package-variant-closed text-4xl text-white/10"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="box in boxCollection" :key="box.name" class="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-primary/30 transition-all group">
            <div class="flex items-center gap-1 mb-3">
              <div v-for="i in 5" :key="i" class="i-mdi-star text-[10px]" :class="i <= box.rating ? 'text-brand-accent' : 'text-white/10'"></div>
            </div>
            <h5 class="font-bold text-sm mb-2 group-hover:text-brand-primary transition-colors">{{ box.name }}</h5>
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in box.tags" :key="tag" class="text-[9px] px-2 py-0.5 bg-white/5 rounded-md text-white/40 font-bold tracking-wider uppercase">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const profileInfo = [
  { label: '品种', value: '英国短毛猫' },
  { label: '年龄', value: '2 岁' },
  { label: '最爱玩具', value: '塑料弹簧' },
  { label: '特长', value: '凌晨3点跑酷' }
]

const skills = [
  { name: '午睡', level: 98, color: 'brand-primary' },
  { name: '潜行', level: 85, color: 'brand-secondary' },
  { name: '卖萌', level: 100, color: 'brand-accent' },
  { name: '听从指挥', level: 12, color: 'white/40' },
  { name: '键盘踩缝纫机', level: 92, color: 'brand-primary' },
  { name: '深夜歌剧', level: 75, color: 'brand-secondary' }
]

const hiddenSkills = [
  { name: '重力测试员', desc: '把桌子上的东西推下去，看看物理定律是否依然有效。', icon: 'i-mdi-potted-plant' },
  { name: '纸箱占领者', desc: '只要我钻得进，我就坐得下。不管逻辑。', icon: 'i-mdi-package-variant' },
  { name: '暗影猎手', desc: '擅长捕捉那些不存在的事物。', icon: 'i-mdi-ghost' }
]

const meowStrength = ref(0)
const treatVotes = ref(68)
const voted = ref(false)
let decayInterval: any = null

const vote = () => {
  if (!voted.value) {
    treatVotes.value += 1
    voted.value = true
  }
}

const triggerMeow = () => {
  meowStrength.value = Math.min(meowStrength.value + 25, 100)
  
  if (!decayInterval) {
    decayInterval = setInterval(() => {
      if (meowStrength.value > 0) {
        meowStrength.value -= 2
      } else {
        clearInterval(decayInterval)
        decayInterval = null
      }
    }, 100)
  }
}

const boxCollection = [
  { name: 'Amazon Prime XL', rating: 5, tags: ['宽敞', '硬纸板'] },
  { name: '披萨盒 (温热)', rating: 4, tags: ['平坦', '有香味'] },
  { name: '鞋盒', rating: 5, tags: ['舒适', '挤挤更健康'] }
]
</script>

<script lang="ts">
export default {
  name: 'CatProfile'
}
</script>
