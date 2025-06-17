import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
    base:'/social-links-profile',
    plugins: [
        tailwindcss(),
    ],
})
