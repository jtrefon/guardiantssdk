"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
const tslib_1 = require("tslib");
const cross_fetch_1 = tslib_1.__importDefault(require("cross-fetch"));
class Transport {
    headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
    };
    /**
     * Transport Get method
     * @param url
     * @returns Promise
     */
    async get(url) {
        try {
            const response = await (0, cross_fetch_1.default)(url, {
                cache: "no-cache",
                headers: this.headers,
                redirect: "follow",
                referrer: "no-referrer",
            });
            return await response.json();
        }
        catch (e) {
            throw new Error(e);
        }
    }
    /**
     * Transport Post method
     * @param url
     * @param bodyObject
     * @returns Promise
     */
    async post(url, bodyObject) {
        try {
            const response = await (0, cross_fetch_1.default)(url, {
                body: JSON.stringify(bodyObject),
                cache: "no-cache",
                headers: this.headers,
                method: "POST",
                redirect: "follow",
                referrer: "no-referrer",
            });
            return await response.json();
        }
        catch (e) {
            throw new Error(e);
        }
    }
}
exports.Transport = Transport;
//# sourceMappingURL=transport.js.map