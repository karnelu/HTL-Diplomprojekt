import { Component, OnInit, NgZone } from '@angular/core';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
@Component({
  selector: 'app-new-business-partner-appointment',
  templateUrl: './new-business-partner-appointment.component.html',
  styleUrls: ['./new-business-partner-appointment.component.css']
})
export class NewBusinessPartnerAppointmentComponent implements OnInit {


  appointment= new Appointment;
  autosize: CdkTextareaAutosize;
  constructor(private _ngZone: NgZone, private service: AppointmentService) { }

  ngOnInit() {
  }
  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  newAppointment() : void{
    this.service.newAppointment(this.appointment).subscribe(res=> {
      console.log(res);
    });
  }

}
