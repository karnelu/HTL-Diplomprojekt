import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
/* import {Hero } from './hero';
import { HEROES } from './mock-heroes';
 */
let DashboardComponent = class DashboardComponent {
    constructor(geschaeftspartnerService) {
        this.geschaeftspartnerService = geschaeftspartnerService;
        this.geschaeftspartner = [];
        this.items = Array.from({ length: 20 }).map((_, i) => `Item #${i}`);
    }
    clicked() {
        console.log('I have been clicked');
    }
    ngOnInit() {
        this.getGP();
    }
    getGP() {
        this.geschaeftspartnerService.getGP().subscribe(geschaeftspartner => this.geschaeftspartner = geschaeftspartner);
    }
};
DashboardComponent = tslib_1.__decorate([
    Component({
        selector: 'app-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.css'],
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], DashboardComponent);
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map