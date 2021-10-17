<script setup lang="ts">
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import useAuth from '@/hooks/useAuth';

let { authenticated } = useAuth();
</script>

<template>
  <div class="min-h-screen bg-white">
    <Header />

    <div class="bg-gray-lightest">
      <router-view />
    </div>

    <Footer />
  </div>
</template>
