// ##### ANGULAR MODULES ##### \\
import { NgModule } from '@angular/core';

// ##### APP MODULES ##### \\
import { CommonImportsModule } from 'src/common-modules/common-imports.module';
import { AppointmentRoutingModule } from './appointment-routing.module';
import { HttpClientModule } from '@angular/common/http';

// ##### APP COMPONENTS ##### \\
import { UpcomingAppointmentsComponent } from './upcoming-appointments/upcoming-appointments.component';
import { AppointmentComponent } from './appointment.component';
import { NewBusinessPartnerAppointmentComponent } from './new-business-partner-appointment/new-business-partner-appointment.component';
import { AppointmentEditComponent } from './appointment-edit/appointment-edit.component';
import { AppointmentDeleteDialogComponent } from './appointment-delete-dialog/appointment-delete-dialog.component';

@NgModule({
  declarations: [UpcomingAppointmentsComponent, AppointmentComponent, NewBusinessPartnerAppointmentComponent, AppointmentEditComponent],
  imports: [
    CommonImportsModule,
    AppointmentRoutingModule,
    HttpClientModule,
  ],
  exports: [
    UpcomingAppointmentsComponent,
    NewBusinessPartnerAppointmentComponent,
  ],
  entryComponents: [AppointmentDeleteDialogComponent,NewBusinessPartnerAppointmentComponent, AppointmentEditComponent]
})
export class AppointmentModule { }
