import { Component, OnInit } from '@angular/core';
import { MatDialogTitle, MatDialogRef } from '@angular/material';
import { VehicleDetailComponent } from '../vehicle-detail/vehicle-detail.component';

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.component.html',
  styleUrls: ['./vehicle-edit.component.css']
})
export class VehicleEditComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<VehicleDetailComponent>
  ) { }

  ngOnInit() {
  }

}
