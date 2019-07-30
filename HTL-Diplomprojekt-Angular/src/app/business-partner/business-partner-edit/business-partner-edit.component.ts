import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BusinessPartnerService } from '../business-partner.service';
import { BusinessPartner } from '../business-partner';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../business-partner-detail/business-partner-detail.component';



@Component({
  selector: 'app-business-partner-edit',
  templateUrl: './business-partner-edit.component.html',
  styleUrls: ['./business-partner-edit.component.css']
})
export class BusinessPartnerEditComponent implements OnInit {




  constructor(
    public dialogRef: MatDialogRef<BusinessPartnerEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private businessPartnerService: BusinessPartnerService, ) { }

  ngOnInit() {


  }


  onFileSelected(event) {
    this.businessPartnerService.onUpload(<File>event.target.files[0]);

  }

  save(): void {
    this.businessPartnerService.updateBusinessPartner(this.data.businessPartner)
      .subscribe(() => this.dialogRef.close());
  }



  clicked() {
    console.log("I have been clicked");
  }




}

