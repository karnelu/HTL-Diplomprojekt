// ##### ANGULAR MODULES ##### \\
import { NgModule } from '@angular/core';

// ##### APP MODULES ##### \\
import { CommonImportsModule } from 'src/common-modules/common-imports.module';
import { AppointmentModule } from './../appointment/appointment.module';
import { HttpClientModule } from '@angular/common/http';
import { BusinessPartnerRoutingModule } from './business-partner-routing.module';
import { ToolbarModule } from '../toolbar/toolbar.module';

// ##### APP COMPONENTS ##### \
import { BusinessPartnerDetailComponent } from './business-partner-detail/business-partner-detail.component';
import { BusinessPartnerLastUsedComponent } from './business-partner-last-used/business-partner-last-used.component';
import { BusinessPartnerEditComponent } from './business-partner-edit/business-partner-edit.component';
import { BusinessPartnerSearchBarComponent } from './business-partner-search-bar/business-partner-search-bar.component';
import { BusinessPartnerDetailFabComponent } from './business-partner-detail-fab/business-partner-detail-fab.component';
import { BusinessPartnerNewAppointmentComponent } from './business-partner-new-appointment/business-partner-new-appointment.component';
import { BusinessPartnerNewComponent } from './business-partner-new/business-partner-new.component';
import { BusinessPartnerNewFabComponent } from './business-partner-new-fab/business-partner-new-fab.component';

@NgModule({
  declarations: [
    BusinessPartnerDetailComponent,
    BusinessPartnerLastUsedComponent,
    BusinessPartnerEditComponent,
    BusinessPartnerSearchBarComponent,
    BusinessPartnerDetailFabComponent,
    BusinessPartnerNewAppointmentComponent,
    BusinessPartnerNewComponent,
    BusinessPartnerNewFabComponent,
  ],
  exports: [
    BusinessPartnerDetailComponent,
    BusinessPartnerLastUsedComponent,
    BusinessPartnerEditComponent,
    BusinessPartnerSearchBarComponent,
    BusinessPartnerDetailFabComponent,
    BusinessPartnerNewAppointmentComponent,
    BusinessPartnerNewFabComponent,
    BusinessPartnerNewComponent,
  ],
  imports: [
    CommonImportsModule,
    AppointmentModule,
    ToolbarModule,
    HttpClientModule,
    BusinessPartnerRoutingModule,
  ],
  entryComponents: [BusinessPartnerEditComponent, BusinessPartnerNewAppointmentComponent, BusinessPartnerNewComponent,],
})
export class BusinessPartnerModule { }


