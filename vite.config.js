/**
 * @file vite.config.js
 * 
 * @description Configuration file for Vite.js
 * 
 * @see https://vitejs.dev/config/
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
