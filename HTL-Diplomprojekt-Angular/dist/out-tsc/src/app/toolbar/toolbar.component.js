import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
let ToolbarComponent = class ToolbarComponent {
    constructor(titleService, router, activatedRoute) {
        this.titleService = titleService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = 'angularTitle';
    }
    ngOnInit() {
        const appTitle = this.titleService.getTitle();
        this.router
            .events.pipe(filter(event => event instanceof NavigationEnd), map(() => {
            const child = this.activatedRoute.firstChild;
            if (child.snapshot.data['title']) {
                return child.snapshot.data['title'];
            }
            return appTitle;
        })).subscribe((ttl) => {
            this.titleService.setTitle(ttl);
        });
    }
    gettitle() {
        return this.titleService.getTitle();
    }
    getrouter() {
        return this.router;
    }
};
ToolbarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-toolbar',
        templateUrl: './toolbar.component.html',
        styleUrls: ['./toolbar.component.css']
    })
], ToolbarComponent);
export { ToolbarComponent };
//# sourceMappingURL=toolbar.component.js.map