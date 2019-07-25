import { AppointmentModule } from './../appointment/appointment.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Angular Material
import { MatCardModule } from '@angular/material/card';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule, MatIconModule, MatSidenavModule } from '@angular/material';

// Angular Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Flex
import { FlexLayoutModule } from '@angular/flex-layout';

// Components
import { BusinessPartnerLastUsedComponent } from './business-partner-last-used/business-partner-last-used.component';
import { BusinessPartnerDetailComponent } from './business-partner-detail/business-partner-detail.component';

// Routing
import { BusinessPartnerRoutingModule } from './business-partner-routing.module';

@NgModule({
  declarations: [
    BusinessPartnerDetailComponent,
    BusinessPartnerLastUsedComponent,
  ],
  exports: [
    BusinessPartnerLastUsedComponent,
  ],
  imports: [
    CommonModule,
    AppointmentModule,
    // Angular Material
    ScrollDispatchModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,

    // Angular Flex
    FlexLayoutModule,

    // Angular Animations
    BrowserAnimationsModule,



    // Routing
    BusinessPartnerRoutingModule,
  ]
})
export class BusinessPartnerModule { }
