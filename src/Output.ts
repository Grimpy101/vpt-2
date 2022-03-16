import Asset from "./assets/Asset.js"

export default class Output {
    _asset: Asset;
    _error: Error;
    _valid: boolean;

    isValid(): boolean {
        return this._valid;
    }

    getAsset(): Asset {
        return this._asset;
    }

    getError(): Error {
        return this._error;
    }
}