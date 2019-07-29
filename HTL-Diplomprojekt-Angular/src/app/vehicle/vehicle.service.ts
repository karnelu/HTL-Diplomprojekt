import { Vehicle } from './vehicle';
import { Observable , of} from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private vehiclesUrl = 'api/vehicles';  // URL to web api

  constructor(private http: HttpClient,) { }

  getVehicles (): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.vehiclesUrl);
  }

  /** GET vehicle by id.*/
  getVehicle(id: number): Observable<Vehicle> {
  const url = `${this.vehiclesUrl}/${id}`;
  return this.http.get<Vehicle>(url);
  }

  /** PUT: update the vehicle on the server */
  updateVehicle (vehicle: Vehicle): Observable<any> {
  return this.http.put(this.vehiclesUrl, vehicle, this.httpOptions);
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

}
