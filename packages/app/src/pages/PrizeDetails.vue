<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import RedeemPrizeFormButton from '@/components/RedeemPrizeFormButton.vue';
import PrizeHeader from '@/components/PrizeHeader.vue';
import useAuth from '@/hooks/useAuth';
import useError from '@/hooks/useError';

let route = useRoute();
let auth = useAuth();
let error = useError();

let prize = ref<Prize | null>(null);

async function getPrize(id = route.params.id): Promise<void> {
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
            <div class="flex items-center justify-between">
              <h4 class="py-2.5 text-3xl font-eloquia text-gray-darker">
                {{ prize.name }}
              </h4>

              <span
                v-if="prize.redeemed"
                class="
                  inline-flex
                  items-center
                  px-2.5
                  py-0.5
                  rounded-full
                  text-xs
                  font-medium
                  bg-green-lightest
                  text-green-darker
                "
              >
                Redeemed
              </span>
            </div>

            <div class="mt-12 border-t border-b border-gray-light">
              <div class="flex items-center">
                <RedeemPrizeFormButton
                  :prize-id="prize._id"
                  :disabled="prize.redeemed || prize.stock === 0"
                  @errored="error.set($event)"
                  @submitted="prize = $event"
                />
                <p v-if="error.show" class="text-red ml-4">
                  {{ error.message.value }}
                </p>
              </div>
            </div>

            <div v-if="prize" class="mt-4">
              <span class="text-sm">{{ prize.stock }} left in stock</span>
            </div>
          </div>
        </div>

        <!-- Description -->
        <div class="mt-10">
          <div class="border-t border-gray-light py-12">
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
