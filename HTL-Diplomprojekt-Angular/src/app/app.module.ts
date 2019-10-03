
// Modules
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';




// Components
import { VehicleComponent } from './vehicle/vehicle.component';
import { BusinessPartnerComponent } from './business-partner/./business-partner.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
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

import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD

=======
>>>>>>> d944d181d5a6e3605a4033a37e2345a3a4edfca8




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

    BusinessPartnerModule,
    VehicleModule,
    DashboardModule,
    AppointmentModule,
    HttpClientModule,

    AppRoutingModule,





  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
