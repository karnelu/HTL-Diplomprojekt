import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../vehicle';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { VehicleEditComponent } from '../vehicle-edit/vehicle-edit.component';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: "app-vehicle-detail",
  templateUrl: "./vehicle-detail.component.html",
  styleUrls: ["./vehicle-detail.component.css"]
})
export class VehicleDetailComponent implements OnInit {

  vehicle: Vehicle;
  vehicleDetailEditDialogRef: MatDialogRef<VehicleEditComponent>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vehicleService: VehicleService,
    private location: Location,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getVehicle();
  }

  getVehicle(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.vehicleService.getVehicle(id)
      .subscribe(vehicle => this.vehicle = vehicle);
  }

  openEditDialog() {
    this.vehicleDetailEditDialogRef = this.dialog.open(VehicleEditComponent, {
      maxWidth: '100vw',
      height: '100vh',
      hasBackdrop: false,
      panelClass: 'myapp-no-padding-dialog' ,
      width: '100vw',
    });
  }

 /*  openDialog() {
    this.dialog.open(VehicleEditComponent , {
      maxWidth: '100vw',
      height: '100vh',
      hasBackdrop: false,
      panelClass: 'myapp-no-padding-dialog' ,
       width: '100vw',

    });
  } */

  save(): void {
    this.vehicleService.updateVehicle(this.vehicle)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
