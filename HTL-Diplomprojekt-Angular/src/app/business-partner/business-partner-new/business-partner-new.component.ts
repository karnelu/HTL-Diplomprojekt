import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-business-partner-new',
  templateUrl: './business-partner-new.component.html',
  styleUrls: ['./business-partner-new.component.css']
})
export class BusinessPartnerNewComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(  public dialogRef: MatDialogRef<BusinessPartnerNewComponent> ,private _formBuilder: FormBuilder,) { }

  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  dialogclose(): void {
    this.dialogRef.close();
  }
}
