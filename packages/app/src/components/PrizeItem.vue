<script setup lang="ts">
import { PropType } from 'vue';

defineProps({
  prize: {
    type: Object as PropType<Prize>,
    required: true,
  },
});
</script>

<template>
  <div class="bg-white rounded shadow-md">
    <div class="aspect-w-3 aspect-h-2">
      <img class="object-cover rounded-t" :src="prize.image_url" alt="" />
    </div>

    <div class="py-8 text-center">
      <h4 class="py-2.5 text-xl font-eloquia">{{ prize.name }}</h4>

      <div class="inline-flex mt-10">
        <router-link
          class="px-12 py-2.5 rounded-full bg-yellow text-sm font-light"
          :to="{ name: 'prize-details', params: { id: prize._id } }"
        >
          Details
        </router-link>
      </div>
    </div>
  </div>
</template>
