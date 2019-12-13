import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let GeschaeftspartnerService = class GeschaeftspartnerService {
    constructor(http) {
        this.http = http;
        this.gpUrl = '//localhost:9090/geschaeftspartner';
    }
    getGp() {
        return this.http.get(this.gpUrl);
    }
};
GeschaeftspartnerService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], GeschaeftspartnerService);
export { GeschaeftspartnerService };
//# sourceMappingURL=geschaeftspartner.service.js.map