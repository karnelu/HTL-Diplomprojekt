// ##### ANGULAR MODULES ##### \\
import { NgModule } from '@angular/core';

// ##### APP MODULES ##### \\
import { CommonImportsModule } from 'src/common-modules/common-imports.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { BusinessPartnerModule } from './../business-partner/business-partner.module';

// ##### APP COMPONENTS ##### \

@NgModule({
  declarations: [],
  imports: [
    CommonImportsModule,
    BusinessPartnerModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
