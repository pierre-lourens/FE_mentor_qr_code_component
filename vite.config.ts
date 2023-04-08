import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/FE_mentor_qr_code_component/',
  plugins: [react()],
});
