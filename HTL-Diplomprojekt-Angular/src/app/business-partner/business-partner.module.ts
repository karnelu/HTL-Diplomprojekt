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
import { MatButtonModule, MatIconModule, MatSidenavModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
// Angular Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Flex
import { FlexLayoutModule } from '@angular/flex-layout';

// Components
import { BusinessPartnerLastUsedComponent } from './business-partner-last-used/business-partner-last-used.component';
import { BusinessPartnerDetailComponent } from './business-partner-detail/business-partner-detail.component';

// Routing
import { BusinessPartnerRoutingModule } from './business-partner-routing.module';
import { BusinessPartnerEditComponent } from './business-partner-edit/business-partner-edit.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { ToolbarFullscreenDialogComponent } from '../toolbar/toolbar-fullscreen-dialog/toolbar-fullscreen-dialog.component';
import { ToolbarModule } from '../toolbar/toolbar.module';


@NgModule({
  declarations: [
    BusinessPartnerDetailComponent,
    BusinessPartnerLastUsedComponent,
    BusinessPartnerEditComponent,

  ],
  exports: [
    BusinessPartnerLastUsedComponent,
  ],
  imports: [
    CommonModule,
    AppointmentModule,
    ToolbarModule,
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
    // Angular Flex
    FlexLayoutModule,

    // Angular Animations
    BrowserAnimationsModule,

    // Http
    HttpClientModule,

    // Routing
    BusinessPartnerRoutingModule,
  ],
  entryComponents: [BusinessPartnerEditComponent],
})
export class BusinessPartnerModule { }
