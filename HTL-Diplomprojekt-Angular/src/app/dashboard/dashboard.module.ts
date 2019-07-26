import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatIconModule, MatSidenavModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { MatExpansionModule } from '@angular/material/expansion';


import { BusinessPartnerModule } from './../business-partner/business-partner.module';

import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BusinessPartnerModule,

    MatExpansionModule,
    ScrollDispatchModule,
    ScrollingModule,

    MatCardModule,

    MatListModule,
    MatMenuModule,
    MatButtonModule, MatIconModule, MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    FlexLayoutModule,


    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
