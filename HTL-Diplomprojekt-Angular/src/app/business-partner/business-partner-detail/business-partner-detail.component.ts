import { Component, OnInit, Output} from '@angular/core';
import { BusinessPartner } from '../business-partner';
import { ActivatedRoute, Router } from '@angular/router';
import { BusinessPartnerService } from '../business-partner.service';
import { switchMap } from "rxjs/operators";
import { Location } from '@angular/common';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BusinessPartnerEditComponent } from '../business-partner-edit/business-partner-edit.component';

export interface DialogData {
  businessPartner: BusinessPartner;

}

@Component({
  selector: 'app-business-partner-detail',
  templateUrl: './business-partner-detail.component.html',
  styleUrls: ['./business-partner-detail.component.css']
})
export class BusinessPartnerDetailComponent implements OnInit {

  @Output()

  items = Array.from({ length: 10 }).map((_, i) => `Item #${i}`);

  businessPartner: BusinessPartner;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private businessPartnerService: BusinessPartnerService,
    private location: Location,
    private dialog: MatDialog,
  ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(BusinessPartnerEditComponent, {
      maxWidth: '100vw',
      height: '100vh',
      hasBackdrop: false,
      panelClass: 'myapp-no-padding-dialog',
      width: '100vw',
      data: { businessPartner: this.businessPartner }

    });
    dialogRef.beforeClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (!result) {
        this.businessPartner = result;
      } else {
        this.getBusinessPartner();
      }
    });
  }

  ngOnInit() {
    this.getBusinessPartner();
  }

  getBusinessPartner(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.businessPartnerService.getBusinessPartner(id)
      .subscribe(businessPartner => this.businessPartner = businessPartner);
  }

  goBack(): void {
    this.location.back();
  }
}

