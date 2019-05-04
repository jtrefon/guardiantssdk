import fetch from "cross-fetch";

export class Transport {
    protected headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
    };

    /**
     * Transport Get method
     * @param url
     * @returns Promise
     */
    public async get(url: string) {
        try {
            const response = await fetch(url, {
                cache: "no-cache",
                headers: this.headers,
                redirect: "follow",
                referrer: "no-referrer",
            });
            return await response.json();
        } catch (e) {
            throw new Error(e);
        }
    }

    /**
     * Transport Post method
     * @param url
     * @param bodyObject
     * @returns Promise
     */
    public async post(url: string, bodyObject: object) {
        try {
            const response = await fetch(url,
                {
                    body: JSON.stringify(bodyObject),
                    cache: "no-cache",
                    headers: this.headers,
                    method: "POST",
                    redirect: "follow",
                    referrer: "no-referrer",
                });
            return await response.json();
        } catch (e) {
            throw new Error(e);
        }
    }
}
