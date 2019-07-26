import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule} from '@angular/cdk/scrolling';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppointmentRoutingModule } from './appointment-routing.module';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';

import {MatDividerModule} from '@angular/material/divider';
import { UpcomingAppointmentsComponent } from './upcoming-appointments/upcoming-appointments.component';




@NgModule({
  declarations: [UpcomingAppointmentsComponent],
  imports: [
    CommonModule,


    ScrollingModule,MatDividerModule,
    FlexLayoutModule,ScrollDispatchModule,MatCardModule,

    AppointmentRoutingModule,
  ],
  exports: [
    UpcomingAppointmentsComponent,
  ],
})
export class AppointmentModule { }
