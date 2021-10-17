import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useStorage } from '@vueuse/core';

export default function useAuth() {
  let router = useRouter();
  let token = useStorage('auth_token', '');

  let checking = ref(false);
  let authenticated = ref(false);
  let user = ref<User | null>(null);

  async function check(): Promise<void> {
    if (checking.value) {
      return;
    }

    checking.value = true;

    let response = await fetch(`${import.meta.env.VITE_API_URL}/api/me`, {
      headers: {
        'X-Access-Token': token.value,
      },
    });

    if (response.status !== 200) {
      checking.value = false;

      router.push({ name: 'auth.login' });

      return;
    }

    let body = await response.json();

    checking.value = false;
    authenticated.value = true;
    user.value = body.data;
  }

  async function authenticate(newToken: string): Promise<void> {
    token.value = newToken;

    await check();

    router.push({ name: 'home' });
  }

  async function logout(): Promise<void> {
    token.value = null;
    authenticated.value = false;
    user.value = null;

    router.push({ name: 'auth.login' });
  }

  onMounted(() => {
    check();
  });

  return {
    authenticated,
    token,
    user,
    authenticate,
    logout,
  };
}
