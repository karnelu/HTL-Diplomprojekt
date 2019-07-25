import { QrScannerComponent } from './qr-scanner/qr-scanner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule,} from '@angular/material';
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
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    VehicleRoutingModule,
  ]
})
export class VehicleModule { }
