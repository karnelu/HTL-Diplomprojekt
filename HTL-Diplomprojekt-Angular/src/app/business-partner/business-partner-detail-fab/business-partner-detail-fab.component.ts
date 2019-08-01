import { Component, OnInit } from '@angular/core';
import { businessPartnerDetailFabAnimations } from './business-partner.detail-fab.animations';
@Component({
  selector: 'app-business-partner-detail-fab',
  templateUrl: './business-partner-detail-fab.component.html',
  styleUrls: ['./business-partner-detail-fab.component.css'],
  animations: businessPartnerDetailFabAnimations,
})
export class BusinessPartnerDetailFabComponent implements OnInit {
  fabButtons = [
    {
      icon: 'event'
    },
    {
      icon: 'email'
    },
    {
      icon: 'sms'
    },
    {
      icon: 'call'
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
}
