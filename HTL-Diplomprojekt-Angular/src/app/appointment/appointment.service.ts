import { Injectable } from '@angular/core';
import { Appointment } from 'src/app/appointment/appointment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { connection } from 'src/app/connection';
import { Observable } from 'rxjs';

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

  newAppointment(appointment: Appointment): Observable<Appointment>{
    return this.http.post<Appointment>(this.appointmentUrl + 'new', appointment, this.httpOptions);
  }




}
