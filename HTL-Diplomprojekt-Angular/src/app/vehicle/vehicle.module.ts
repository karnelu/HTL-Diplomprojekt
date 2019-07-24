import { QrScannerComponent } from './qr-scanner/qr-scanner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehicleLastScannedComponent } from './vehicle-last-scanned/vehicle-last-scanned.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';


@NgModule({
  declarations: [
    VehicleDetailComponent,
    VehicleLastScannedComponent,
    QrScannerComponent
  ],
  exports: [
    VehicleLastScannedComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ScrollingModule,
    ScrollDispatchModule,
    VehicleRoutingModule
  ]
})
export class VehicleModule { }
