import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule,} from '@angular/material';



import { BusinessPartnerRoutingModule } from './business-partner-routing.module';
import { BusinessPartnerLastUsedComponent } from './business-partner-last-used/business-partner-last-used.component';
import { BusinessPartnerDetailComponent } from './business-partner-detail/business-partner-detail.component';
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
    ScrollDispatchModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    BusinessPartnerRoutingModule,
  ]
})
export class BusinessPartnerModule { }
