import { QrScannerComponent } from './qr-scanner/qr-scanner.component';
import { TermineComponent } from './termine/termine.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeschaeftspartnerComponent } from './geschaeftspartner/geschaeftspartner.component';
import { FahrzeugeComponent } from './fahrzeuge/fahrzeuge.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, },
  { path: 'geschaeftspartner', component: GeschaeftspartnerComponent, },
  { path: 'fahrzeuge', component: FahrzeugeComponent, },
  { path: 'termine', component: TermineComponent, },
  { path: 'qr-scanner', component: QrScannerComponent, },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full', },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
