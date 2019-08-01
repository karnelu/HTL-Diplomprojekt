import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BusinessPartnerService } from '../business-partner.service';
import { BusinessPartner } from '../business-partner';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../business-partner-detail/business-partner-detail.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-business-partner-edit',
  templateUrl: './business-partner-edit.component.html',
  styleUrls: ['./business-partner-edit.component.css']
})
export class BusinessPartnerEditComponent implements OnInit {

  selectedFile: File = null;

  // This Variable checks if you selected a File
  fileSelected: boolean;



  constructor(
    private location: Location,
    public dialogRef: MatDialogRef<BusinessPartnerEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private businessPartnerService: BusinessPartnerService, ) { }

  ngOnInit() {
  }

  onFileSelected(event) {

    this.selectedFile = <File>event.target.files[0];
    this.fileSelected = true;

  }

  save(): void {

    if (this.fileSelected === true) {
      this.businessPartnerService.updateBusinessPartner(this.data.businessPartner).subscribe(() => this.dialogclose());
      this.businessPartnerService.onUpload(this.selectedFile, this.data.businessPartner.bpID);
    } else {
      this.businessPartnerService.updateBusinessPartner(this.data.businessPartner).subscribe(() => this.dialogclose());
    }

  }


  dialogclose(): void {
    this.dialogRef.close(this.data.businessPartner);
  }
}

