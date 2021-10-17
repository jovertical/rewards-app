<script setup lang="ts">
defineEmits(['update:modelValue']);

defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
});
</script>

<template>
  <input
    class="
      appearance-none
      block
      w-full
      px-3
      py-2
      border border-gray-lighter
      rounded-md
      shadow-sm
      placeholder-gray
      focus:outline-none focus:ring-yellow focus:border-yellow
      sm:text-sm
    "
    :value="modelValue"
    v-bind="$attrs"
    @input="$emit('update:modelValue', ($event.target as any).value)"
  />
</template>
