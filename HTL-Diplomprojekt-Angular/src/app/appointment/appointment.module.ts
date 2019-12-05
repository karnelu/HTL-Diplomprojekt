// ##### ANGULAR MODULES ##### \\
import { NgModule } from '@angular/core';

// ##### APP MODULES ##### \\
import { CommonImportsModule } from 'src/common-modules/common-imports.module';
import { AppointmentRoutingModule } from './appointment-routing.module';

// ##### APP COMPONENTS ##### \\
import { UpcomingAppointmentsComponent } from './upcoming-appointments/upcoming-appointments.component';

@NgModule({
  declarations: [UpcomingAppointmentsComponent],
  imports: [
    CommonImportsModule,
    AppointmentRoutingModule,
  ],
  exports: [
    UpcomingAppointmentsComponent,
  ],
})
export class AppointmentModule { }
