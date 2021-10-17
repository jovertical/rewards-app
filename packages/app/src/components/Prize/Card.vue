<script setup lang="ts">
import { PropType } from 'vue';
import Badge from '@/components/Badge.vue';
import RedeemPrizeFormButton from '@/components/Prize/RedeemPrizeFormButton.vue';
import useError from '@/hooks/useError';

defineProps({
  prize: {
    type: Object as PropType<Prize>,
    required: true,
  },
});

defineEmits(['update-prize']);

let error = useError();
</script>

<template>
  <div class="w-full h-full px-8 py-6 bg-white rounded shadow">
    <div class="flex items-center justify-between">
      <h4 class="py-2.5 text-3xl font-eloquia text-gray-darker">
        {{ prize.name }}
      </h4>

      <Badge v-if="prize.redeemed" text="Redeemed"></Badge>
    </div>

    <div class="mt-12 border-t border-b border-gray-light">
      <div class="flex items-center">
        <RedeemPrizeFormButton
          :prize-id="prize._id"
          :disabled="prize.redeemed || prize.stock === 0"
          @errored="error.set($event)"
          @submitted="$emit('update-prize', $event)"
        />

        <p v-if="error.show" class="text-red ml-4">
          {{ error.message.value }}
        </p>
      </div>
    </div>

    <div v-if="prize" class="mt-4">
      <p class="text-sm">
        <span class="font-bold">{{ prize.stock }}</span>
        left in stock
      </p>
    </div>
  </div>
</template>
