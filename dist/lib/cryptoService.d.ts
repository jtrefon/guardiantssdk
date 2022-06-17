export declare class CryptoService {
    protected KeySize: string;
    protected PublicKey: string;
    protected PrivateKey: string;
    /**
     * Generates RSA key pair (default 1024)
     * keys are to be obtained via getPublicKey() and getPrivateKey()
     */
    GenerateKeys(): void;
    /**
     * This is RSA signing method
     * @param payload payload to sign
     * @param privateKey private key to sign with
     * @returns string type signature
     */
    Sign(payload: string, privateKey: string): string;
    /**
     * RSA signature verification
     * @param payload data to compare signature against
     * @param signature RSA signature
     * @param publicKey RSA public key to verify signature with
     * @returns boolean true or false
     */
    Verify(payload: string, signature: string, publicKey: string): boolean;
    /**
     * RSA key accessor
     * @returns public key as string
     */
    get getPublicKey(): string;
    /**
     * RSA key accessor
     * @returns private key as string
     */
    get getPrivateKey(): string;
}
