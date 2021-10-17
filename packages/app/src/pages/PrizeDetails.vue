<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import PrizeHeader from '@/components/PrizeHeader.vue';
import * as X from '@/components/Prize';
import useAuth from '@/hooks/useAuth';

let route = useRoute();
let auth = useAuth();

let prize = ref<Prize | null>(null);
let loading = ref(false);

async function getPrize(id = route.params.id): Promise<void> {
  if (loading.value) {
    return;
  }

  loading.value = true;

  let response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/prizes/${id}`,
    {
      headers: {
        'X-Access-Token': auth.token.value,
      },
    }
  );

  if (response.status !== 200) {
    loading.value = false;

    return;
  }

  let body = await response.json();

  prize.value = body.data;
  loading.value = false;
}

watch(auth.authenticated, (authenticated) => {
  if (authenticated) {
    getPrize();
  }
});

defineExpose({ prize });
</script>

<template>
  <div>
    <PrizeHeader />

    <main class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="py-12">
        <div class="grid grid-cols-2 gap-x-8">
          <div class="col-span-2 lg:col-span-1">
            <X.ImageSkeleton v-if="loading" />
            <X.Image v-else-if="prize" :source="prize?.image_url" />
          </div>

          <div class="col-span-2 lg:col-span-1">
            <X.CardSkeleton v-if="loading" />
            <X.Card
              v-else-if="prize"
              :prize="prize"
              @update-prize="prize = $event"
            />
          </div>
        </div>

        <div class="mt-10">
          <div class="border-t border-gray-light py-12">
            <X.DescriptionTextSkeleton v-if="loading" />
            <X.DescriptionText v-else-if="prize" :value="prize?.description" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
