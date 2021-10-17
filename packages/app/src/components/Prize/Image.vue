<script setup lang="ts">
defineProps({
  source: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="aspect-w-3 aspect-h-4">
    <img class="object-cover rounded" :src="source" alt="Prize Image" />
  </div>
</template>
