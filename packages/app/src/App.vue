<script setup lang="ts">
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
</script>

<template>
  <div class="min-h-screen bg-white">
    <Header />

    <div class="bg-gray-100">
      <router-view />
    </div>

    <Footer />
  </div>
</template>
