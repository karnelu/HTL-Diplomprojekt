import { BusinessPartnerModule } from './../business-partner/business-partner.module';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule,} from '@angular/material';




@NgModule({
  declarations:[],
  imports: [
    CommonModule,
    BusinessPartnerModule,
    MatCardModule,
    ScrollingModule,
    ScrollDispatchModule,

    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,

    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
