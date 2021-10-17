<script setup lang="ts">
import { ref } from 'vue';
import Alert from '@/components/Alert.vue';
import Button from '@/components/Button.vue';
import * as Form from '@/components/Form';
import useAuth from '@/hooks/useAuth';
import useError from '@/hooks/useError';
import useForm from '@/hooks/useForm';

let auth = useAuth(false);

let form = useForm({
  name: '',
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

  let response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/auth/register`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.values),
    }
  );

  let body = await response.json();

  if (response.status !== 201) {
    error.set(body.message || body.error);

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
        Create your account
      </h2>
      <p class="mt-2 text-center text-sm text-gray-dark">
        Already have an account?
        {{ ' ' }}
        <router-link
          :to="{ name: 'auth.login' }"
          class="font-medium text-yellow hover:text-yellow-light"
        >
          login
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
          <Form.Group name="name" label="Your Name">
            <Form.TextInput
              v-model="form.values.name"
              id="name"
              name="name"
              type="text"
            />
          </Form.Group>

          <Form.Group name="email" label="Your Email Address">
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

          <div>
            <Button type="submit" :loading="loading">Sign Up</Button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
