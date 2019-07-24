import { BusinessPartnerModule } from './../business-partner/business-partner.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations:[],
  imports: [
    CommonModule,
    BusinessPartnerModule,
    MatCardModule,
    ScrollingModule,
    ScrollDispatchModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
