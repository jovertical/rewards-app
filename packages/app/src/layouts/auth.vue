<script setup lang="ts">
import Header from '@/components/Header.vue';
</script>

<template>
  <div class="min-h-screen bg-white">
    <Header />

    <div>
      <router-view />
    </div>
  </div>
</template>
