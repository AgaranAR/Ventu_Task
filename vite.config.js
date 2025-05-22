// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Ventu_Task/', // 🔁 replace with your GitHub repo name
  plugins: [react()],
});