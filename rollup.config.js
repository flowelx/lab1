import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/comic.ts',
  output: { file: 'dist/comic.js' },
  plugins: [typescript(), commonjs(), nodeResolve({ browser: true }), terser()],
};
