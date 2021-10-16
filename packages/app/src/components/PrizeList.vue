<script setup lang="ts">
import { ref } from 'vue';
import PrizeItem from './PrizeItem.vue';

let prizes = ref<Prize[]>([]);

async function getPrizes(): Promise<void> {
  fetch(`${import.meta.env.VITE_API_URL}/api/prizes`)
    .then((response) => response.json())
    .then((data) => {
      prizes.value = data;
    });
}

getPrizes();

defineExpose({ prizes });
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <PrizeItem v-for="prize in prizes" :key="prize.id" :prize="prize" />
  </div>
</template>
