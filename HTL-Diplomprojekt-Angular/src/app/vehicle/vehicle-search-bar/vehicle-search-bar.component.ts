import { VehicleService } from './../vehicle.service';
import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Vehicle } from '../vehicle';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { MatPaginator, MatTableDataSource } from '@angular/material';



@Component({
  selector: 'app-vehicle-search-bar',
  templateUrl: './vehicle-search-bar.component.html',
  styleUrls: ['./vehicle-search-bar.component.css']
})
export class VehicleSearchBarComponent implements OnInit {

  

  
  
  private vehicleSearchTerms = new Subject<string>();

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  vehicles$: Observable<any>;
  dataSource: MatTableDataSource<Vehicle> = new MatTableDataSource<Vehicle>();

  constructor(
    private vehicleService: VehicleService,
    private changeDetectorRef: ChangeDetectorRef
    ) {}

  ngOnInit() {
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.vehicles$ = this.dataSource.connect();

    this.vehicleSearchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
 
      // ignore new term if same as previous term
      distinctUntilChanged(),
 
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.vehicleService.searchVehicle(term))).subscribe(vehicles => this.dataSource.data = vehicles);
  }


  
  ngOnDestroy() {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
  }

  searchVehicle(term: string): void {
    this.vehicleSearchTerms.next(term);
  }
}

