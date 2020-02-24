import { Component, OnInit, Inject, Input } from '@angular/core';
import { Location } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from 'src/app/appointment/upcoming-appointments/upcoming-appointments.component';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment';
import { Vehicle } from 'src/app/vehicle/vehicle';

@Component({
  selector: 'app-appointment-edit',
  templateUrl: './appointment-edit.component.html',
  styleUrls: ['./appointment-edit.component.css']
})
export class AppointmentEditComponent implements OnInit {


  vehicles: Vehicle[];
  start_Date : Date;
  end_Date : Date;
 
  

  constructor(
    public dialogRef: MatDialogRef<AppointmentEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private appointmentService: AppointmentService, ) { 
  
    }



  ngOnInit() {
    this.getBusinessPartnerVehicle();
    
   
    
    
    console.log(this.data.appointment);
  }


  saveAppointment(){
    
    
    this.start_Date = new Date(this.data.appointment.start_date);
    this.end_Date = new Date(this.data.appointment.end_date);
    
    var starttimeformat = this.data.appointment.start_time.split(":");
    this.data.appointment.start_date= this.start_Date.setHours(+starttimeformat[0]);
    this.data.appointment.start_date = this.start_Date.setMinutes(+starttimeformat[1]);

    var endtimeformat = this.data.appointment.end_time.split(":");
    this.data.appointment.end_date = this.end_Date.setHours(+endtimeformat[0]);
    this.data.appointment.end_date = this.end_Date.setMinutes(+endtimeformat[1]);
    
    this.appointmentService.updateAppointment(this.data.appointment).subscribe(()=>this.dialogclose());
  }
 


  dialogclose(): void {
    this.dialogRef.close();
  }

  getBusinessPartnerVehicle(): void{
    this.appointmentService.getBusinessPartnerVehicle(this.data.appointment.bp.bpID).subscribe(res=> this.vehicles = res);
  }
  
  selectVehicle(vehicle: Vehicle): void{
    this.data.appointment.vehicle = vehicle;
    console.log(vehicle);
  }
}
