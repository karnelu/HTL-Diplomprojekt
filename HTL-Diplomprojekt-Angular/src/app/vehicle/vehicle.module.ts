import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToolbarModule } from '../toolbar/toolbar.module';

import { QrScannerComponent } from './qr-scanner/qr-scanner.component';
import { VehicleLastScannedComponent } from './vehicle-last-scanned/vehicle-last-scanned.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { VehicleRoutingModule } from './vehicle-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule, MatIconModule, MatSortModule, MatProgressSpinnerModule, MatTableModule } from '@angular/material';
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
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';




import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VehicleSearchBarComponent } from './vehicle-search-bar/vehicle-search-bar.component';
import { VehicleEditComponent } from './vehicle-edit/vehicle-edit.component';





@NgModule({
  declarations: [
    VehicleDetailComponent,
    VehicleLastScannedComponent,
    QrScannerComponent,
    VehicleSearchBarComponent,
    VehicleEditComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,

    HttpClientModule,

    ReactiveFormsModule,
    ToolbarModule,
    ScrollingModule,
    ScrollDispatchModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
    

    VehicleRoutingModule
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
