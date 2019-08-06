import { BusinessPartnerNewComponent } from './../business-partner-new/business-partner-new.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-business-partner-new-fab',
  templateUrl: './business-partner-new-fab.component.html',
  styleUrls: ['./business-partner-new-fab.component.css']
})
export class BusinessPartnerNewFabComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openNewBusinessPartnerDialog(){
    const dialogRef = this.dialog.open(BusinessPartnerNewComponent, {
      maxWidth: '100vw',
      height: '100vh',
      hasBackdrop: false,
      panelClass: 'myapp-no-padding-dialog',
      width: '100vw',

    });
    dialogRef.beforeClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
