import { reactive } from 'vue';

export default function useForm(defaultValues: Record<string, any>) {
  let values = reactive(defaultValues);

  return {
    values,
  };
}
