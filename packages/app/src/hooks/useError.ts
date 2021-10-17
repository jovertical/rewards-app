import { reactive, toRefs } from 'vue';

export default function useError() {
  let error = reactive({
    message: '',
    show: false,
  });

  function set(message: string): void {
    error.message = message;
    error.show = true;
  }

  function clear(): void {
    error.message = '';
    error.show = false;
  }

  return {
    ...toRefs(error),
    set,
    clear,
  };
}
