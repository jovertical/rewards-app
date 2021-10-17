/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface Prize {
  _id: string;
  name: string;
  description: string;
  stock: number;
  image_url?: string;
  redeemed?: boolean;
  created_at: string;
  updated_at?: string;
}

interface User {
  _id: string;
  name: string;
  email: string;
  created_at: string;
  updated_at?: string;
}
