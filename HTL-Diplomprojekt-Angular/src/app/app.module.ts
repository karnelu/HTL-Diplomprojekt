
// Modules
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

// Components
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';

import { BusinessPartnerComponent } from './business-partner/./business-partner.component';
import { BusinessPartnerDetailComponent } from './business-partner-detail/business-partner-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { QrScannerComponent } from './qr-scanner/qr-scanner.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


// Angular Material Section
import { MatButtonModule, MatIconModule, MatSidenavModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { MatExpansionModule } from '@angular/material/expansion';
// Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    VehicleComponent,
    VehicleDetailComponent,
    BusinessPartnerComponent,
    BusinessPartnerDetailComponent,
    ToolbarComponent,
    QrScannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,

    // Angular Material Imports
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    ScrollingModule,
    ScrollDispatchModule,
    MatExpansionModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
