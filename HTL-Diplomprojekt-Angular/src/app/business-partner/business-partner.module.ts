import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppointmentModule } from './../appointment/appointment.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Angular Material
import { MatCardModule } from '@angular/material/card';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule, MatIconModule, MatSidenavModule, MatNativeDateModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
// Angular Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Flex
import { FlexLayoutModule } from '@angular/flex-layout';

// Components
import { BusinessPartnerLastUsedComponent } from './business-partner-last-used/business-partner-last-used.component';
import { BusinessPartnerDetailComponent } from './business-partner-detail/business-partner-detail.component';
import {TextFieldModule} from '@angular/cdk/text-field';
// Routing
import { BusinessPartnerRoutingModule } from './business-partner-routing.module';
import { BusinessPartnerEditComponent } from './business-partner-edit/business-partner-edit.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { ToolbarFullscreenDialogComponent } from '../toolbar/toolbar-fullscreen-dialog/toolbar-fullscreen-dialog.component';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { BusinessPartnerSearchBarComponent } from './business-partner-search-bar/business-partner-search-bar.component';

import { MatSortModule, MatProgressSpinnerModule, MatTableModule } from '@angular/material';

import { MatMenuModule } from '@angular/material/menu';

import { ScrollingModule } from '@angular/cdk/scrolling';

import { MatExpansionModule } from '@angular/material/expansion';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';

import { MatPaginatorModule } from '@angular/material/paginator';
import { BusinessPartnerDetailFabComponent } from './business-partner-detail-fab/business-partner-detail-fab.component';

import { OverlayModule } from '@angular/cdk/overlay';
import { BusinessPartnerNewAppointmentComponent } from './business-partner-new-appointment/business-partner-new-appointment.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
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
    CommonModule,
    AppointmentModule,
    ToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // Angular Material
    ScrollDispatchModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatDialogModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatMenuModule,
    ScrollingModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatPaginatorModule, OverlayModule,MatDatepickerModule,MatNativeDateModule,TextFieldModule,

    // Angular Flex
    FlexLayoutModule,

    // Angular Animations
    BrowserAnimationsModule,

    // Http
    HttpClientModule,

    // Routing
    BusinessPartnerRoutingModule,
  ],
  entryComponents: [BusinessPartnerEditComponent, BusinessPartnerNewAppointmentComponent, BusinessPartnerNewComponent,],
})
export class BusinessPartnerModule { }


