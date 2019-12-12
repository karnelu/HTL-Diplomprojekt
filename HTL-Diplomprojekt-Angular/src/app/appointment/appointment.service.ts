import { Injectable } from '@angular/core';
import { Appointment } from 'src/app/appointment/appointment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { connection } from 'src/app/connection';
import { Observable, of} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {


  private conn= new connection;
  private appointmentUrl = this.conn + this.conn.appointment;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  newAppointment(appointment: Appointment): Observable<any>{
    return this.http.post<Appointment>('http://localhost:8080/appointment/new', appointment, this.httpOptions).pipe(
      catchError(this.handleError<Appointment[]>('new', [])));
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
