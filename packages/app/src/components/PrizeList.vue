<script setup lang="ts">
import { ref } from 'vue';
import PrizeItem from './PrizeItem.vue';

let prizes = ref<Prize[]>([]);

async function getPrizes(): Promise<void> {
  fetch(`${import.meta.env.VITE_API_URL}/api/prices`)
    .then((response) => response.json())
    .then((data) => {
      prizes.value = data;
    });
}

getPrizes();

defineExpose({ prizes });
</script>

<template>
  <ul v-for="prize in prizes" :key="prize.id">
    <PrizeItem :prize="prize" />
  </ul>
</template>
