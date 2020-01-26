import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from 'src/app/appointment/upcoming-appointments/upcoming-appointments.component';
import { AppointmentService } from '../appointment.service';
@Component({
  selector: 'app-appointment-delete-dialog',
  templateUrl: './appointment-delete-dialog.component.html',
  styleUrls: ['./appointment-delete-dialog.component.css']
})
export class AppointmentDeleteDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AppointmentDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private appointmentService: AppointmentService) { 
  
    }

  ngOnInit() {
  }

  deleteAppointment(appointmentID: number): void{
    this.appointmentService.deleteAppointment(appointmentID).subscribe(res=> {
      console.log(res + "Appointment deleted");
    });
    this.dialogclose();
  }

  dialogclose(): void {
    this.dialogRef.close();
  }

}
