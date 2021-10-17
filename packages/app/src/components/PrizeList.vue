<script setup lang="ts">
import { ref } from 'vue';
import PrizeItem from '@/components/PrizeItem.vue';

let prizes = ref<Prize[]>([]);

async function getPrizes(): Promise<void> {
  let response = await fetch(`${import.meta.env.VITE_API_URL}/api/prizes`);

  let body = await response.json();

  prizes.value = body.data;
}

getPrizes();

defineExpose({ prizes });
</script>

<template>
  <div class="pb-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <PrizeItem v-for="prize in prizes" :key="prize._id" :prize="prize" />
    </div>
  </div>
</template>
