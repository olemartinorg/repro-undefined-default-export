const undefinedCjs = require('./undefined-cjs.js');
const definedCjs = require('./defined-cjs.js');
const undefinedEs = require('./undefined-es.mjs');
const definedEs = require('./defined-es.mjs');

// rollup-plugin-commonjs-alternate says it supports requiring both CJS and ES modules
module.exports = {
    'require-cjs': {
        d: definedCjs,
        u: undefinedCjs,
    },
    'require-es': {
        d: definedEs,
        u: undefinedEs,
    },
}
