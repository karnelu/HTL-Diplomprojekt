import { QrScannerComponent } from './qr-scanner/qr-scanner.component';
import { TermineComponent } from './termine/termine.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeschaeftspartnerComponent } from './geschaeftspartner/geschaeftspartner.component';
import { FahrzeugeComponent } from './fahrzeuge/fahrzeuge.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, data: {title: 'Dashboard'}},
  { path: 'geschaeftspartner', component: GeschaeftspartnerComponent, data: {title: 'Geschäftspartner' }},
  { path: 'fahrzeuge', component: FahrzeugeComponent, data: {title: 'Fahrzeuge'}},
  { path: 'termine', component: TermineComponent, data: {title: 'Termine'}},
  { path: 'qr-scanner', component: QrScannerComponent, data: {title: 'QR-Scanner'}},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full', data: {title: 'Dashboard' }},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
