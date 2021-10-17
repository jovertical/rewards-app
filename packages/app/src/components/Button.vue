<script setup lang="ts">
defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button
    class="
      w-full
      flex
      justify-center
      py-2
      px-4
      border border-transparent
      rounded-md
      shadow-sm
      text-sm
      font-medium
      text-white
      bg-yellow-dark
      hover:bg-yellow-darker
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow
    "
    v-bind="$attrs"
  >
    <slot></slot>
  </button>
</template>
