import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogTitle, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { VehicleDetailComponent, DialogData } from '../vehicle-detail/vehicle-detail.component';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.component.html',
  styleUrls: ['./vehicle-edit.component.css']
})
export class VehicleEditComponent implements OnInit {


  selectedFile: File = null;

  // This Variable checks if you selected a File
  fileSelected: boolean;

  constructor(
    public dialogRef: MatDialogRef<VehicleEditComponent>,
    @Inject
    (MAT_DIALOG_DATA) public data: DialogData, 
    private vehicleService: VehicleService
  ) { }

  ngOnInit() {
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    this.fileSelected = true;
  }

  save(): void {
    if (this.fileSelected === true) {
      this.vehicleService.updateVehicle(this.data.vehicle).subscribe(() => this.dialogclose());
      this.vehicleService.onUpload(this.selectedFile, this.data.vehicle.vhcID);
    } else {
      this.vehicleService.updateVehicle(this.data.vehicle).subscribe(() => this.dialogclose());
    }
  }

  dialogclose(): void {
    this.dialogRef.close(this.data.vehicle);
  }

}
