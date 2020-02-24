import { Injectable } from '@angular/core';
import { Appointment } from 'src/app/appointment/appointment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { connection } from 'src/app/connection';
import { Observable, of} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Vehicle } from '../vehicle/vehicle';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {


  private conn= new connection;
  private appointmentUrl = this.conn.host + this.conn.appointment;
  private businessPartnerUrl = this.conn.host + this.conn.businesspartner;
  private httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'Acces-Control-Allow-Origin': '*',
  })
  };

  constructor(private http: HttpClient) { }

  newAppointment(bpID: number, appointment: Appointment): Observable<any>{
    return this.http.post<Appointment>(this.appointmentUrl + 'new?bpid='+ bpID, appointment, this.httpOptions).pipe(
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

  getAppointments(bpid: number): Observable<Appointment[]>{
    return this.http.get<Appointment[]>(this.businessPartnerUrl + bpid + '/getAppointments');
  }
 
  getAppointment(appointmentID: number): Observable<Appointment>{
    return this.http.get<Appointment>(this.appointmentUrl + appointmentID +'/getAppointment');
  }

  deleteAppointment(appointmentID: number): Observable<{}>{
    return this.http.delete(this.appointmentUrl + 'delete?id='+ appointmentID, this.httpOptions).pipe(
      catchError(this.handleError('deleteHero'))
    );
  }

  updateAppointment(appointment: Appointment): Observable<any> {
    return this.http.post(this.appointmentUrl + 'update', appointment, this.httpOptions).pipe(
      catchError(this.handleError<Appointment[]>('updateAppointment', [])));
  }

  getIcsFile(appointmentID: number){
    return this.http.get(this.appointmentUrl + 'download?id='+ appointmentID, this.httpOptions); 
  }

  getBusinessPartnerVehicle(bpID: number): Observable <Vehicle[]>{
    return this.http.get<Vehicle[]>(this.businessPartnerUrl + bpID + '/getVehicles', this.httpOptions);
  }

  sendEmail(bpEmail: any, appointmentID: String): Observable<any>{
    return this.http.put(this.appointmentUrl +'send?id=' + appointmentID, {'email': bpEmail}, this.httpOptions);
  }

}
