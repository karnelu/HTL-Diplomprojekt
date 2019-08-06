import { BusinessPartnerNewAppointmentComponent } from './../business-partner-new-appointment/business-partner-new-appointment.component';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { businessPartnerDetailFabAnimations } from './business-partner.detail-fab.animations';
import { BusinessPartner } from '../business-partner';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-business-partner-detail-fab',
  templateUrl: './business-partner-detail-fab.component.html',
  styleUrls: ['./business-partner-detail-fab.component.css'],
  animations: businessPartnerDetailFabAnimations,
})
export class BusinessPartnerDetailFabComponent implements OnInit {

  @Input() businessPartner: BusinessPartner;

  fabButtons = [
    {
      icon: 'today',
      action: this.buttonEventAction,
    },
    {
      icon: 'email',
      action: this.buttonEmailAction,
    },
    {
      icon: 'sms',
      action: this.buttonSmsAction,
    },
    {
      icon: 'call',
      action: this.buttonCallAction,
    }
  ];

  buttons = [];
  fabTogglerState = 'inactive';

  constructor(private dialog: MatDialog, ) { }

  ngOnInit() {
  }

  showItems() {
    this.fabTogglerState = 'active';
    this.buttons = this.fabButtons;
  }

  hideItems() {
    this.fabTogglerState = 'inactive';
    this.buttons = [];
  }

  onToggleFab() {
    this.buttons.length ? this.hideItems() : this.showItems();
  }

  openNewAppointmentDialog(): void {
    const dialogRef = this.dialog.open(BusinessPartnerNewAppointmentComponent, {
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

  onButtonClick(btn) {
    if (btn.action) {
      return btn.action();
    }
  }

  buttonEventAction() {
    return console.log('Event');
  }

  buttonEmailAction() {
    return console.log('Email');
  }

  buttonSmsAction() {
    return console.log('SMS');
  }

  buttonCallAction() {
    return console.log('Call');
  }

  clicked() {
    return console.log('Hello');
  }
}
