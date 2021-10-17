<script setup lang="ts">
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
</script>

<template>
  <div class="min-h-screen bg-white">
    <Header />

    <div>
      <router-view />
    </div>

    <Footer />
  </div>
</template>
