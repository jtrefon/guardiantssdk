'use strict';
var expect = require('chai').expect;
var index = require('../dist/lib/transport.js');


describe('Testing Transport Layer', () => {
    it('testing Get', () => {
        const transport = new index.Transport;
        const response = transport.get('http://prime.guardianbc.com/block');
        response.then(function(res){
            expect(res[0].parrent).to.null;
        }).catch(function(err){console.log(err)});
    });

    it('testing Post', () => {
        const transport = new index.Transport;
        const wallet = {
            publicKey: "xxxx"
        };
        const response = transport.post('http://prime.guardianbc.com/wallet', wallet);
        response.then(function (res) {
            expect(res.walletId).to.equal('2481a63c85a62cf889d2b149f1a52e985a9341750173fe01eff50cc27b5941b5');
        }).catch(function (err) { console.log(err) });
    });

});