<script setup lang="ts">
import logoUrl from '@/assets/images/logo.png';
import useAuth from '@/hooks/useAuth';

let { authenticated, user, logout } = useAuth();

defineExpose({ logoUrl });
</script>

<template>
  <nav class="bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-24">
        <div class="flex-shrink-0 flex items-center">
          <router-link :to="{ name: 'home' }">
            <span class="sr-only">Rewards App</span>
            <img class="h-8 w-auto sm:h-10" :src="logoUrl" alt="" />
          </router-link>
        </div>

        <div class="flex sm:-my-px sm:ml-6 space-x-4 sm:space-x-8">
          <router-link
            v-if="!authenticated"
            :to="{ name: 'auth.login' }"
            class="
              text-yellow
              hover:text-yellow-dark
              focus:underline focus:outline-none
            "
          >
            Login
          </router-link>

          <router-link
            v-if="!authenticated"
            :to="{ name: 'auth.register' }"
            class="
              text-yellow
              hover:text-yellow-dark
              focus:underline focus:outline-none
            "
          >
            Sign up
          </router-link>

          <button
            v-if="authenticated"
            class="
              text-yellow
              hover:text-yellow-dark
              focus:underline focus:outline-none
            "
            @click="logout()"
          >
            Logout
          </button>

          <a
            v-if="authenticated"
            href="javascript:void(0);"
            class="flex-shrink-0 group block"
          >
            <div class="flex items-center">
              <div>
                <span
                  class="
                    inline-block
                    h-12
                    w-12
                    rounded-full
                    overflow-hidden
                    bg-gray-lightest
                  "
                >
                  <svg
                    class="h-full w-full text-gray-lighter"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </span>
              </div>
              <div class="ml-3">
                <p
                  class="
                    text-sm
                    font-bold
                    text-gray-darker
                    group-hover:text-gray-darkest
                  "
                >
                  {{ user?.name }}
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>
