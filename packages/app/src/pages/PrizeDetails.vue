<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import PrizeHeader from '@/components/PrizeHeader.vue';
import useAuth from '@/hooks/useAuth';

let route = useRoute();
let auth = useAuth();

let prize = ref<Prize | null>(null);

async function getPrize(id: string | string[]): Promise<void> {
  let response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/prizes/${id}`,
    {
      headers: {
        'X-Access-Token': auth.token.value,
      },
    }
  );

  if (response.status !== 200) {
    return;
  }

  let body = await response.json();

  prize.value = body.data;
}

watch(auth.authenticated, (authenticated) => {
  if (authenticated) {
    getPrize(route.params.id);
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
          <div v-if="prize" class="col-span-2 lg:col-span-1">
            <div class="aspect-w-3 aspect-h-4">
              <img class="object-cover rounded" :src="prize.image_url" alt="" />
            </div>
          </div>

          <div
            v-if="prize"
            class="
              col-span-2
              lg:col-span-1
              h-full
              px-8
              py-6
              bg-white
              rounded
              shadow
            "
          >
            <h4 class="py-2.5 text-3xl font-eloquia">
              {{ prize.name }}
            </h4>

            <div class="mt-12 border-t border-b border-gray-300">
              <div class="py-8">
                <button
                  class="px-12 py-2.5 rounded-full bg-yellow text-sm font-light"
                >
                  Redeem &nbsp;>
                </button>
              </div>
            </div>

            <div v-if="prize" class="mt-4">
              <span class="text-sm">{{ prize.stock }} left in stock</span>
            </div>
          </div>
        </div>

        <!-- Description -->
        <div class="mt-10">
          <div class="border-t border-gray-300 py-12">
            <div v-if="prize" class="flex">
              <h5 class="text-2xl font-eloquia">Description</h5>
              <p class="ml-20 mt-1.5 font-light">
                {{ prize.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
