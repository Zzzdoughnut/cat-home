<template>
  <div class="fixed inset-0 -z-10 overflow-hidden bg-brand-dark">
    <!-- Warm Gradient Blobs -->
    <div class="absolute top-[-15%] left-[-5%] w-[600px] h-[600px] bg-brand-primary/15 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
    <div class="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-secondary/10 rounded-full mix-blend-screen filter blur-[90px] animate-blob animation-delay-2000"></div>
    <div class="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-brand-accent/10 rounded-full mix-blend-screen filter blur-[80px] animate-blob animation-delay-4000"></div>
    
    <!-- Grain Overlay -->
    <div class="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    
    <!-- Subtle Paw Pattern (Optional visual detail) -->
    <div class="absolute inset-0 opacity-[0.02] pointer-events-none" style="background-image: radial-gradient(#fb923c 0.5px, transparent 0.5px); background-size: 40px 40px;"></div>
  </div>
</template>

<script setup lang="ts">
</script>
