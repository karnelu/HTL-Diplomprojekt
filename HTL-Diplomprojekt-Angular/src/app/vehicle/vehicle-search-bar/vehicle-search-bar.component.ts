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
  options: string[] = ['One', 'Two', 'Three'];

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.getVehicles;
  }

  onClickDelete() {
    this.vehicleSearchValue = null;
  }

  getVehicles(): void {
    this.vehicleService
      .getVehicles()
      .subscribe(vehicles => (this.vehicles = vehicles));
  }
}
