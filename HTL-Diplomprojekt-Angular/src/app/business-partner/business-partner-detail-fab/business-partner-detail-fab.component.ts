import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { businessPartnerDetailFabAnimations } from './business-partner.detail-fab.animations';
import { BuiltinType } from '@angular/compiler';
@Component({
  selector: 'app-business-partner-detail-fab',
  templateUrl: './business-partner-detail-fab.component.html',
  styleUrls: ['./business-partner-detail-fab.component.css'],
  animations: businessPartnerDetailFabAnimations,
})
export class BusinessPartnerDetailFabComponent implements OnInit {

  fabButtons = [
    {
      icon: 'event',
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

  constructor() { }

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


  onButtonClick(btn) {
    if (btn.link) {
      // Navigate to link
    }
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

}
