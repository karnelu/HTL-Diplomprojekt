import { Component, OnInit } from "@angular/core";
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../vehicle';
import { Observable } from 'rxjs';

@Component({
  selector: "app-vehicle-last-scanned",
  templateUrl: "./vehicle-last-scanned.component.html",
  styleUrls: ["./vehicle-last-scanned.component.css"]
})
export class VehicleLastScannedComponent implements OnInit {
  vehicles$: Observable<Vehicle[]>;
  expanded = [];

  constructor(private vehicleService: VehicleService) {}

  clicked() {
    console.log("I have been clicked");

  }

  ngOnInit() { 
    this.getVehicles();
  }

  getVehicles(): void {
    this.vehicles$ = this.vehicleService.getVehicles();
  }


}
