<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <span
    class="
      inline-flex
      items-center
      px-2.5
      py-0.5
      rounded-full
      text-xs
      font-medium
      bg-green-lightest
      text-green-darker
    "
  >
    {{ text }}
  </span>
</template>
