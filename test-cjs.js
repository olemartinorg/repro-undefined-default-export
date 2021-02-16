const assert = require('assert');
const plainUndefinedCjs = require('./src/undefined-cjs');
const plainDefinedCjs = require('./src/defined-cjs');

describe('node (plain .js)', () => {
    it('handles defined exports using require(cjs)', () => {
        assert.strictEqual(plainDefinedCjs, 'hello world');
    });
    it('handles undefined exports using require(cjs)', () => {
        assert.strictEqual(plainUndefinedCjs, undefined);
    });
});
