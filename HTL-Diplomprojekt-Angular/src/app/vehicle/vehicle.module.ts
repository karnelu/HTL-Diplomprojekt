// ##### ANGULAR MODULES ##### \\
import { NgModule } from '@angular/core';

// ##### APP MODULES ##### \\
import { CommonImportsModule } from 'src/common-modules/common-imports.module';

// ##### APP COMPONENTS ##### \
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { VehicleLastScannedComponent } from './vehicle-last-scanned/vehicle-last-scanned.component';
import { QrScannerComponent } from './qr-scanner/qr-scanner.component';
import { VehicleSearchBarComponent } from './vehicle-search-bar/vehicle-search-bar.component';
import { VehicleEditComponent } from './vehicle-edit/vehicle-edit.component';

import { HttpClientModule } from '@angular/common/http';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { VehicleRoutingModule } from './vehicle-routing.module';

import { ZXingScannerModule} from '@zxing/ngx-scanner';

@NgModule({
  declarations: [
    VehicleDetailComponent,
    VehicleLastScannedComponent,
    QrScannerComponent,
    VehicleSearchBarComponent,
    VehicleEditComponent
  ],
  imports: [
    
    CommonImportsModule,
    HttpClientModule,
    ToolbarModule,
    VehicleRoutingModule,
    ZXingScannerModule,
  ],
  exports: [
    VehicleLastScannedComponent,
    VehicleDetailComponent,
    VehicleSearchBarComponent,
    VehicleEditComponent
  ],
  entryComponents: [VehicleEditComponent]
})
export class VehicleModule { }
