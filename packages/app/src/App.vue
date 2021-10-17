<script setup lang="ts">
import { shallowRef, watch } from 'vue';
import { useRoute } from 'vue-router';
import AppLayout from '@/layouts/app.vue';
import AuthLayout from '@/layouts/auth.vue';

let route = useRoute();
let layout = shallowRef(AppLayout);

let layouts = {
  app: AppLayout,
  auth: AuthLayout,
};

watch(
  () => route?.meta?.layout,
  (value) => {
    // @ts-ignore
    let newLayout = layouts[value] || layouts.app;

    if (newLayout) {
      layout.value = newLayout;
    }
  }
);

defineExpose({ layout });
</script>

<template>
  <component :is="layout" />
</template>
