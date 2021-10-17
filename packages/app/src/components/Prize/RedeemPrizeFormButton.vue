<script setup lang="ts">
import { ref } from 'vue';
import Button from '@/components/Button.vue';
import useAuth from '@/hooks/useAuth';

defineProps({
  prizeId: {
    type: String,
    required: true,
  },

  disabled: {
    type: Boolean,
    default: false,
  },
});

let emit = defineEmits(['submitted', 'errored']);

let auth = useAuth();
let submitting = ref(false);

async function submit(id: string | string[]): Promise<void> {
  submitting.value = true;

  let response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/prizes/${id}/redeem`,
    {
      method: 'POST',
      headers: {
        'X-Access-Token': auth.token.value,
      },
    }
  );

  let body = await response.json();

  if (response.status !== 200) {
    submitting.value = false;

    emit('errored', body.message || 'Something went wrong');

    return;
  }

  submitting.value = false;

  emit('submitted', body.data);
}
</script>

<template>
  <form class="py-8" @submit.prevent="submit(prizeId)">
    <Button
      type="submit"
      class="w-auto"
      :loading="submitting"
      :disabled="disabled"
    >
      Redeem &nbsp;>
    </Button>
  </form>
</template>
