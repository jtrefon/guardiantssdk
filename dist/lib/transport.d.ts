export declare class Transport {
    protected headers: {
        Accept: string;
        "Content-Type": string;
    };
    /**
     * Transport Get method
     * @param url
     * @returns Promise
     */
    get(url: string): Promise<any>;
    /**
     * Transport Post method
     * @param url
     * @param bodyObject
     * @returns Promise
     */
    post(url: string, bodyObject: object): Promise<any>;
}
