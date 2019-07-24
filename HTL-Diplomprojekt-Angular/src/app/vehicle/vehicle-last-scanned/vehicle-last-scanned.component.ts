import { Component, OnInit } from "@angular/core";
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../vehicle';

@Component({
  selector: "app-vehicle-last-scanned",
  templateUrl: "./vehicle-last-scanned.component.html",
  styleUrls: ["./vehicle-last-scanned.component.css"]
})
export class VehicleLastScannedComponent implements OnInit {
  vehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleService) {}

  clicked() {
    console.log("I have been clicked");
  }

  ngOnInit() {
    this.getVehicles();
  }

  getVehicles(): void {
    this.vehicleService
      .getVehicles()
      .subscribe(vehicles => (this.vehicles = vehicles));
  }
}
