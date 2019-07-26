
// Modules
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';




// Components
import { VehicleComponent } from './vehicle/vehicle.component';
import { BusinessPartnerComponent } from './business-partner/./business-partner.component';
import { BusinessPartnerDetailComponent } from './business-partner/business-partner-detail/business-partner-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { QrScannerComponent } from './vehicle/qr-scanner/qr-scanner.component';
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
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
// Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { BusinessPartnerModule } from './business-partner/business-partner.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppointmentModule } from './appointment/appointment.module';
import { ToolbarModule } from './toolbar/toolbar.module';





@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    VehicleComponent,
    BusinessPartnerComponent,
    ToolbarComponent,
  ],
  exports:[ToolbarComponent],
  imports: [
    BrowserModule,
    BusinessPartnerModule,
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
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    VehicleModule,
    DashboardModule,
    AppointmentModule,



    AppRoutingModule,





  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
