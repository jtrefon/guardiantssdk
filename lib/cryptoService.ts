import sha256 from "crypto-js/sha256";
import * as jse from "jsencrypt";

export class CryptoService {
    protected KeySize = "1024";
    protected PublicKey: string = "";
    protected PrivateKey: string = "";

    /**
     * Generates RSA key pair (default 1024)
     * keys are to be obtained via getPublicKey() and getPrivateKey()
     */
    public GenerateKeys(): void {
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
    public Sign(payload: string, privateKey: string): string {
        const jsEnc = new jse.JSEncrypt({ default_key_size: this.KeySize });
        jsEnc.setPrivateKey(privateKey);
        return jsEnc.sign(payload, sha256, "sha256");
    }

    /**
     * RSA signature verification
     * @param payload data to compare signature against
     * @param signature RSA signature
     * @param publicKey RSA public key to verify signature with
     * @returns boolean true or false
     */
    public Verify(payload: string, signature: string, publicKey: string): boolean {
        const jsEnc = new jse.JSEncrypt({ default_key_size: this.KeySize });
        jsEnc.setPrivateKey(publicKey);
        return jsEnc.verify(payload, signature, sha256);
    }

    /**
     * RSA key accessor
     * @returns public key as string
     */
    public get getPublicKey(): string {
        return this.PublicKey;
    }

    /**
     * RSA key accessor
     * @returns private key as string
     */
    public get getPrivateKey(): string {
        return this.PrivateKey;
    }

}
