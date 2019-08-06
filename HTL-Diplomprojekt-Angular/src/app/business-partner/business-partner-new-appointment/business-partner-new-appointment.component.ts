import { Component, OnInit, NgZone } from '@angular/core';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-business-partner-new-appointment',
  templateUrl: './business-partner-new-appointment.component.html',
  styleUrls: ['./business-partner-new-appointment.component.css']
})
export class BusinessPartnerNewAppointmentComponent implements OnInit {




  autosize: CdkTextareaAutosize;
  constructor(private _ngZone: NgZone) { }

  ngOnInit() {
  }
  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }
}
