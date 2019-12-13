import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let GeschaeftspartnerDetailComponent = class GeschaeftspartnerDetailComponent {
    constructor(route, geschaeftspartnerService) {
        this.route = route;
        this.geschaeftspartnerService = geschaeftspartnerService;
    }
    ngOnInit() {
        this.getOneGP();
    }
    getOneGP() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.geschaeftspartnerService.getOneGP(id)
            .subscribe(gp => this.gp = gp);
    }
};
GeschaeftspartnerDetailComponent = tslib_1.__decorate([
    Component({
        selector: 'app-geschaeftspartner-detail',
        templateUrl: './geschaeftspartner-detail.component.html',
        styleUrls: ['./geschaeftspartner-detail.component.css']
    })
], GeschaeftspartnerDetailComponent);
export { GeschaeftspartnerDetailComponent };
//# sourceMappingURL=geschaeftspartner-detail.component.js.map