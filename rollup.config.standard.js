import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/index.js',
    output: [{
        file: 'output.standard.js',
        format: 'iife',
    }],
    plugins: [
        commonjs(),
    ],
};
