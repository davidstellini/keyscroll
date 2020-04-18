import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy'

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/main.js',
    output: {
        file: 'dist/bundle.js',
        format: 'iife', // immediately-invoked function expression — suitable for <script> tags
        sourcemap: true
    },
    plugins: [
        copy({
            targets: [
                { src: 'src/index.html', dest: 'dist' },
                { src: 'src/**.css', dest: 'dist' }
            ]
        }),
        resolve(), // tells Rollup how to find date-fns in node_modules
        commonjs(),
        production && terser() // minify, but only in production
    ]
};



