"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const sha256_1 = tslib_1.__importDefault(require("crypto-js/sha256"));
const jse = tslib_1.__importStar(require("jsencrypt"));
class CryptoService {
    constructor() {
        this.KeySize = 1024;
        this.PublicKey = "";
        this.PrivateKey = "";
    }
    /**
     * Generates RSA key pair (default 1024)
     * keys are to be obtained via getPublicKey() and getPrivateKey()
     */
    GenerateKeys() {
        const jsEnc = new jse.JSEncrypt({ default_key_size: this.KeySize });
        this.PrivateKey = jsEnc.getPrivateKey();
        this.PublicKey = jsEnc.getPublicKey();
    }
    /**
     * This is RSA signing method
     * @param payload payload to sign
     * @param privateKey private key to sign with
     * @returns string type signature
     */
    Sign(payload, privateKey) {
        const jsEnc = new jse.JSEncrypt({ default_key_size: this.KeySize });
        jsEnc.setPrivateKey(privateKey);
        return jsEnc.sign(payload, sha256_1.default, "sha256");
    }
    /**
     * RSA signature verification
     * @param payload data to compare signature against
     * @param signature RSA signature
     * @param publicKey RSA public key to verify signature with
     * @returns boolean true or false
     */
    Verify(payload, signature, publicKey) {
        const jsEnc = new jse.JSEncrypt({ default_key_size: this.KeySize });
        jsEnc.setPrivateKey(publicKey);
        return jsEnc.verify(payload, signature, sha256_1.default);
    }
    /**
     * RSA key accessor
     * @returns public key as string
     */
    get getPublicKey() {
        return this.PublicKey;
    }
    /**
     * RSA key accessor
     * @returns private key as string
     */
    get getPrivateKey() {
        return this.PrivateKey;
    }
}
exports.CryptoService = CryptoService;
//# sourceMappingURL=cryptoService.js.map