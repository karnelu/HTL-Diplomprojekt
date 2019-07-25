import { Component, OnInit } from '@angular/core';
import { BusinessPartner } from '../business-partner';
import { ActivatedRoute, Router } from '@angular/router';
import { BusinessPartnerService } from '../business-partner.service';
import { switchMap } from "rxjs/operators";
import { Location } from '@angular/common';

@Component({
  selector: 'app-business-partner-detail',
  templateUrl: './business-partner-detail.component.html',
  styleUrls: ['./business-partner-detail.component.css']
})
export class BusinessPartnerDetailComponent implements OnInit {

  items = Array.from({length: 10}).map((_, i) => `Item #${i}`);

  businessPartner: BusinessPartner;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private businessPartnerService: BusinessPartnerService,
    private location: Location
  ) {}

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


