import { Component, OnInit, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from 'src/app/business-partner/business-partner-detail/business-partner-detail.component';
import { AppointmentService } from '../appointment.service';

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
  }

  dialogclose(): void {
    this.dialogRef.close();
  }
}
