import sha256 from "crypto-js/sha256";
import * as jse from "jsencrypt";
var CryptoService = /** @class */ (function () {
    function CryptoService() {
        this.KeySize = 1024;
        this.PublicKey = "";
        this.PrivateKey = "";
    }
    /**
     * Generates RSA key pair (default 1024)
     * keys are to be obtained via getPublicKey() and getPrivateKey()
     */
    CryptoService.prototype.GenerateKeys = function () {
        var jsEnc = new jse.JSEncrypt({ default_key_size: this.KeySize });
        this.PrivateKey = jsEnc.getPrivateKey();
        this.PublicKey = jsEnc.getPublicKey();
    };
    /**
     * This is RSA signing method
     * @param payload payload to sign
     * @param privateKey private key to sign with
     * @returns string type signature
     */
    CryptoService.prototype.Sign = function (payload, privateKey) {
        var jsEnc = new jse.JSEncrypt({ default_key_size: this.KeySize });
        jsEnc.setPrivateKey(privateKey);
        return jsEnc.sign(payload, sha256, "sha256");
    };
    /**
     * RSA signature verification
     * @param payload data to compare signature against
     * @param signature RSA signature
     * @param publicKey RSA public key to verify signature with
     * @returns boolean true or false
     */
    CryptoService.prototype.Verify = function (payload, signature, publicKey) {
        var jsEnc = new jse.JSEncrypt({ default_key_size: this.KeySize });
        jsEnc.setPrivateKey(publicKey);
        return jsEnc.verify(payload, signature, sha256);
    };
    Object.defineProperty(CryptoService.prototype, "getPublicKey", {
        /**
         * RSA key accessor
         * @returns public key as string
         */
        get: function () {
            return this.PublicKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CryptoService.prototype, "getPrivateKey", {
        /**
         * RSA key accessor
         * @returns private key as string
         */
        get: function () {
            return this.PrivateKey;
        },
        enumerable: true,
        configurable: true
    });
    return CryptoService;
}());
export { CryptoService };
//# sourceMappingURL=cryptoService.js.map