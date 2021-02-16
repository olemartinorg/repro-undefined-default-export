import assert from 'assert';
import plainUndefinedEs from './src/undefined-es.mjs';
import plainDefinedEs from './src/defined-es.mjs';
import alternate from './output.alternate.mjs';
import standard from './output.standard.mjs';

function testPlugin(values) {
    it('handles defined exports using require(cjs)', () => {
        assert.strictEqual(values['require-cjs'].d, 'hello world');
    });
    it('handles undefined exports using require(cjs)', () => {
        assert.strictEqual(values['require-cjs'].u, undefined);
    });
    it('handles defined exports using require(es)', () => {
        assert.strictEqual(values['require-es'].d, 'hello world');
    });
    it('handles undefined exports using require(es)', () => {
        assert.strictEqual(values['require-es'].u, undefined);
    });
}

describe('rollup-plugin-commonjs-alternate', () => testPlugin(alternate));
describe('@rollup/plugin-commonjs', () => testPlugin(standard));

describe('node (experimental .mjs)', () => {
    it('handles defined exports using import es', () => {
        assert.strictEqual(plainDefinedEs, 'hello world');
    });
    it('handles undefined exports using import es', () => {
        assert.strictEqual(plainUndefinedEs, undefined);
    });
});
