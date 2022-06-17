"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guardianbcsdk = void 0;
const cryptoService_1 = require("lib/cryptoService");
const transport_1 = require("lib/transport");
class Guardianbcsdk {
    getCryptoSerice() {
        return cryptoService_1.CryptoService.prototype;
    }
    getTransport() {
        return transport_1.Transport.prototype;
    }
}
exports.Guardianbcsdk = Guardianbcsdk;
//# sourceMappingURL=index.js.map