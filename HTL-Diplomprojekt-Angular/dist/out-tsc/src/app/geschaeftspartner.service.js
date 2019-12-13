import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { GESCHAEFTSPARTNER } from './mock-GP';
import { of } from 'rxjs';
let GeschaeftspartnerService = class GeschaeftspartnerService {
    constructor() { }
    getGP() {
        return of(GESCHAEFTSPARTNER);
    }
    getOneGP(id) {
        return of(GESCHAEFTSPARTNER.find(GP => GP.id === id));
    }
};
GeschaeftspartnerService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], GeschaeftspartnerService);
export { GeschaeftspartnerService };
//# sourceMappingURL=geschaeftspartner.service.js.map