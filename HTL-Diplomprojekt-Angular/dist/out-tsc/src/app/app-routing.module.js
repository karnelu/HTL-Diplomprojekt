import * as tslib_1 from "tslib";
import { FahrzeugeDetailComponent } from './fahrzeuge-detail/fahrzeuge-detail.component';
import { QrScannerComponent } from './qr-scanner/qr-scanner.component';
import { TermineComponent } from './termine/termine.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GeschaeftspartnerComponent } from './geschaeftspartner/geschaeftspartner.component';
import { FahrzeugeComponent } from './fahrzeuge/fahrzeuge.component';
import { GeschaeftspartnerDetailComponent } from './geschaeftspartner-detail/geschaeftspartner-detail.component';
const routes = [
    { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },
    {
        path: 'geschaeftspartner', component: GeschaeftspartnerComponent, data: { title: 'Geschäftspartner' },
    },
    { path: 'geschaeftspartner-detail', component: GeschaeftspartnerDetailComponent, data: { title: 'Geschäftspartner-Detail' } },
    { path: 'fahrzeuge', component: FahrzeugeComponent, data: { title: 'Fahrzeuge' } },
    { path: 'fahrzeuge-detail', component: FahrzeugeDetailComponent, data: { title: 'Fahrzeuge-detail' } },
    { path: 'termine', component: TermineComponent, data: { title: 'Termine' } },
    { path: 'qr-scanner', component: QrScannerComponent, data: { title: 'QR-Scanner' } },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full', data: { title: 'Dashboard' } },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map