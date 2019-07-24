import { Vehicle } from './vehicle';
import { VEHICLES } from './mock-vehicles';
import { Observable , of} from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor() { }

  getVehicles(): Observable<Vehicle[]> {
    return of(VEHICLES);
  }

  getVehicle(id: number): Observable<Vehicle> {
    return of(VEHICLES.find(vehicle => vehicle.id === id));
  }

}
