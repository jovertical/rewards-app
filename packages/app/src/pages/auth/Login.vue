<script setup lang="ts">
import { ref } from 'vue';
import Alert from '@/components/Alert.vue';
import Button from '@/components/Button.vue';
import * as Form from '@/components/Form';
import useAuth from '@/hooks/useAuth';
import useError from '@/hooks/useError';
import useForm from '@/hooks/useForm';

let auth = useAuth();

let form = useForm({
  email: '',
  password: '',
});

let error = useError();

let loading = ref(false);

async function submit() {
  if (loading.value) {
    return;
  }

  loading.value = true;

  let response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form.values),
  });

  let body = await response.json();

  if (response.status !== 200) {
    error.set(body.error || body.message);

    loading.value = false;

    return;
  }

  loading.value = false;

  auth.authenticate(body.data.token);
}
</script>

<template>
  <div class="bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-darkest">
        Login to continue
      </h2>
      <p class="mt-2 text-center text-sm text-gray-dark">
        Or
        {{ ' ' }}
        <router-link
          :to="{ name: 'auth.register' }"
          class="font-medium text-yellow hover:text-yellow-light"
        >
          create your account
        </router-link>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow-md sm:rounded sm:px-10">
        <Alert
          v-if="error.show.value"
          variant="error"
          :message="error.message.value"
          class="mb-6"
          @hide="error.clear()"
        />

        <form class="space-y-6" @submit.prevent="submit">
          <Form.Group name="email" label="Email Address">
            <Form.TextInput
              v-model="form.values.email"
              id="email"
              name="email"
              type="email"
              autocomplete="email"
            />
          </Form.Group>

          <Form.Group name="password" label="Password">
            <Form.TextInput
              v-model="form.values.password"
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
            />
          </Form.Group>

          <div class="flex justify-end">
            <div class="text-sm">
              <a href="javascript:void(0);" class="font-medium text-yellow">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <Button type="submit" :loading="loading">Login</Button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
