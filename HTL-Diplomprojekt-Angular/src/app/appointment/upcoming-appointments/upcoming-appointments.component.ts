import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Appointment } from 'src/app/appointment/appointment';
import { AppointmentService } from '../appointment.service';


@Component({
  selector: 'app-upcoming-appointments',
  templateUrl: './upcoming-appointments.component.html',
  styleUrls: ['./upcoming-appointments.component.css']
})
export class UpcomingAppointmentsComponent implements OnInit {

 
  items = Array.from({length: 5}).map((_, i) => `Item #${i}`);

  constructor(private service: AppointmentService) { }

  ngOnInit() {
  }

  



}
