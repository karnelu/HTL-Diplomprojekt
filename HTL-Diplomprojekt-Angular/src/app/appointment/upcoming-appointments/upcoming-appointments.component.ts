import { Component, OnInit, SystemJsNgModuleLoader, Input } from '@angular/core';
import { Appointment } from 'src/app/appointment/appointment';
import { AppointmentService } from '../appointment.service';
import { Observable } from 'rxjs';
import { BusinessPartner } from 'src/app/business-partner/business-partner';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AppointmentEditComponent } from '../appointment-edit/appointment-edit.component';
export interface DialogData {
  appointment: Appointment;
}


@Component({
  selector: 'app-upcoming-appointments',
  templateUrl: './upcoming-appointments.component.html',
  styleUrls: ['./upcoming-appointments.component.css']
})
export class UpcomingAppointmentsComponent implements OnInit {

  @Input() bpID: number;
  @Input() businessPartner: BusinessPartner;
 

  appointments: Appointment[];
  appointment: Appointment;

  items = Array.from({length: 5}).map((_, i) => `Item #${i}`);

  constructor(private appointmentService: AppointmentService,private route: ActivatedRoute,
    private dialog: MatDialog,) { 
   
  }

  ngOnInit() {
    this.getAppointments();
    
  }

  openDialog(appointment: Appointment): void {
    const dialogRef = this.dialog.open(AppointmentEditComponent, {
      maxWidth: '100vw',
      height: '100vh',
      hasBackdrop: false,
      panelClass: 'myapp-no-padding-dialog',
      width: '100vw',
      data: { appointment: appointment }
    });

  }

  //fixx the refresh for appointments !

  getAppointment(){
    
  }

  getAppointments(): void {
    this.appointmentService.getAppointments(this.businessPartner.bpID).subscribe(appointments => this.appointments = appointments);  
  }

  deleteAppointment(appointmentID: number): void{
    this.appointmentService.deleteAppointment(appointmentID).subscribe(res=> {
      console.log(res + "Appointment deleted");
    });
  }

}
