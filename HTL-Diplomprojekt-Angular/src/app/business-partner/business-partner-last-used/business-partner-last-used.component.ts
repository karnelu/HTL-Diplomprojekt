import { Component, OnInit } from '@angular/core';
import { BusinessPartner } from '../business-partner';
import { BusinessPartnerService } from '../business-partner.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-business-partner-last-used',
  templateUrl: './business-partner-last-used.component.html',
  styleUrls: ['./business-partner-last-used.component.css']
})
export class BusinessPartnerLastUsedComponent implements OnInit {

  businessPartners$: Observable<BusinessPartner[]>;
  expanded = [];

  constructor(private businessPartnerService: BusinessPartnerService) { }

  ngOnInit() {
    this.getBusinessPartners();
  }

  getBusinessPartners(): void {
    this.businessPartners$ = this.businessPartnerService.getBusinessPartners();
  }

  clicked() {
    console.log('I have been clicked');
  }

}
