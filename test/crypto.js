'use strict';
var expect = require('chai').expect;
var index = require('../dist/lib/cryptoService.js');
var crypto;


describe('Testing Cryptographic layer', () => {
    
    beforeEach(()=> {
        this.crypto = new index.CryptoService;
    });

    it('testing Get', () => {
        this.crypto.GenerateKeys();
        expect(this.crypto.getPrivateKey.length).to.equal(21);
    });


});