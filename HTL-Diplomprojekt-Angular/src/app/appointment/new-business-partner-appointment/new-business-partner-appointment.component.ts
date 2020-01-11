import { Component, OnInit, NgZone, Inject } from '@angular/core';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material'
import { concat } from 'rxjs';

@Component({
  selector: 'app-new-business-partner-appointment',
  templateUrl: './new-business-partner-appointment.component.html',
  styleUrls: ['./new-business-partner-appointment.component.css']
})
export class NewBusinessPartnerAppointmentComponent implements OnInit {


  appointment= new Appointment;
  start_date: Date;
  start_time: string;
  end_date: Date;
  end_time: string;
  autosize: CdkTextareaAutosize;
  
  constructor(private _ngZone: NgZone, private service: AppointmentService, @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<NewBusinessPartnerAppointmentComponent>,) { }

  ngOnInit() {

  }
  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  newAppointment() : void{
    
    var starttimeformat = this.start_time.split(":");
    this.start_date.setHours(+starttimeformat[0]);
    this.start_date.setMinutes(+starttimeformat[1]);
    this.appointment.start_date = this.start_date;

    var endtimeformat = this.end_time.split(":");
    this.end_date.setHours(+endtimeformat[0]);
    this.end_date.setMinutes(+endtimeformat[1]);
    this.appointment.end_date = this.end_date;

    this.service.newAppointment(this.data.businessPartner.bpID,this.appointment).subscribe(res=> {
      console.log(res);
    });
    this.dialogRef.close();
  }

  


  
}
