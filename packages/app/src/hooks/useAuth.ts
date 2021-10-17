import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStorage } from '@vueuse/core';

export default function useAuth() {
  let router = useRouter();
  let token = useStorage('auth_token', '');

  let authenticated = ref(false);
  let user = ref<User | null>(null);

  async function check(): Promise<void> {
    let response = await fetch(`${import.meta.env.VITE_API_URL}/api/me`, {
      headers: {
        'X-Access-Token': token.value,
      },
    });

    if (response.status !== 200) {
      router.push({ name: 'auth.login' });

      return;
    }

    let body = await response.json();

    authenticated.value = true;
    user.value = body.data;
  }

  async function authenticate(newToken: string): Promise<void> {
    token.value = newToken;

    await check();

    router.push({ name: 'home' });
  }

  onMounted(() => {
    check();
  });

  return {
    authenticated,
    token,
    user,
    authenticate,
  };
}
