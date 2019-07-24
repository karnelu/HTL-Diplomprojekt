import { BusinessPartnerDetailComponent } from './business-partner-detail/business-partner-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessPartnerRoutingModule } from './business-partner-routing.module';
import { BusinessPartnerLastUsedComponent } from './business-partner-last-used/business-partner-last-used.component';
import { MatCardModule } from '@angular/material/card';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';


@NgModule({
  declarations: [
    BusinessPartnerDetailComponent,
    BusinessPartnerLastUsedComponent
  ],
  exports: [
    BusinessPartnerLastUsedComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ScrollingModule,
    ScrollDispatchModule,
    BusinessPartnerRoutingModule
  ]
})
export class BusinessPartnerModule { }
