import { CryptoService } from "lib/cryptoService";
import { Transport } from "lib/transport";
export class Guardianbcsdk {

    public getCryptoSerice(): CryptoService {
        return CryptoService.prototype;
    }
    public getTransport(): Transport {
        return Transport.prototype;
    }
}
