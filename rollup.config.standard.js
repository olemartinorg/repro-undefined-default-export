import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/cjs.js',
    output: [{
        file: 'output.standard.mjs',
        format: 'es',
    }],
    plugins: [
        commonjs({
            // This option allows the same behaviour as the alternate plugin does by default
            requireReturnsDefault: true,
        }),
    ],
};
