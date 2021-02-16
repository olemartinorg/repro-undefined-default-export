import commonjs from 'rollup-plugin-commonjs-alternate';

export default {
    input: 'src/index.js',
    output: [{
        file: 'output.alternate.js',
        format: 'iife',
    }],
    plugins: [
        commonjs(),
    ],
};
