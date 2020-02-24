import { Component, OnInit, NgZone, Inject } from '@angular/core';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material'
import { concat } from 'rxjs';
import { Vehicle } from 'src/app/vehicle/vehicle';

@Component({
  selector: 'app-new-business-partner-appointment',
  templateUrl: './new-business-partner-appointment.component.html',
  styleUrls: ['./new-business-partner-appointment.component.css']
})
export class NewBusinessPartnerAppointmentComponent implements OnInit {

  
  vehicles: Vehicle[];
  appointment= new Appointment;

  autosize: CdkTextareaAutosize;
  
  constructor(private _ngZone: NgZone, private service: AppointmentService, @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<NewBusinessPartnerAppointmentComponent>,) { }

  ngOnInit() {
    this.getBusinessPartnerVehicle();
  }
  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  newAppointment() : void{
    
    var starttimeformat = this.appointment.start_time.split(":");
    this.appointment.start_date.setHours(+starttimeformat[0]);
    this.appointment.start_date.setMinutes(+starttimeformat[1]);

    var endtimeformat = this.appointment.end_time.split(":");
    this.appointment.end_date.setHours(+endtimeformat[0]);
    this.appointment.end_date.setMinutes(+endtimeformat[1]);

    
    this.service.newAppointment(this.data.businessPartner.bpID,this.appointment).subscribe(res=> {
      console.log(res);
    });
    this.dialogRef.close();
  }

  getBusinessPartnerVehicle(): void{
    this.service.getBusinessPartnerVehicle(this.data.businessPartner.bpID).subscribe(res=> this.vehicles = res);
  }
  
  selectVehicle(vehicle: Vehicle): void{
    this.appointment.vehicle = vehicle;
    console.log(vehicle);
  }
  
}
