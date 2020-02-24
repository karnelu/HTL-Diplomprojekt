import { Component, OnInit, SystemJsNgModuleLoader, Input } from '@angular/core';
import { Appointment } from 'src/app/appointment/appointment';
import { AppointmentService } from '../appointment.service';
import { Observable } from 'rxjs';
import { BusinessPartner } from 'src/app/business-partner/business-partner';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AppointmentEditComponent } from '../appointment-edit/appointment-edit.component';
import { AppointmentDeleteDialogComponent } from '../appointment-delete-dialog/appointment-delete-dialog.component';
import { connection } from 'src/app/connection';
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
  private connection= new connection;
 
  appointments: Appointment[];
  appointment: Appointment;

  items = Array.from({length: 5}).map((_, i) => `Item #${i}`);

  constructor(private appointmentService: AppointmentService,private route: ActivatedRoute,
    private dialog: MatDialog, private router: Router) { 
   
  }

  ngOnInit() {
    this.getAppointments();
    
  }

  openDeleteDialog(appointment: Appointment): void{
    const dialogRef = this.dialog.open(AppointmentDeleteDialogComponent,{
      panelClass: 'myapp-no-padding-dialog',
      data: {appointment: appointment}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAppointments();
    });
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
    dialogRef.afterClosed().subscribe(result => {
      this.getAppointments();
    });

  }

  //fixx the refresh for appointments !
  getAppointments(): void {
    this.appointmentService.getAppointments(this.businessPartner.bpID).subscribe(appointments => this.appointments = appointments);  
  }

  deleteAppointment(appointmentID: number): void{
    this.appointmentService.deleteAppointment(appointmentID).subscribe(res=> {
      console.log(res + "Appointment deleted");
    });
  }

  downloadIcsFile(appointmentID: number){
    const  icsDownloadUrl = this.connection.host + '/appointment/download?id='+ appointmentID;
    window.open(icsDownloadUrl);
  }

  sendEmail(appointmentID:String): void{
    this.appointmentService.sendEmail(this.businessPartner.email,appointmentID).subscribe();
  }

}
