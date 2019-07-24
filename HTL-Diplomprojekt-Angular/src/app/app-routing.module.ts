import { QrScannerComponent } from './vehicle/qr-scanner/qr-scanner.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessPartnerComponent } from './business-partner/business-partner.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { BusinessPartnerDetailComponent } from './business-partner/business-partner-detail/business-partner-detail.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },
  {
    path: 'business-partner', component: BusinessPartnerComponent, data: { title: 'Business Partners' }},
  /*     children: [
        {
          path: 'detail', component: BusinessPartnerDetailComponent , data: { title: 'Geschäftspartner-Detail' },
        },
      ]
  }, */
  { path: 'business-partner-detail', component: BusinessPartnerDetailComponent, data: { title: 'Business Partner Detail' } },
  { path: 'vehicle', component: VehicleComponent, data: { title: 'Vehicles' } },
  { path: 'qr-scanner', component: QrScannerComponent, data: { title: 'QR Scanner' } },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full', data: { title: 'Dashboard' } },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
