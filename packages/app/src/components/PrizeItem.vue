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
  <div>{{ prize.name }}</div>
</template>
