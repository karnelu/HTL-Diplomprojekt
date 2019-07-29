import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../vehicle';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: "app-vehicle-detail",
  templateUrl: "./vehicle-detail.component.html",
  styleUrls: ["./vehicle-detail.component.css"]
})
export class VehicleDetailComponent implements OnInit {

  vehicle: Vehicle;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vehicleService: VehicleService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getVehicle();
  }

  getVehicle(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.vehicleService.getVehicle(id)
      .subscribe(vehicle => this.vehicle = vehicle);
  }

  save(): void {
    this.vehicleService.updateVehicle(this.vehicle)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
