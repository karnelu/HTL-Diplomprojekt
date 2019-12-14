import { Component, OnInit, SystemJsNgModuleLoader, Input } from '@angular/core';
import { Appointment } from 'src/app/appointment/appointment';
import { AppointmentService } from '../appointment.service';
import { Observable } from 'rxjs';
import { BusinessPartner } from 'src/app/business-partner/business-partner';


@Component({
  selector: 'app-upcoming-appointments',
  templateUrl: './upcoming-appointments.component.html',
  styleUrls: ['./upcoming-appointments.component.css']
})
export class UpcomingAppointmentsComponent implements OnInit {

  @Input() bpID: number;
  @Input() businessPartner: BusinessPartner;
  appointments: Observable<Appointment[]>;
  appointment = new Appointment;
 

  items = Array.from({length: 5}).map((_, i) => `Item #${i}`);

  constructor(private appointmentService: AppointmentService) { 
   
  }

  ngOnInit() {
    this.businessPartner = new BusinessPartner();
    this.businessPartner.bpID = this.bpID;
    this.getAppointments();
  }

  getAppointments(): void {
    this.appointments = this.appointmentService.getAppointments(this.businessPartner.bpID);  
  }

}
