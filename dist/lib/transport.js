import * as tslib_1 from "tslib";
import fetch from "cross-fetch";
var Transport = /** @class */ (function () {
    function Transport() {
        this.headers = {
            "Accept": "application/json",
            "Content-Type": "application/json",
        };
    }
    /**
     * Transport Get method
     * @param url
     * @returns Promise
     */
    Transport.prototype.get = function (url) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response, e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch(url, {
                                cache: "no-cache",
                                headers: this.headers,
                                redirect: "follow",
                                referrer: "no-referrer",
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        e_1 = _a.sent();
                        throw new Error(e_1);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Transport Post method
     * @param url
     * @param bodyObject
     * @returns Promise
     */
    Transport.prototype.post = function (url, bodyObject) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response, e_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch(url, {
                                body: JSON.stringify(bodyObject),
                                cache: "no-cache",
                                headers: this.headers,
                                method: "POST",
                                redirect: "follow",
                                referrer: "no-referrer",
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        e_2 = _a.sent();
                        throw new Error(e_2);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return Transport;
}());
export { Transport };
//# sourceMappingURL=transport.js.map