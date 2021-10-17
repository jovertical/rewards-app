<script setup lang="ts">
import { ref } from 'vue';
import PrizeItem from '@/components/PrizeItem.vue';
import PrizeItemSkeleton from '@/components/PrizeItemSkeleton.vue';

let prizes = ref<Prize[]>([]);
let loading = ref(false);

async function getPrizes(): Promise<void> {
  if (loading.value) {
    return;
  }

  loading.value = true;

  let response = await fetch(`${import.meta.env.VITE_API_URL}/api/prizes`);

  let body = await response.json();

  prizes.value = body.data;
  loading.value = false;
}

getPrizes();

defineExpose({ prizes });
</script>

<template>
  <div class="pb-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <template v-if="loading">
        <PrizeItemSkeleton v-for="n in 6" :key="'mock-prize-' + n" />
      </template>
      <template v-else>
        <PrizeItem
          v-for="prize in prizes"
          :key="'prize-' + prize._id"
          :prize="prize"
        />
      </template>
    </div>
  </div>
</template>
