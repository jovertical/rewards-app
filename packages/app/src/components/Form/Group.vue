<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },

  label: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <div>
    <label
      v-if="label"
      :for="name"
      class="block text-sm font-medium text-gray-dark"
    >
      {{ label }}
    </label>
    <div :class="{ 'mt-1': !!label }">
      <slot />
    </div>
  </div>
</template>
