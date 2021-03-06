import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import html from 'rollup-plugin-generate-html-template';
import { terser } from 'rollup-plugin-terser';
import scss from 'rollup-plugin-scss';
import  liveServer from 'rollup-plugin-live-server';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;
const dist = './dist/';

export default {
    input: 'src/main.js',
    output: {
        file: dist + 'bundle.js',
        format: 'iife', // immediately-invoked function expression — suitable for <script> tags
        sourcemap: true
    },
    plugins: [
        html({
            template: 'src/index.html',
            target: dist + 'index.html'
        }),
        scss({
            output: dist + 'bundle.css',

        }),
        resolve(), // tells Rollup how to find date-fns in node_modules
        commonjs(),
        !production && liveServer({
            port: 8001,
            host: "0.0.0.0",
            root: "./dist",
            file: "index.html",
            mount: [['/dist', './dist'], ['/src', './src'], ['/node_modules', './node_modules']],
            open: false,
            wait: 500
        }),
        production && terser() // minify, but only in production
    ]
};



