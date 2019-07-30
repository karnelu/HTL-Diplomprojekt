import { VehicleService } from './../vehicle.service';
import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-vehicle-search-bar',
  templateUrl: './vehicle-search-bar.component.html',
  styleUrls: ['./vehicle-search-bar.component.css']
})
export class VehicleSearchBarComponent implements OnInit {

  vehicleSearchControl = new FormControl();
  vehicles: Vehicle[] = [];
  vehicleSearchValue: string;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
  }

  onClickDelete() {
    this.vehicleSearchValue = null;
  }

  getVehicles(query: String): void {
    this.vehicleService
      .searchVHC(query)
      .subscribe(vehicles => this.vehicles = vehicles);
  }
}
