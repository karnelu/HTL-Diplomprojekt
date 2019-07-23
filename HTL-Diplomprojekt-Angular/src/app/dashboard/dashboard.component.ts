import { Vehicle } from './../vehicle';
import { VehicleService } from './../services/vehicle.service';
import { Component, OnInit, Input, Output, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import {BusinessPartner } from '../business-partner';
import { BusinessPartnerService } from '../services/business-partner.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})



export class DashboardComponent implements OnInit {

  businessPartners: BusinessPartner[] = [];
  vehicles: Vehicle[] = [];

  constructor(
    private businessPartnerService: BusinessPartnerService,
    private vehicleService: VehicleService,
    ) { }


  clicked(){
    console.log('I have been clicked');
  }

  ngOnInit() {
    this.getBusinessPartners();
    this.getVehicles();
  }

  getBusinessPartners(): void {
    this.businessPartnerService.getBusinessPartners().subscribe(businessPartners => this.businessPartners = businessPartners);
  }

  getVehicles(): void {
    this.vehicleService.getVehicles().subscribe(vehicles => this.vehicles = vehicles);
  }

}
