import { Vehicle } from './vehicle';
import { Observable , of} from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private vehiclesUrl = 'http://localhost:8080/vehicle';
  private searchVehicleURL = 'http://localhost:8080/vehicle/search?type=brand&q=';

  httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

  constructor(private http: HttpClient) { }

  getVehicles (): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.vehiclesUrl+'/getLastScanned');
  }

  /** GET vehicle by id.*/
  getVehicle(id: number): Observable<Vehicle> {
  const url = `${this.vehiclesUrl}/${id}`;
  return this.http.get<Vehicle>(url);
  }

  /** Post: update the vehicle on the server */
  updateVehicle (vehicle: Vehicle): Observable<any> {
  return this.http.post(this.vehiclesUrl, vehicle, this.httpOptions);
  }


  searchVehicle(query: string): Observable<Vehicle[]> {
    if (!query.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Vehicle[]>(this.searchVehicleURL + query).pipe(
      catchError(this.handleError)
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
