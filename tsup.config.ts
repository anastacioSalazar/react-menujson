import { defineConfig } from 'tsup';
import { copyFileSync } from 'node:fs';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: {
    compilerOptions: {
      jsx: 'react-jsx',
      ignoreDeprecations: '6.0',
    },
  },
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: true,
  external: ['react', 'react-dom'],
  tsconfig: './tsconfig.app.json',
  esbuildOptions(options) {
    options.jsx = 'automatic';
  },
  onSuccess: async () => {
    copyFileSync('src/Menu.css', 'dist/styles.css');
  },
});