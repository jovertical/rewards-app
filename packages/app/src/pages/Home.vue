<script setup lang="ts">
import PrizeHeader from '@/components/PrizeHeader.vue';
import PrizeList from '@/components/PrizeList.vue';
</script>

<template>
  <div>
    <PrizeHeader />

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mt-4 py-12">
        <h2 class="text-center text-xl font-light">
          Here is the full list of prizes that you can win.
        </h2>
      </div>

      <div class="mt-8">
        <PrizeList />
      </div>
    </main>
  </div>
</template>
