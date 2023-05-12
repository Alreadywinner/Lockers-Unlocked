import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-plugin-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  base: '/lockers-unlocked/',
  plugins: [svgr(), react(), tsconfigPaths()],
});
