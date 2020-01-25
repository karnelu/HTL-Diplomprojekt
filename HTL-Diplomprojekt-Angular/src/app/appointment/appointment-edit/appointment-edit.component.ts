import { Component, OnInit, Inject, Input } from '@angular/core';
import { Location } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from 'src/app/appointment/upcoming-appointments/upcoming-appointments.component';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-appointment-edit',
  templateUrl: './appointment-edit.component.html',
  styleUrls: ['./appointment-edit.component.css']
})
export class AppointmentEditComponent implements OnInit {

 

  constructor(
    public dialogRef: MatDialogRef<AppointmentEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private appointmentService: AppointmentService, ) { }

  ngOnInit() {
    console.log(this.data.appointment);
  }


  saveAppointment(){
    
    var starttimeformat = this.data.appointment.start_time.split(":");
    this.data.appointment.start_date.setHours(+starttimeformat[0]);
    this.data.appointment.start_date.setMinutes(+starttimeformat[1]);

    var endtimeformat = this.data.appointment.end_time.split(":");
    this.data.appointment.end_date.setHours(+endtimeformat[0]);
    this.data.appointment.end_date.setMinutes(+endtimeformat[1]);
    
    this.appointmentService.updateAppointment(this.data.appointment).subscribe(()=>this.dialogclose());
  }
 


  dialogclose(): void {
    this.dialogRef.close();
  }
}
