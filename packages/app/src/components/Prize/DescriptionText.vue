<script setup lang="ts">
defineProps({
  value: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-col lg:flex-row lg:space-x-16">
    <h5 class="text-2xl font-eloquia text-center sm:text-left">Description</h5>
    <p class="mt-1.5 font-light text-center sm:text-left">
      {{ value }}
    </p>
  </div>
</template>
