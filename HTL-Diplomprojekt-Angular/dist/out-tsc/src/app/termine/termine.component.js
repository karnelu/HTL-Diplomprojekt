import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let TermineComponent = class TermineComponent {
    constructor() {
        this.test = 'left';
    }
    ngOnInit() {
    }
    onSwipe() {
        console.log(this.test);
    }
};
TermineComponent = tslib_1.__decorate([
    Component({
        selector: 'app-termine',
        templateUrl: './termine.component.html',
        styleUrls: ['./termine.component.css']
    })
], TermineComponent);
export { TermineComponent };
//# sourceMappingURL=termine.component.js.map