import commonjs from 'rollup-plugin-commonjs-alternate';

export default {
    input: 'src/cjs.js',
    output: [{
        file: 'output.alternate.mjs',
        format: 'es',
    }],
    plugins: [
        commonjs(),
    ],
};
