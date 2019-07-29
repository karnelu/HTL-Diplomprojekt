import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataVehicleService }  from './in-memory-data-vehicle.service';

import { QrScannerComponent } from './qr-scanner/qr-scanner.component';
import { VehicleLastScannedComponent } from './vehicle-last-scanned/vehicle-last-scanned.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { VehicleRoutingModule } from './vehicle-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule, MatIconModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VehicleSearchBarComponent } from './vehicle-search-bar/vehicle-search-bar.component';





@NgModule({
  declarations: [
    VehicleDetailComponent,
    VehicleLastScannedComponent,
    QrScannerComponent,
    VehicleSearchBarComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,

    HttpClientModule,
    HttpClientInMemoryWebApiModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataVehicleService, { dataEncapsulation: false }
    ),

    ReactiveFormsModule,

    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    ScrollingModule,
    ScrollDispatchModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatSelectModule,

    VehicleRoutingModule
  ],
  exports: [
    VehicleLastScannedComponent,
    VehicleDetailComponent,
    VehicleSearchBarComponent
  ]
})
export class VehicleModule { }
