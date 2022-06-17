'use strict';
global.navigator = {};
global.window = {};
var expect = require('chai').expect;
var index = require('../dist/lib/cryptoService.js');
var crypto;
describe('Testing Cryptographic layer', () => {
    beforeEach(() => {
        this.crypto = new index.CryptoService;
    });
    it('testing private key gen', () => {
        this.crypto.GenerateKeys();
        expect(this.crypto.getPublicKey.length).to.equal(271);
    });
});
//# sourceMappingURL=crypto.js.map