import { Component, OnInit, SystemJsNgModuleLoader, Input } from '@angular/core';
import { Appointment } from 'src/app/appointment/appointment';
import { AppointmentService } from '../appointment.service';
import { Observable } from 'rxjs';
import { BusinessPartner } from 'src/app/business-partner/business-partner';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AppointmentEditComponent } from '../appointment-edit/appointment-edit.component';


@Component({
  selector: 'app-upcoming-appointments',
  templateUrl: './upcoming-appointments.component.html',
  styleUrls: ['./upcoming-appointments.component.css']
})
export class UpcomingAppointmentsComponent implements OnInit {

  @Input() bpID: number;
  @Input() businessPartner: BusinessPartner;
  appointments: Observable<Appointment[]>;
  appointment = new Appointment;
 

  items = Array.from({length: 5}).map((_, i) => `Item #${i}`);

  constructor(private appointmentService: AppointmentService,private route: ActivatedRoute,
    private location: Location,
    private dialog: MatDialog,) { 
   
  }

  ngOnInit() {
    this.businessPartner = new BusinessPartner();
    this.businessPartner.bpID = this.bpID;
    this.getAppointments();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AppointmentEditComponent, {
      maxWidth: '100vw',
      height: '100vh',
      hasBackdrop: false,
      panelClass: 'myapp-no-padding-dialog',
      width: '100vw',
    });
  }

  getAppointments(): void {
    this.appointments = this.appointmentService.getAppointments(this.businessPartner.bpID);  
  }

}
