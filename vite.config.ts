import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig(({ mode }) => ({
    plugins: [sveltekit()],
    resolve: {
        conditions: mode === 'test' ? ['browser'] : [],
    },
    test: {
        environment: 'jsdom',
        include: ['src/**/*.{test,spec}.{js,ts}'],
        setupFiles: ['./vitest-setup.js'],
    },
}));
