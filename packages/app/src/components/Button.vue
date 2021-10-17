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
      items-center
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
      disabled:opacity-60 disabled:cursor-not-allowed
    "
    :disabled="loading"
    v-bind="$attrs"
  >
    <svg
      v-if="loading"
      class="mr-3 animate-spin -ml-1 h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>

    <span class="whitespace-nowrap">
      <slot></slot>
    </span>
  </button>
</template>
