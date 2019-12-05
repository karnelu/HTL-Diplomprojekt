// ##### ANGULAR MODULES ##### \\
import { NgModule } from '@angular/core';

// ##### APP MODULES ##### \\
import { CommonImportsModule } from 'src/common-modules/common-imports.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppointmentModule } from './appointment/appointment.module';
import { BusinessPartnerModule } from './business-partner/business-partner.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// ##### APP COMPONENTS ##### \
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { BusinessPartnerComponent } from './business-partner/./business-partner.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { Title } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    VehicleComponent,
    BusinessPartnerComponent,
    ToolbarComponent,
  ],
  imports: [
    CommonImportsModule,
    BusinessPartnerModule,
    VehicleModule,
    DashboardModule,
    AppointmentModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  exports: [ToolbarComponent],

  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
